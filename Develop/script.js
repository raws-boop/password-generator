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

// create a display prompt to request user password length
var passwordLength = prompt ("Indicate desired password length");

if (passwordLength >= 8 && passwordLength <=128 && osMaM([passwordLength] == false)) {
 choices()

} else {
alert("Password mus be between 8 and 128 characters");
generatePassword();

}

  return "password"

}


//how many charachers would you like to contaim
//click okay to confirm lowercase
//click okay to confirm Uppercase
//click okay to confirm number
//click okay to confirm special character



//store items as a variable
//use a confirm - yes = true or no = untrue, yes = store as variable
//store them all as a string? store them as an array seems like the best way. review pull random element from an array.
//how to use these stored variables to now generate a password that matches the requirements (9x)
//use a for loop to pull variables out to create a password
//