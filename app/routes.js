const {check, validationResult} = require('express-validator/check');
const User = require('./models/user');

module.exports = function(app) {

    app.get('/login', function(req, res) {
	res.render('index');
    });

    app.get('/signup', function(req, res) {
	res.render('registration');
    });

    app.post('/signup', [
	check('name').trim(),
	check('username').isAlphanumeric().trim(),
	check('email').isEmail().trim(),
	check('password').isLength({min: User.passwordMinLength})
    ], function(req, res) {
	const errors = validationResult(req);
	if(!errors.isEmpty()) {
	    res.status(422);
	    res.end();

	    return;
	}

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
