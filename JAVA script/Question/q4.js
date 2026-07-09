// The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.
function validatePassword(password) {
  if (password.length < 8) {
    return false;
  }

  let hasUpperCase = false;
  let hasLowerCase = false;
  for (let i = 0; i < password.length; i++) {
    if (password[i] >= 'A' && password[i] <= 'Z') {
      hasUpperCase = true;
    }
    if (password[i] >= 'a' && password[i] <= 'z') {
      hasLowerCase = true;
    }
  }
  if (!hasUpperCase || !hasLowerCase) {
    return false;
  }

  let hasDigit = false;
  for (let i = 0; i < password.length; i++) {
    if (password[i] >= '0' && password[i] <= '9') {
      hasDigit = true;
    }
  }
  if (!hasDigit) {
    return false;
  }

  return true;
}

let password1 = "Password123";
let password2 = "password";
let password3 = "PASSWORD";
let password4 = "Pass123";
console.log(validatePassword(password1));
console.log(validatePassword(password2)); 
console.log(validatePassword(password3));
console.log(validatePassword(password4)); 