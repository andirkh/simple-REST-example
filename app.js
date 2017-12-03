var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
app.use(bodyParser.json());

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;

// routes
var persons = require('./routes/persons');
var stories = require('./routes/stories');
app.use('/persons', persons);
app.use('/stories', stories);

app.listen(3000);
console.log('RUnning on port 3000')
