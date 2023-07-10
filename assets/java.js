var passwordLength = 8;
var characterSet = [];

var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', ',', '<', '.', '>'];
var lowercaseLetters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
var uppercaseLetters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
    var isInputValid = getPrompts(); // Returns true or false
    var passwordText = document.querySelector("#password");

    if (isInputValid) {
        var newPassword = generatePassword();
        passwordText.value = newPassword;
    } else {
        passwordText.value = "";
    }
}

function generatePassword() {
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }
    return password;
}

function getPrompts() {
    characterSet = [];
    passwordLength = parseInt(prompt("How many characters do you want your password to be? (8 - 128 characters)"));

    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        alert("Password length must be a number between 8 and 128. Please try again.");
        return false;
    }

    if (confirm("Would you like to include lowercase letters in your password?")) {
        characterSet = characterSet.concat(lowercaseLetters);
    }
    if (confirm("Would you like to include uppercase letters in your password?")) {
        characterSet = characterSet.concat(uppercaseLetters);
    }
    if (confirm("Would you like to include special characters in your password?")) {
        characterSet = characterSet.concat(specialCharacters);
    }
    if (confirm("Would you like to include numbers in your password?")) {
        characterSet = characterSet.concat(numbers);
    }
    return true;
}

const copyButton = document.getElementById("copy");
const passwordTextarea = document.getElementById("Password");

copyButton.addEventListener("click", () => {
    passwordTextarea.select();
    document.execCommand("copy");
});
