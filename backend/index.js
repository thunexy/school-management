const express = require('express');
const routes = require('./routes/main');
const bp = require('body-parser');
const mongoose = require('mongoose');


//setup express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/studently');
mongoose.Promise = global.Promise;
app.use(bp.json())

app.use('/api', routes)

// error handling middleware
app.use(function(err, req, res, next) {
    res.status(422).send({ error: err.message })
})

//listen for requests
app.listen(process.env.port || 4000, () => {
    console.log("now listening for requests");
})