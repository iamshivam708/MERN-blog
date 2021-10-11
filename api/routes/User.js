const express = require('express')
const router = express.Router();
const User = require('../models/user')
const bcrypt = require("bcryptjs");

//signup
router.post("/", async (req,res) =>{
    const user = new User({
        name: req.body.name,
        email:req.body.email,
        hashedPassword: bcrypt.hashSync(req.body.password, 10)
    })

    users = await user.save()
    if(!users)
    return res.status(400).send('the user cannot be created!')

    res.send(users);
})

//login
router.post('/login', async (req, res) =>{
    await User.findOne({email: req.body.email}).then((user) =>{
        if(!user){
            return res.status(200).send({error:'The user not found'})
        }
        if(user && bcrypt.compareSync(req.body.password, user.hashedPassword)){
            res.status(200).send({user:user.email})
        }else{
            res.status(200).send({error:"password is wrong"})
        }
    }).catch((err) =>{
        res.send(err);
    })
})

//getting user data from email
router.get('/:email', async (req,res) =>{
    await User.find({email:req.params.email}).exec((err,user) =>{
        if(err || !user){
            res.status(400).send({error: 'user not found'});
        }else{
            res.status(200).send(user);
        }
    })
})


module.exports = router