const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')

//Middle wares
const app = express();
app.use(bodyParser.json())
app.use(cors());
require('dotenv').config()

//routes
const UserRouter = require('./routes/User')
app.use('/user',UserRouter)

const CategoryRouter = require('./routes/Category')
app.use('/category', CategoryRouter);

const BlogRouter = require('./routes/Blog')
app.use('/blog', BlogRouter)

//database connection
mongoose.connect(process.env.CONNECTION_URL).then(() =>{
    console.log("database connected")
}).catch(err =>{
    console.log(err)
})

//port
const port = process.env.PORT
app.listen(port, () =>{
    console.log(`app running on port ${port}`)
})