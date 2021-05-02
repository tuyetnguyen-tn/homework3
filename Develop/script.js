// Assignment Code
var generateBtn = document.querySelector("#generate");

var nums = [0,1,2,3,4,5,6,7,8,9];
var spec = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lCase = "abcdefghigklmnopqrstuvwxyz";

// Write password to the #password input
function writePassword() {
  var length = prompt("How many characters");
  if (length < 8 || length > 128) {
    return
  }
  let special = confirm("Do you want special characters?");
  let uppercase = confirm("Uppercase?");
  let lowercase = confirm("lowercase?");
  let numberic = confirm("numberic?");


  if (!special && !uppercase && !numberic) {
    return
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(i, )
for (let i=0; i< length; i++)

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
