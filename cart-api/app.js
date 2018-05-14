var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var bluebird = require('bluebird');
var cors = require('cors');

var indexRouter = require('./routes/index');

var api = require('./routes/api.route');


var app = express();


mongoose.Promise = bluebird;
mongoose.connect('mongodb://127.0.0.1:27017/cartapp')
.then(()=> { console.log(`Succesfully Connected to the Mongodb Database  at URL : mongodb://127.0.0.1:27017/cartapp`)})
.catch(()=> { console.log(`Error Connecting to the Mongodb Database at URL : mongodb://127.0.0.1:27017/cartapp`)});

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);


app.use('/api', api);


module.exports = app;
