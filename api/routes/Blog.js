const express = require('express')
const router = express.Router();
const Blog = require('../models/blog');
const moment = require('moment');


const multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../../Blog App/blog/public/blog')
    },
    filename: function (req, file, cb) {
      cb(null,file.originalname)
    }
  })
   
  var upload = multer({ storage: storage })

//create a blog
router.post('/',upload.single('image'), async (req,res) =>{
    var date = moment().format("MMM Do YY");
    var time = moment().format('LT');
    const blog = new Blog({
        title:req.body.title,
        description: req.body.description,
        category:req.body.category,
        date:date,
        time:time,
        image:req.file.filename,
        featured:req.body.featured
    })

    await blog.save().then((result) =>{
        res.status(200).send(result);
    }).catch((err) =>{
        res.send(err);
    })
})

//get latest Blog
router.get("/limited", async (req,res) =>{
    await Blog.find().sort({ _id: -1 }).limit(2).exec((err,blogs) =>{
        if(err){
            res.status(400).send(err);
        }else{
            res.status(200).send(blogs);
        }
    })
})

//getting a single blog
router.get('/:id', async (req,res) =>{
    await Blog.findById(req.params.id).then((result) =>{
        if(!result){
            res.send({error: 'no result found'})
        }else{
            res.status(200).send(result)
        }
    }).catch((err) =>{
        res.send(err);
    })
})

///get any two random featured blog
router.get('/featured/:name', async (req,res) =>{
    await Blog.aggregate([
        {$match: {featured: req.params.name}},
        {$sample: {size: 2}}
    ], function(err, docs) {
        if(err){
            res.status(400).send(err);
        }else{
            res.status(200).send(docs);
        }
    });
})

//getting single latest featured blog
router.get('/featured/single/:name', async (req,res) =>{
    await Blog.find({featured: req.params.name}).sort({ _id: -1 }).limit(1).exec((err,blogs) =>{
        if(err){
            res.status(400).send(err);
        }else{
            res.status(200).send(blogs);
        }
    })
})

//getting search blog with or query
router.get('/search/:search', async (req,res) =>{
    await Blog.find({$or: [{title: { $regex:req.params.search,  $options: 'i'}}, {description:{ $regex:req.params.search,  $options: 'i'}},{category: { $regex:req.params.search,  $options: 'i'}}] }).exec((err, blogs) =>{
        if(err || !blogs){
            return res.status(400).json('none')
        }else{
            return res.status(200).json(blogs)
        }
    })
})


module.exports = router;