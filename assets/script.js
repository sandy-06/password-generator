// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  var ucAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var numbers = numbers[1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  var special = special["@", "%", "+", "!", "#", "$", "^", "?", ":", ",", "(", ")", "{", "}", "[", "]", "~"];






}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);