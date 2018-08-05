const User = require('./models/user.js');

module.exports = function(app) {

    app.get('/login', function(req, res) {
	res.render('index');
    });

    app.get('/signup', function(req, res) {
	res.render('registration');
    });

    app.post('/signup', function(req, res) {
	const newUser = new User();

	newUser.local.name = req.body.name;
	newUser.local.username = req.body.username;
	newUser.local.email = req.body.email;
	newUser.local.password = req.body.password;

	newUser.save(function(err) {
	    if(err) {
		throw err;
	    }
	});

	res.send('user registred!');
    });

};
