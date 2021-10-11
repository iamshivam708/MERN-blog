const express = require('express')
const router = express.Router();
const Comment = require('../models/comment');

router.post("/", async (req,res) =>{
    Comment.create({
        blogId: req.body.blogId,
        comment:req.body.comment,
        email: req.body.email
    },(err,result) =>{
        if(err){
            res.status(400).send(err)
        }else{
            res.status(200).send(result)
        }
    })
})

//getting all comments for single blog
router.get("/:id", async (req,res) =>{
    Comment.find({blogId: req.params.id}).exec((err, result) =>{
        if(err){
            res.status(400).send(err)
        }else{
            res.status(200).send(result)
        }
    })
})


module.exports = router