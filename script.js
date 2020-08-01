// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

function generatePassword(){
  
  var tempPassword = "";
  var userLength = prompt("How long do you want your password? (8-128)");
  
  var lowerCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperCharacters = lowerCharacters.map(toUpper);
  var numCharacters = ["1","2","3","4","5","6","7","8","8","0"]
  var specialCharacters = ["!","@","#","$","%","^","&","*","(",")","+"];
  var passwordVar = [];


  function looper(){
    for(var i=0; i < userLength; i++) {
      tempPassword += (passwordVar[(Math.floor(Math.random() * passwordVar.length))]);
    }
    }

  function addToArry(x,y){
  
    if (x == true ){ 
      passwordVar = passwordVar.concat(y);
      
    }
  }
// Checks to see what conditions are true, if they are add them to allowed array
  if(userLength < 129 && userLength > 7){
    tempPassword = "";
    var userLower = confirm("Do you want lowercase letters?");
    var userUpper = confirm("Do you want uppercase letters?");
    var userNum = confirm("Do you want numbers?");
    var userSpecial = confirm("Do you want special charcters?");

    addToArry(userLower,lowerCharacters);
    addToArry(userUpper,upperCharacters);
    addToArry(userNum,numCharacters);
    addToArry(userSpecial,specialCharacters);
    looper();
  }else{
    alert("Please pick a number between 8-128");
  }
// if nothing is chosen will ask user to pick one condition
  if(userLower == false && userUpper == false && userNum == false && userSpecial == false){
    alert("Please click include one condition")
    tempPassword = "Please click include one condition"
  }

  return tempPassword;
}

toUpper = function(x){
  return x.toUpperCase();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

