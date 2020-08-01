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
  var userLower = confirm("Do you want lowercase letters?");
  var userUpper = confirm("Do you want uppercase letters?");
  var userNum = confirm("Do you want numbers?");
  var userSpecial = confirm("Do you want special charcters?");

  var lowerCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperCharacters = lowerCharacters.map(toUpper);
  var numCharacters = ["1","2","3","4","5","6","7","8","8","0"]
  var specialCharacters = ["!","@","#","$","%","^","&","*","(",")","+"];


  function looper(x){
    for(var i=0; i < userLength; i++) {
      tempPassword += (x[(Math.floor(Math.random() * x.length))]);
    }
    }



// placeholder password that also works if user only wants lower
  if(userLength < 129 && userLength > 7){
    looper(lowerCharacters);
  }else{
    prompt("Please refresh page and pick a number between 8-128");
  }

// if user doesn't want lower
  if(userLower == false){
    tempPassword = "";
  }
// if user only picks upper
  if(userUpper == true){
    looper(upperCharacters);
  }
// if user picks lower + upper
  if(userUpper == true && userLower == true){
    tempPassword = "";
    var lowerUpper = lowerCharacters.concat(upperCharacters);
    looper(lowerUpper);
  } 

// if user only picks numbers
  if(userNum == true){
    looper(numCharacters);
  }

// if user picks numbers and lower
  if(userNum == true && userLower == true){
    tempPassword = "";
    var lowerNum = lowerCharacters.concat(numCharacters);
    looper(lowerNum);
  }

// if user picks num and upper
  if(userNum == true && userUpper == true){
    tempPassword = "";
    var upperNum = upperCharacters.concat(numCharacters);
    looper(upperNum);
  }

// if user picks num lower and upper
  if(userNum == true && userUpper == true && userLower == true){
    tempPassword = "";
    var lowerupperNum = lowerNum.concat(upperCharacters);
    looper(lowerupperNum);
  }

// if user picks only special char
  if (userSpecial == true){
    looper(specialCharacters);
}

// if user picks special and lower
if(userSpecial == true && userLower == true){
  tempPassword = "";
  var specialLower = lowerCharacters.concat(specialCharacters);
  looper(specialLower);
}

// if user picks special and upper
if(userSpecial == true && userUpper == true){
  tempPassword = "";
  var specialUpper = upperCharacters.concat(specialCharacters);
  looper(specialUpper);
}

// if user picks special and number
if(userSpecial == true && userNum == true){
  tempPassword = "";
  var specialNum = numCharacters.concat(specialCharacters);
  looper(specialNum);
}

// if user picks special lower and num
if(userSpecial == true && userLower == true && userNum == true){
  tempPassword = "";
  var specialLowerNum = specialLower.concat(numCharacters);
  looper(specialLowerNum);
}


// if user picks special upper num
if(userSpecial == true && userUpper == true && userNum == true){
  tempPassword = "";
  var specialUpperNum = specialUpper.concat(numCharacters);
  looper(specialUpperNum);
}

// if user picks special lower upper
if(userSpecial == true && userLower == true && userUpper == true){
  tempPassword = "";
  var specialLowerUpper = specialLower.concat(upperCharacters);
  looper(specialLowerUpper);
}

// if user picks everything
if(userSpecial == true && userLower == true && userNum == true && userUpper){
  tempPassword = "";
  var specialLowerUpperNum = specialLower.concat(upperNum);
  looper(specialLowerUpperNum);
}


  return tempPassword;
}




toUpper = function(x){
  return x.toUpperCase();
}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
