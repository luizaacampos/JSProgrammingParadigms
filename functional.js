const REQUIRED = 'REQUIRED';
const MIN_LENGTH = 'MIN_LENGTH';

function validate(value, flag, validatorValue) {
    if (flag === REQUIRED) {
        return value.trim().length > 0;
    }
    if (flag === MIN_LENGTH) {
        return value.trim().length > validatorValue;
    }
}

function getuserInput(inputElementId) {
    return document.getElementById(inputElementId).value;
}

function createUser(username, userPassword) {
    if (!validate(username, REQUIRED) || !validate(userPassword, MIN_LENGTH, 5)) {
        throw new Error(
            'Invalid input - username or password is wrong (password should be at least six characters).'
        );
    }
    return {
        username: username,
        password: userPassword
    };
}

function greetUser(user) {
    console.log('Hi, I am ' + user.username)
}
 
function signupHandler(event) {
    event.preventDefault();

    const enteredUsername = getuserInput('username');
    const enteredPassword = getuserInput('password');

    try {
    const newUser = createUser(enteredUsername, enteredPassword);
    console.log(newUser)
    greetUser(newUser)
    } catch (err) {
        alert(err.message);
    }
}

function connectForm(formId, formSubmitHandler) {
    const form = document.getElementById(formId);
    form.addEventListener('submit', formSubmitHandler);
}

connectForm('user-input', signupHandler);