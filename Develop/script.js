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

function generatePassword() {

// create a display prompt to request user password length //how many characters would you like to contaim
var passwordLength = prompt ("Indicate desired password length");

if (passwordLength >= 8 && passwordLength <=128 && osMaM([passwordLength] == false)) {
 userChoices();

 for (var i = 0; i < passwordLength; i++) {
  var randomNum = Math.floor(Math.random() * successPass.length)
  password += successPass[randomNum]
}

//print secure password
  return "password" ;

} else {
alert("Password must be between 8 and 128 characters");
generatePassword();

};

function userChoices(){

//click okay to confirm Uppercase
var uppercaseChoice = confirm ("Does your password contain one or more upper case letters?")
//click okay to confirm number
var numChoice = confirm ("Does your password contain one or more numbers?")
//click okay to confirm special character
var specChoice = confirm ("Does your password contain one or more special characters?")

//use a confirm - yes = true or no = untrue, yes = store as variable within an array
if (uppercaseChoice ===true && numChoice === true && specChoice === true) {
successPass = lowercaseChoice.concat(uppercase, numArr, specChar);
} else if (uppercaseChoice === true && numChoice === true && specChoice === false){
  successPass = lowercaseChoice.concat(uppercase, numArr);
} else if (uppercaseChoice === true && numChoice === false && specChoice === false){
  successPass = lowercaseChoice.concat(uppercase);
} else if (uppercaseChoice === false && numChoice === true && specChoice === true){
  successPass = lowercaseChoice.concat(numArr, specChar);
} else if (uppercaseChoice === false && numChoice === false && specChoice === true){
  successPass = lowercaseChoice.concat(specChar);
} else if (uppercaseChoice === true && numChoice === false && specChoice === true){
  successPass = lowercaseChoice.concat(uppercase, specChar);
} else if (uppercaseChoice === false && numChoice === true && specChoice === false){
  successPass = lowercaseChoice.concat(numArr);
} else{
  successPass = lowercase
}
} ;

}

// store them all as a string? store them as an array seems like the best way. review pull random element from an array.
// how to use these stored variables to now generate a password that matches the requirements (9x)
// use a for loop to pull variables out to create a password