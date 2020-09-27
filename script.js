//creation of variables to hold our characters

var specialCharacters = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "|"];

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];





//prompt user to see how many characters they would like in there password
var length = parseInt(
  prompt("Between 8 and 128, how many characters would you like your password to contain?")
);

//password must not be less than 8 characters or greater than 128 characters or a letter
while ((length < 8) || (length > 128) || (isNaN(length) === true)) {
  alert("Password must contain 8 or more characters");
  length = parseInt(
    prompt("Between 8 and 128, how many characters would you like your password to contain?")
  );
}

//storing boolean values of whether or not password will contain certain types of characters
var hasSpecialCharacters = confirm("Would you like your password to contain special characters?");

var hasNumbers = confirm("Would you like your password to contain numbers?");

var hasLowerCaseLetters = confirm("Would you like your password to contain lowercase letters?");

var hasUpperCaseLetters = confirm("Would you like your password to contain uppercase letters?");

//password confirms must hold true for at least one of the previous questions
while ((hasSpecialCharacters === false) && (hasNumbers === false) && (hasLowerCaseLetters === false) && (hasUpperCaseLetters === false)) {
  alert("Password must contain at least one of the following: a special character, a number, a lowercase letter or an uppercase letter.");
  hasSpecialCharacters = confirm("Would you like your password to contain special characters?");
  hasNumbers = confirm("Would you like your password to contain numbers?");
  hasLowerCaseLetters = confirm("Would you like your password to contain lowercase letters?");
  hasUpperCaseLetters = confirm("Would you like your password to contain uppercase letters?");
};

//object to store users input
var passwordOptions = {
  length: length,
  hasSpecialCharacters: hasSpecialCharacters,
  hasNumbers: hasNumbers,
  hasLowerCaseLetters: hasLowerCaseLetters,
  hasUpperCaseLetters: hasUpperCaseLetters
};

for (var i = 0; i < length; i++) {
  function generatePassword() {
    Math.floor(Math.random(specialCharacters));
  }
}

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