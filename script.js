
//Program to generate password
var password = document.getElementById("password");

    function genPassword() {
        var allUserchars =[]
        var numberChars = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
var uppercaseChars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowercaseChars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var specialChars = [ '!', '@', '#', '$', '%', '^', '&', '*' ];
        var howManychars =prompt("How long do you want your password to be?")


        var wantsNumber = confirm("Do you want numbers?")
        var wantsCapital = confirm("Do you want uppercase letters?")
        var wantsSpecial = confirm("Do you want special characters?")
        var wantsLowercase = confirm("Do you want lowercase letters?")

        if (wantsCapital){allUserchars = allUserchars.concat(uppercaseChars)}
        if (wantsLowercase){allUserchars = allUserchars.concat(lowercaseChars)}
        if (wantsNumber){allUserchars = allUserchars.concat(numberChars)}
        if (wantsSpecial){allUserchars = allUserchars.concat(specialChars)}
        console.log(allUserchars)    
        var passwordLength = 12;
        var password ="";

        for (var i =0; i <= passwordLength; i++) {
            var randomNumber =Math.floor(Math.random() *chars.length);
            password += chars.substring(randomNumber, random +1)
        }
        return "Generated Password"
    }
    

    document.getElementById("password").value= password;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = genPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);