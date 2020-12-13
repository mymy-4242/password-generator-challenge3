
  //choose the number of characters
  var characters = window.prompt(
    "How many characters would you like this password to contain?"
  );

    if (characters < 8 || characters > 128) {
      window.alert("Please choose a number from 8 - 128.");
    }
    console.log(characters);
  
  //choose to include lowercase characters
    var lowerConfirm = confirm(
      "Click OK to use lowercase letters in your password."
    );
  
  //choose to include uppercase characters
    var upperConfirm = confirm(
      "Click OK to use uppercase letters in your password."
    ); 

var generatePassword = function() {
  var passCriteria = "";
  if (lowerConfirm) {
    passCriteria = "abcdefghijklmnopqrstuvwxyz";
  } else if (upperConfirm) {
    passCriteria = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
 
  var pass = ""
  for (let i = 0; i < characters; i++) {
    pass += passCriteria.charAt(Math.floor(Math.random() * passCriteria.characters));
  }
  return(pass);
}
  /*  
  //choose in include numbers
    var numConfirm = confirm(
      "Click OK to use numbers in your password."
    );
    var num = []
  //choose to include special characters
    var specialCharConfirm = confirm(
      "Click OK to use special characters in your password."
    );

    if (specialCharConfirm) {
      var specialChar = ['!', '#', '$', '%', '&', '(', ')', '*', '+', '=', '-', '.', '!', '?', '<', '>', '@', '-', '_', ';', ':'];
      for (var i = 0; i < characters; i++) {
        console.log(specialChar[i]);
      }
    }
  //show results
  var results = function(){
    for (var i = 0; i < characters; ++i) {
      console.log;
    }
  }
    
}
*/

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

