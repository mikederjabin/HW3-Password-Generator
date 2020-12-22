// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
].join("");

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].join(
  ""
);

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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
].join("");

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
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
].join("");

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var PasswordLength = prompt("Choose password length. (8-128 Characters)");
  if (PasswordLength < 8 || PasswordLength > 128) {
    alert("Password lenght must be between 8 and 128 characters.");
    return;
  }
  var PasswordNumeric = confirm("Do you want to use numeric characters?");
  var PasswordSpecial = confirm("Do you want to use special characters?");
  var PasswordLower = confirm("Do you want to use lower case characters?");
  var PasswordUpper = confirm("Do you want to use upper case characters?");
  var char = "";

  if (PasswordNumeric == true) {
    char = char + numericCharacters;
  }

  if (PasswordSpecial == true) {
    char = char + specialCharacters;
  }

  if (PasswordLower == true) {
    char = char + lowerCasedCharacters;
  }

  if (PasswordUpper == true) {
    char = char + upperCasedCharacters;
  }

  console.log(char);

  var pass = "";

  for (i = 1; i <= PasswordLength; i++) {
    var str = Math.floor(Math.random() * char.length + 1);
    pass += char.charAt(str);
  }

  return pass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
