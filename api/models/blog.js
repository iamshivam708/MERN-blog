const mongoose = require('mongoose');

const BlogSchema = mongoose.Schema({
    title:{
        type:String,
    },
    description:{
        type:String
    },
    category:{
        type:String
    },
    date:{
        type:String
    },
    time:{
        type:String
    },
    image:{
        type:String
    },
    featured:{
        type:String
    }
})

module.exports = mongoose.model("Blog", BlogSchema)