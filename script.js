
const form = document.getElementById('form');
const username = document.getElementById('user');
const pass = document.getElementById('password');
const email = document.getElementById('email');
const pass2 = document.getElementById('psw');
const nameError = document.getElementById('name_error');
const passError = document.getElementById('pass1_error');
const emailError = document.getElementById('email_error');
const pass2Error = document.getElementById('pass2_error');

form.addEventListener('submit', (e) => {

     nameError.textContent = '';
     passError.textContent = '';
     emailError.textContent = '';
     pass2Error.textContent = '';

  if (!/^[a-zA-Z]+ [a-zA-Z]+$/.test(username.value)) {
    e.preventDefault();
    nameError.textContent = "Write first and second name";
  }
    if (!(pass.value.length >= 8 && pass.value.length <= 20)) {
    e.preventDefault();
    passError.textContent = "Password must be between 8 and 20 characters.";
    }else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(pass.value)) {
    e.preventDefault();
    passError.textContent = "Password must contain lowercase letter, uppercase letter, and number.";
  }
  if (pass.value !== pass2.value) {
    e.preventDefault();
    pass2Error.textContent = "Passwords do not match.";
  }
  if (!/\S+@\S+\.\S+/.test(email.value)) {
    e.preventDefault();
    emailError.textContent = "Invalid email address.";
  }
});