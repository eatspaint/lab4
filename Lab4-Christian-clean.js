/*
  VARIABLES
*/
var elUsername = document.getElementById('username');
var elEmail = document.getElementById('email');
var nameMsg = "Username must be five characters or more! (Letters and numbers only)";
var emailMsg = "Must be valid email! Must contain @ symbol!";

/*
  FUNCTIONS
*/
function validateField(fieldElem, infoMessage, validateFn) {
  var outputSpan = fieldElem.parentNode.getElementsByTagName('span')[0];
  var parentNode = outputSpan.parentNode;

  if (outputSpan != null) {
    parentNode.removeChild(outputSpan);
  }

  outputSpan = document.createElement('span');
  var infoText = document.createTextNode(infoMessage);
  var okText = document.createTextNode('OK');

  if (fieldElem.value.length == 0) {
  	outputSpan.style.display = 'none';
  } else {
    outputSpan.style.display = 'inline';
  	if (validateFn() == true) {
      outputSpan.appendChild(okText);
      outputSpan.className = 'ok';
    } else {
      outputSpan.appendChild(infoText);
      outputSpan.className = 'error';
  	}
  }
  parentNode.appendChild(outputSpan);
}

function checkUsername() {
  var username = elUsername.value;
  var reg = /^[A-z0-9]{5,}$/g;
	return (reg.test(username)) ? true : false;
}

function checkEmail() {
  var email = elEmail.value;
	var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
 	return (reg.test(email)) ? true : false;
}

/*
  LISTENERS
*/
elUsername.addEventListener('blur', function() {
	validateField(elUsername, nameMsg, checkUsername);
}, false);

elEmail.addEventListener('blur', function() {
	validateField(elEmail, emailMsg, checkEmail);
}, false);
