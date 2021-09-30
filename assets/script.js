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
    return;
  }
  while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be between 8 and 128. How many characters do you want?"));


  var lcase = window.confirm("Do you want lowercase letters? Select 'ok' for yes and 'cancel' for no.");

  var ucase = window.confirm("Do you want uppercase letters? Select 'ok' for yes and 'cancel' for no.");

  var num = window.confirm("Do you want numbers? Select 'ok' for yes and 'cancel' for no.");

  var symbols = window.confirm("Do you want special characters? Select 'ok' for yes and 'cancel' for no.");


  if (!lcase && !ucase && !num && !symbols) {
    (prompt("You need to choose at least one option!"));
  };
  var answers = {
    length: length,
    lcase: lcase,
    ucase: ucase,
    num: num,
    symbols: symbols,
  }

  return answers;






}

function generatePassword() {
  var passwordOptions = getPasswordOptions();
  console.log(passwordOptions);
  var source = [];
  var results = [];
  if (passwordOptions.lcase) {
    source = source.concat(alphabet);
  }
  if (passwordOptions.ucase) {
    source = source.concat(ucAlphabet);
  }
  if (passwordOptions.num) {
    source = source.concat(numbers);
  }
  if (passwordOptions.symbols) {
    source = source.concat(special);
  }
  for (i = 0; i < passwordOptions.length; i++) {
    var randomIndex = Math.floor(Math.random() * source.length);
    results.push(source[randomIndex])
  }
  return results.join("");
}


//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;








}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);