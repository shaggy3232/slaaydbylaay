
const express = require('express');
const mongoose = require ('mongoose');



require('dotenv').config();

const db = require('./config/keys').mongoURI
const URI =  'mongodb+srv://shaggy:Shaggy@slaaydbylaay.gcce7.mongodb.net/test?retryWrites=true&w=majority'


mongoose.connect(URI, { useNewUrlParser:true, useCreateIndex:true})

const connection = mongoose.connection;
connection.once ('open' , ()=> {
    console.log(' MongoDB connection established succesfully')
})

const app = express();
app.use (express.json());
app.use (express.urlencoded({extended:false}));


const PORT = process.env.PORT || 5000;

const briadsRouter = require('./routes/braids')
const LashesRouter = require('./routes/Lashes')
const SinglebraidsRouter = require('./routes/Singlebraids')

app.use('/braids',briadsRouter)
app.use('/Lashes', LashesRouter)
app.use('/Singlebraids', SinglebraidsRouter)


app.listen(PORT, ()=> {
    console.log(`server listening on port ${PORT}`)
})

module.exports = app