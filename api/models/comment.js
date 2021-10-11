const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    blogId:{
        type:String
    },
    comment:{
        type:String,
    },
    email:{
        type:String
    }
})

module.exports = mongoose.model("Comment", CommentSchema)