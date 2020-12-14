var generatePassword = function() {  
  //choose the number of characters
  var passLength = window.prompt(
    "How many characters would you like this password to contain? Please choose a number from 8 - 128"
  );

  if (passLength > 128 || passLength < 8) {
    window.alert("Please choose a number from 8 - 128.");
    return generatePassword();
  } else {
    window.alert("Your password will be " + passLength + " characters.");
  }

  console.log(passLength);
  
  //choose to include lowercase characters
    var lowerConfirm = confirm(
      "Click OK to use lowercase letters in your password."
    );
  
  //choose to include uppercase characters
    var upperConfirm = confirm(
      "Click OK to use uppercase letters in your password."
    ); 
  
  //choose in include numbers
  var numConfirm = confirm(
    "Click OK to use numbers in your password."
  );
  
  //choose to include special characters
  var specialCharConfirm = confirm(
    "Click OK to use special characters in your password."
  );

  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var number = "0123456789";
  var special = "#$%&()*+=-.,!?<>@-_;:";

  var passCriteria = "";
  if (lowerConfirm) {
    passCriteria += lower;
  } 
  if (upperConfirm) {
    passCriteria += upper; 
  } 
  if (numConfirm) {
    passCriteria += number;
  } 
  if (specialCharConfirm) {
    passCriteria += special; 
  }  
 
  var pass = "";
  for (var i = 0; i < passLength; i++) {
    pass += passCriteria.charAt(Math.floor(Math.random() * passCriteria.length));
  }

  if (pass === "" || pass === null) {
    window.alert("Please choose at least one type of character to include in your password!");
    return generatePassword();
  }

  console.log(pass);
  return pass;
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/*while (passLength > 128 || passLength < 8) {
  passLength = window.prompt(
    "How many characters would you like this password to contain? Please choose a number from 8 - 128."
  );
}

console.log (passLength);
return passLength;
*/