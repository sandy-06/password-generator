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
  var length= parseInt(prompt("How many Characters do you want in your password"));
  if(Number.isNaN(length)){
    alert("Please enter a number")

  }
  if length< 8
 

}
getPasswordOptions();
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

 






}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
