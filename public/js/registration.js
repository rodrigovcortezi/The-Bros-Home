const validator = require('validator');

let formValidator = function(element) {
    let result;
    let name = element.name;
    let value = element.value;

    if(name === 'name') {
	result = value.length > 0;
    }
    else if(name === 'username') {
	result = validator.isAscii(value);
    }
    else if(name === 'email') {
	result = validator.isEmail(value);
    }
    else if(name === 'password') {
	result = value.length >= 8;
    }
    else {
	result = false;
    }

    //TODO: Remove this console log
    console.log(result);
    return result;
};

let inputElements = document.querySelectorAll('.registration-area form input');
inputElements.forEach(element => {
    element.addEventListener('blur', function() {
	let result = formValidator(element);
	if(result) {
	    element.classList.remove('danger');
	} else {
	    element.classList.add('danger');
	}
    });
});
