const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const configDB = require('./config/database.js');

mongoose.connect(configDB.url, {useNewUrlParser: true});

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/login', function(req, res) {
    res.render('index');
});

app.get('/signup', function(req, res) {
    res.render('registration');
});

app.listen(port, () => console.log('Server listening on port ' + port));
