// Assignment code here

// Password varaible and objects
var passwordCharacters = {
  numberLength: 8,
  value: "",
  characters: []
  reset: function () {
    (this.value = ""), (numberLength = 8); (this.characters);
  },
};

// Password Choices Selection
var passwordSelection = {
  lowercase: [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ],
  uppercase: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ],
  specialSymbol: ["!", "@", "#", "$", "%", "*", "&"],
  numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
};

// Length of password function
var passwordLengthFunction = function () {
  var passwordLength = window.prompt(
    "Please specify number of characters from 8 to 20."
  );
  if (passwordLength === "" || passwordLength === null) {
    window.alert("Please try again, search bar is empty.");
  }
  if (passwordLength >= 8 && passwordLength <= 20) {
    passwordCharacters.numberLength = passwordLength;
  } else {
    window.alert("Please enter a number between 8 and 20!");
  }
};
passwordLengthFunction();

// Generate random number
var generateRandomPassword = function () {
  for (var n = 0; n < passwordCharacters.numberLength; n++) {
    var randomNumber = Math.floor(Math.random() * passwordCharacters.characters.length);
    passwordCharacters.value += passwordCharacters.characters[randomNumber];
  }
};

generateRandomPassword();

// Lowercase letter option
var lowerCase = function () {
  var lowercaseLetter = window.prompt(
    "Are there any lowercase letters in your password? Choose 'yes' or 'no'."
  );
  if (lowercaseLetter === "" || lowercaseLetter === null) {
    window.alert("Empty search bar. Try again");
    lowercaseLetter = window.prompt(
      "Would you like to use lowercase? Choose 'yes' or 'no'."
    );
  } else {
    lowercaseLetter = lowercaseLetter.toLowerCase();

    switch (lowercaseLetter) {
        case 'yes':
          passwordCharacters = passwordCharacters.concat(passwordSelection.lowercase);
          break;
        case 'no':
          break;
        default: 
          window.alert("Try again.");
  }
};

lowerCase();

// Uppercase letter option
var upperCase = function () {
  var uppercaseLetter = window.prompt(
    "Are there any uppercase letters in your password? Choose 'yes' or 'no'."
  );
  if (uppercaseLetter === "" || uppercaseLetter === null) {
    window.alert("Empty search bar. Try again");
    upperCase();
  } else {
    uppercaseLetter = uppercaseLetter.toLowerCase();

    switch (uppercaseLetter) {
        case 'yes':
          passwordInfo. = passwordInfo.characters.concat(passwordChoices.uppercase);
          break;
        case 'no':
          break;
        default: 
          window.alert("Please make a valid selection. Try again.");
          uppercaseFunction();
      }
  }
};

upperCase();

// Numeric option
var numberFunction = function () {
  var numberSelection = window.prompt(
    "Would you like to use numbers? Choose 'yes' or 'no'."
  );
  if (numberSelection === "" || numberSelection === null) {
    window.alert("Fields left empty. Please try again");
    numberFunction();
  } else {
    numberSelection = numberSelection.toLowerCase();
  }
};

numberFunction();

// Special Character option
var specialFunction = function () {
  var specialCharacter = window.prompt(
    "Would you like to use special characters? Choose 'yes' or 'no'."
  );
  if (specialCharacter === "" || specialCharacter === null) {
    window.alert("Fields left empty. Please try again");
    specialFunction();
  } else {
    specialCharacter = specialCharacter.toLowerCase();
  }
};

specialFunction();

function generatePassword() {
  passwordCharacters.reset();
  passwordLengthFunction();
  lowerCase();
  upperCase();
  numberFunction();
  specialFunction();
  generateRandomPassword();
}

generatePassword();

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
