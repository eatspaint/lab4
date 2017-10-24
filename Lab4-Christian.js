// 1. Set variables

// CHRISTIAN - Personally, I would give these variables more readable names. Having to type a few extra characters is a lot less of a headache than having to look around your code to recall that you called your username field 'elUsername'. (weird variable/fn names are a super academic practice I noticed a lot of in college.)
// That being said, I'll leave them as is for the sake of keeping this in sync with the original assignment.
var elUsername = document.getElementById('username');
var elEmail = document.getElementById('email');

// CHRISTIAN - Modern JS doesn't actually need closing semicolons. It is still good practice to use them for clarity, but be sure to be consistent with whichever you choose.
var nameMsg = "Username must be five characters or more! (Letters and numbers only)";
var emailMsg = "Must be valid email! Must contain @ symbol!";

// 2. Define functions

// CHRISTIAN - If your code is written clearly enough, you shouldn't need huge comment blocks to explain how functions work.
// A good indicator that I've found useful is that: if you need lots of regular comments to explain what your code does, there is probably an easier way to be writing that code.
function validateField(fieldElem, infoMessage, validateFn) {
	// create a variable that stores the value of fieldElem.nextSibling (this is where the span tag will be)

  // CHRISTIAN - 'removeEl' sounds like a function name, I would go with something very explicit/specific, to avoid things geting mixed up further down. Since this is a span being used for validator output, 'outputSpan' makes sense and is easy enough to interpret, even without much context.
  // .nextSibling can be finnicky, I would recommend going up to the parentNode, and finding the first ([0]) 'span' tag under that node, as below:
  var outputSpan = fieldElem.parentNode.getElementsByTagName('span')[0];
  var parentNode = outputSpan.parentNode;

  // CHRISTIAN - LOL this next bit even confused me. Horribly worded, and missing like half of the context it needs.
  // What this sounds like to me is just: "Get the span adjacent to the input, make sure it's empty. If it isn't, get rid of it so we can make a new one"
  // Calling it "previousSpan" is just making things more confusing. I would ignore that phrasing.

	// if there is a previous span tag (e.g., previousSpan != null),
  if (outputSpan != null) {
    //	remove the previous span by calling the 'removeChild()' function on the previous span's parent
    // 	(hint: see Duckett 2014, p. 225)
    parentNode.removeChild(outputSpan);
  }

	// adding an element to the DOM tree (hint: see Duckett 2014, p. 223)
	// create a new span element
  // CHRISTIAN - Since we're done working with 'outputSpan' from above, and that variable name is dope/not-in-use, let's reuse it.
  outputSpan = document.createElement('span'); // BOOM, overwritten, WITCHCRAFT

	// create a new textnode whose content is the value of 'infoMessage'
  // CHRISTIAN - I like trying to keep naming informative as to what things actually are, straying from 'old/new/previous/next' where possible
  var infoText = document.createTextNode(infoMessage);
  // CHRISTIAN - While we're here doing this, let's also create a text node for success: "OK", this will make more sense below
  var okText = document.createTextNode('OK');

	// append your text node to the span element
  // CHRISTIAN - How about we don't. Here's how you would do it, but it makes more sense to do it in the conditional below, rather than before we know which text variable to use.
  // outputSpan.appendChild(infoText);

	// if nothing is entered into the text box (fieldElem.value.length == 0)
  if (fieldElem.value.length == 0) {
    // hide the span by setting its '.style.display' property
    // document.getElementById(fieldElem).style.display = 'none';
    // CHRISTIAN - we don't want to hide the input, just the outputSpan
    // essentially "If nothing is entered, don't show the validation yet"
  	outputSpan.style.display = 'none';
  } else {
    // CHRISTIAN - check that the output of the passed validateFn is equal to true
  	if (validateFn() == true) {
      // change the content of your new text node to 'OK'
      // CHRISTIAN - Instead: "add okText as a child of outputSpan"
      outputSpan.appendChild(okText);
      // apply the 'ok' style to the new span element
      outputSpan.className = 'ok';
      // CHRISTIAN - setting the class this way is convenient because we don't have to worry about what classes might already be present, it just overwrites them. Sometimes you need to toggle between classes while keeping others intact. In those cases, you can use something like: .removeClass('error').addClass('ok'); but that can get lengthy fast.
    } else {
      //	change the content of your new text node to the data stored in the 'infoMessage' variable
      // CHRISTIAN - Instead: "add infoText as a child of outputSpan"
      outputSpan.appendChild(infoText);
      //	apply the 'error' style to the new span element
      outputSpan.className = 'error';
  	}
    //	show the new span element by setting its '.style.display' property
    // CHRISTIAN - just countering the display logic from the 'if' statement above
    outputSpan.style.display = 'inline';
  }
  // append the new span element to the DOM tree by calling 'appendChild()' on fieldElem's parentNode
  // CHRISTIAN - Since we already have the parentNode variable from above, we can use it here to write the outputSpan as a new child
  parentNode.appendChild(outputSpan);
}

/*
 * Function: checkUsername
 * -----------------------
 *	This function checks whether text entered into the username text field is 5 or more characters long
 *  Bonus: For extra credit toward your Assignments average, check if it also only contains letter or numbers.
 *	returns: true if it is; false if it isn't
 */
function checkUsername() {
  var username = elUsername.value;
  // CHRISTIAN - This regex will only match on Alphanumeric characters, and requires at least 5 characters to match
  // https://regexr.com/ is a good resource for building regexps
  var reg = /^[A-z0-9]{5,}$/g;
	if (reg.test(username)) {
		return true;
	} else {
		return false;
	}
}

/*
 * Function: checkEmail
 * --------------------
 *	This function checks whether the text entered into the email field contains an '@' symbol
 *
 *	returns: true if it passes; false if it doesn't
 */
function checkEmail() {
  var email = elEmail.value;
	var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
 	if (reg.test(email)) {
 		return true;
  } else {
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
