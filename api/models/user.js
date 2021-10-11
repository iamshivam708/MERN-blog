const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String
    },
    hashedPassword:{
        type:String
    }
})

module.exports = mongoose.model("User", UserSchema)