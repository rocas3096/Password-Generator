//Create Arrays for the characters of the password
var uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase="abcdefghijklmnopqrstuvwxyz";
var numbers="0123456789";
var special="~`!@#$%^&*()-_=+[]{}|;\"':<>,./?";


//Write function for generating password
function generatePassword () {
  var password="";
  var passwordlength= prompt("How long would you like your password to be?\n \nChoose a length between 8 and 128 characters");


  //Double check for password length
  if (passwordlength < 8 || passwordlength > 128) {
    alert("Password length must be between 8 and 128 characters");
    return generatePassword();
  }
  //prompts for character types
  var includeslowercase= confirm("Do you want to include lowercase letters in your password?");
  var includesuppercase= confirm("Do you want to include uppercase letters in your password?");
  var includesnumbers= confirm("Do you want to include numbers in your password?");
  var includesspecialcharacters= confirm("Do you want to include special characters in your password?");
  
  //check to make sure at least one was selected
  
  if (!includeslowercase && !includesuppercase && !includesnumbers && !includesspecialcharacters){
    alert("You must select at least one of the following to include in your password:\n \n Lowercase letters, uppercase letters, numbers or special characters");
  return generatePassword();
  }
  
  //create a pool for password characters
  var pool = "";
  if (includeslowercase === true){
    pool += lowercase;
  }
  if (includesuppercase === true){
    pool += uppercase;
  }
  if (includesnumbers === true){
    pool += numbers;
  }
  if (includesspecialcharacters === true){
    pool += special;
  }
  
  //generates the actual password
  for (var i = 0; i < passwordlength; i++){
    var index = Math.floor(Math.random() * pool.length);
    password += pool[index];
  }

  return password;
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
