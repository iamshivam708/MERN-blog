const express = require('express')
const router = express.Router();
const Category = require('../models/categories')
const Blog = require('../models/blog');


//get all category
router.get('/', async (req,res) =>{
    await Category.find().then((cat) =>{
        res.status(200).send(cat);
    }).catch((err) =>{
        res.send(err);
    })
})

//create new category
router.post('/',async (req,res) =>{
    const category = new Category({
        title: req.body.title
    })

    await category.save().then((result) =>{
        res.status(200).send(result);
    }).catch((err) =>{
        res.send(err);
    })
})

//getting blogs according to category
router.get('/:name', async (req,res) =>{
    await Blog.find({category: { $regex:req.params.name,  $options: 'i'}}).exec((err,blogs) =>{
        if(err){
            res.status(400).send(err);
        }else{
            res.status(200).send(blogs);
        }
    })
})

module.exports = router;