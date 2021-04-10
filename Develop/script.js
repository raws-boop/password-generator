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

//list variables
//array to hold lowercase character options
var lowercase = "qwertyuiopasdfghjklzxcvbnm".split("");

//array to hold uppercase character options
var uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");

//array to hold special character options
var specChar = "!@#$%^&*".split("");

//array to hold numbers
var numArr = "0123456789".split("");

//array to hold successful character elements
successPass = []

//variables to hold 'confirmed' user response
var uppercaseChoice = true;
var numChoice = true;
var specChoice = true;

//created variable to hold the final password
var password = [];

function generatePassword() {

// create a display prompt to request user password length //how many characters would you like to contain
var passwordLength = prompt ("Indicate desired password length");

if (passwordLength >= 8 && passwordLength <=128 && isNaN(passwordLength) == false) {
 userChoices();

 for (var i = 0; i < passwordLength; i++) {
  var randomNum = Math.floor(Math.random() * successPass.length)
  password += successPass[randomNum]
}

//print secure password
  return password ;

} else {
alert("Password must be between 8 and 128 characters");
generatePassword();

};

function userChoices(){

//click okay to confirm Uppercase
var uppercaseChoice = confirm ("Will your password contain one or more upper case letters?");
//click okay to confirm number
var numChoice = confirm ("Will your password contain one or more numbers?");
//click okay to confirm special character
var specChoice = confirm ("Will your password contain one or more special characters?");

//use a confirm - yes = true or no = untrue, yes = store as variable within an array
if (uppercaseChoice ===true && numChoice === true && specChoice === true) {
successPass = lowercase.concat(uppercase, numArr, specChar);
} else if (uppercaseChoice === true && numChoice === true && specChoice === false){
  successPass = lowercase.concat(uppercase, numArr);
} else if (uppercaseChoice === true && numChoice === false && specChoice === false){
  successPass = lowercase.concat(uppercase);
} else if (uppercaseChoice === false && numChoice === true && specChoice === true){
  successPass = lowercase.concat(numArr, specChar);
} else if (uppercaseChoice === false && numChoice === false && specChoice === true){
  successPass = lowercase.concat(specChar);
} else if (uppercaseChoice === true && numChoice === false && specChoice === true){
  successPass = lowercase.concat(uppercase, specChar);
} else if (uppercaseChoice === false && numChoice === true && specChoice === false){
  successPass = lowercase.concat(numArr);
} else{
  successPass = lowercase
}
} ;

}

// store them all as a string? store them as an array seems like the best way. review pull random element from an array.
// how to use these stored variables to now generate a password that matches the requirements (9x)
// use a for loop to pull variables out to create a password