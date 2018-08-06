const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    local: {
	name: String,
	username: {
	    type: String,
	    unique: true
	},
	email: {
	    type: String,
	    unique: true
	},
	password: String
    },
    facebook: {
	id: String,
	token: String,
	name: String,
	email: String
    }
});

const User = mongoose.model('User', userSchema);

// Defines password min length
User.passwordMinLength = 8;

module.exports = User;
