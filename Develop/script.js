// Assignment code here

// Password varaible and objects
var passwordCharacters = {
  numberLength: 8,
  space: "",
  reset: function () {
    (this.space = ""), (numberLength = 8);
  },
};






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
