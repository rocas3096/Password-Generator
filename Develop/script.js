// Assignment code here

//Create Arrays for the characters of the password
var uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercase="abcdefghijklmnopqrstuvwxyz"
var numbers="0123456789"
var special="~`!@#$%^&*()-_=+[]{}|;\"':<>,./?"


//Write function for generating password
function generatePassword () {
  var password=""
  var passwordlength= prompt("How long would you like your password to be?\n \nChoose a length between 8 and 128 characters")


  //Double check for password length
  if (passwordlength < 8 || passwordlength > 128) {
    alert("Password length must be between 8 and 128 characters")
    return generatePassword()
  }
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
