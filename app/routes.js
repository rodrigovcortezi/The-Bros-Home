module.exports = function(app) {

    app.get('/login', function(req, res) {
	res.render('index');
    });

    app.get('/signup', function(req, res) {
	res.render('registration');
    });

};
