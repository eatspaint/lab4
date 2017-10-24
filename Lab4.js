// 1. Set variables

// the html element with id 'username'
var elUsername = document.getElementById('username');
// the html element with id 'email'
var elEmail = document.getElementById('email');
//  'username' validation message
var nameMsg = "Username must be five characters or more!"
// 'email' validation message
var emailMsg = "Must be valid email! Must contain @ symbol!"




// 2. Define functions

/*
 * Function: validateField
 * ------------------------
 *	This function validates the text of an HTML input element
 *	and generates success/error messages. In this script it is called by event listeners attached to
 *  'elUsername' and 'elEmail'.
 *	fieldElem:  a DOM element that represents a single form text field
 *	infoMessage: a string that gives a human-readable description of the field's requirements
 *	validateFn: a function that returns true if the field validates, and false if it doesn't
 *
 *	returns: none
 */
function validateField(fieldElem, infoMessage, validateFn) {
	// create a variable that stores the value of fieldElem.nextSibling (this is where the span tag will be)
  var removeEl = document.getElementByTagName ('');
  var containerEl = removeEl.parentNode;
  containerEl.removeChild(removeEl);
	// if there is a previous span tag (e.g., previousSpan != null),
	//	remove the previous span by calling the 'removeChild()' function on the previous span's parent
	// 	(hint: see Duckett 2014, p. 225)

	// adding an element to the DOM tree (hint: see Duckett 2014, p. 223)
	// create a new span element

	// create a new textnode whose content is the value of 'infoMessage'
  var elSpan = document.createElement('span');
  var newText = document.createTextNode(infoMessage);
	// append your text node to the span element
  elSpan.appendChild(newText);

	// if nothing is entered into the text box (fieldElem.value.length == 0)
	//	hide the span by setting its '.style.display' property
  if fieldElem.value.length == 0{
  	document.getElementById(fieldElem).style.display = 'none';
  } else {
  	if validateFn(true) {
  		document.write
  	}
  }


	// else
	// 	if validateFn() is true (either checkUsername() or checkEmail() returned true)
	//		change the content of your new text node to 'OK'
	//		apply the 'ok' style to the new span element
	//	else
	//		change the content of your new text node to the data stored in the 'infoMessage' variable
	//		apply the 'error' style to the new span element
 	//	show the new span element by setting its '.style.display' property

	// append the new span element to the DOM tree by calling 'appendChild()' on fieldElem's parentNode

}

/*
 * Function: checkUsername
 * -----------------------
 *	This function checks whether text entered into the username text field is 5 or more characters long
 *  Bonus: For extra credit toward your Assignments average, check if it also only contains letter or numbers.
 *	returns: true if it is; false if it isn't
 */
function checkUsername() {
	if (elUsername.value.length >==5){
		return true
	}
	else{
		return false
	}
}

/*
 * Function: checkEmail
 * --------------------
 *	This function checks whether the text entered into the email field contains an '@' symbol
 *
 *	returns: true if it passes; false if it doesn't
 */

function checkEmail(email){
	var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
 	if (reg.test(email)){
 		return true; }
	 else{
 		return false;
 	}
}

// 3. Add event listeners

// add a 'blur' event listener to 'elUsername' that calls 'validateField()'
// use your variables (part 1) and functions (part 2) in the arguments
// hint: see Duckett 2014, p. 257)
elUsername.addEventListener('blur', function(){
	validateField(elUsername, nameMsg, checkUsername);
}, false)


// add a 'blur' event listener to 'elEmail' that calls 'validateField()'
// use your variables (part 1) and functions (part 2) in the arguments
elEmail.addEventListener('blur', function(){
	validateField(elEmail, emailMsg, checkEmail);
}, false)
