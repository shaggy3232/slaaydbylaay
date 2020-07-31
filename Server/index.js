const path = require('path');
const express = require('express');
const mongoose = require ('mongoose')
const bodyparser = require ('body-parser')
const nodemailer = require('nodemailer')
const ENV = process.env.NODE_ENV;

require('dotenv').config();

const db = require('./config/keys').mongoURI


mongoose
.connect(db, {
    useNewUrlParser :true
})
.then( () => console.log('database connected'))
.catch( err => console.log(err));

const app = express();
app.use (express.json());
app.use (express.urlencoded({extended:false}));
app.use (bodyparser.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> {
    console.log(`server listening on port ${PORT}`)
})

module.exports = app