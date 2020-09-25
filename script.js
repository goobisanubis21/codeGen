//create var to hold our characters

var specialCharacters = ["~", "`", ];

var numericalValues = ["1234567890".split()];

var lowerCaseLetters = ["abcdefghijklmnopqrstuvwxyz".split()];

//create a function to prompt user for password options

function getPasswordOptions() {
  var length = parseInt(
    prompt("How many character would you like your password to contain?")
  );
}

if (isNaN(length) === true) {
  alert("Password length must be provided with a number");
  return;
}

//conditional statement to check if password length is true

if ((length < 8) || (length > 128)) {
  alert("Password character not in range please choose a number between 8 and 128")
  return;
}

//asking the user what characters they want (special numbers, lower or upper)




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
