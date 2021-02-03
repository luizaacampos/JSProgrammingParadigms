const form = document.getElementById('user-input');

function signupHandler(event) {
    event.preventDefault();

    const userNameInput = document.getElementById('username');
    const enteredUsername = userNameInput.value;

    const password = document.getElementById('password');
    const enteredPassword = password.value;

    if (enteredUsername.trim().length === 0) {
        alert('Invalid input - username must not be empty!')
        return;
    }
    if (enteredPassword.trim().length <= 6) {
        alert('Invalid input - password must be six characters or longer.')
        return;
    }

    const user = {
        name: enteredUsername,
        password: enteredPassword
    };

    console.log(user);
    console.log('Hi I am ' + user.name);
}
 
form.addEventListener('submit', signupHandler);