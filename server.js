const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const configDB = require('./config/database.js');
const defineRoutes = require('./app/routes.js');

mongoose.connect(configDB.url, {useNewUrlParser: true});

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.set('view engine', 'ejs');

defineRoutes(app);

app.listen(port, () => console.log('Server listening on port ' + port));
