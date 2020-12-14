var generatePassword = function() {  
  //choose the number of characters
  var passLength = window.prompt(
    "How many characters would you like this password to contain? Please choose a number from 8 - 128"
  );

  if (passLength > 128 || passLength < 8) {
    window.alert("Please choose a number from 8 - 128.");
    //return to beginning of function if password length choice was outside of limits
    return generatePassword();
  } else {
    window.alert("Your password will be " + passLength + " characters.");
  }
  
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

  //variable sets for each criteria
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var number = "0123456789";
  var special = "#$%&()*+=-.,!?<>@-_;:";

  //determine what criteria was chosen
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
 
  //generate the password based on chosed criteria
  var pass = "";
  for (var i = 0; i < passLength; i++) {
    pass += passCriteria.charAt(Math.floor(Math.random() * passCriteria.length));
  }

  //return to beginning of function if no criteria was chosen
  if (pass === "" || pass === null) {
    window.alert("Please choose at least one type of character to include in your password!");
    return generatePassword();
  }

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
