const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json())
app.use(cors());
require('dotenv').config()

//port
const port = process.env.PORT
app.listen(port, () =>{
    console.log(`app running on port ${port}`)
})