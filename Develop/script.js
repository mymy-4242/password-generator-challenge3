// Assignment code here

//number of characters
var generatePassword = function() {
  //choose the number of characters
  var characters = window.prompt(
    "How many characters would you like this password to contain?"
  );

    if (characters < 8 || characters > 128) {
      window.alert("Please choose a number from 8 - 128.");
      return generatePassword();
    } else {
      var characters = array.length;
      //save number of characters in session storage
      sessionStorage.setItem("numberOfCharacters", characters);
    }
    console.log(characters);
  
  //choose to include lowercase characters
  
  //choose to include uppercase characters
    
  //choose in include numbers

  //choose to include special characters
  var specialChar = ['!', '#', '$', '%', '&', '(', ')', '*', '+', '=', '-', '.', '!', '?', '<', '>', '@', '-', '_', ';', ':'];

  //show results
  
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
