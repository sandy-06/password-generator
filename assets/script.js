// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
var ucAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var special = ["@", "%", "+", "!", "#", "$", "^", "?", ":", ",", "(", ")", "/", "{", "}", "[", "]", "~"];
console.log(alphabet);
console.log(ucAlphabet);
console.log(numbers);
console.log(special);

function getPasswordOptions() {
  var length = parseInt(prompt("Please choose a length between 8 and 128"));
  if (Number.isNaN(length)) {
    alert("Please enter a number")
  }
  while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be between 8 and 128. How many characters do you want?"));
if 
  var lcase = confirm("Do you want lowercase letters?");
  var ucase = confirm("Do you want uppercase letters?");
  var num = confirm("Do you want numbers?");
  var symbols = confirm("Do you want special characters?");


 // While(!lcase && !ucase && !num && !symbols) {
    alert("You need to choose at least one option!");
    lcase = confirm("Do you want lowercase letters?");
    ucase = confirm("Do you want uppercase letters?");
    num = confirm("Do you want numbers?");
    symbols = confirm("Do you want special characters?");
  };

  getPasswordOptions();
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;








  }



  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);