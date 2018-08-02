const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/login', function(req, res) {
    res.render('index');
});

app.get('/signup', function(req, res) {
    res.render('registration');
});

app.listen(port, () => console.log('Server listening on port ' + port));
