class validator {
    static REQUIRED = 'REQUIRED'
    static MIN_LENGTH = 'MIN_LENGTH'

    static validate(value, flag, validatorValue) {
        if (flag === this.REQUIRED) {
            return value.trim().length > 0;
        }
        if (flag === this.MIN_LENGTH) {
            return value.trim().length > validatorValue;
        }
    }
}

class User {
    constructor(uName, uPassword) {
        this.username = uName;
        this.password = uPassword
    }

    greet() {
        console.log('Hi I am ' + this.username)
    }
}

class UserInputForm {
    constructor() {
        this.form = document.getElementById('user-input');
        this.userNameInput = document.getElementById('username');
        this.password = document.getElementById('password');

        this.form.addEventListener('submit', this.signupHandler.bind(this));
    }

    signupHandler(event) {
        event.preventDefault();
        const enteredUsername = this.userNameInput.value;
        const enteredPassword = this.password.value;

        if (
            !validator.validate(enteredUsername, validator.REQUIRED) || 
            !validator.validate(enteredPassword, validator.MIN_LENGTH, 5)) 
            {
                alert(
                    'Invalid input - username or password is wrong (password should be at least six characters).'
                );
                return;
            }

            const newUser = new User(enteredUsername, enteredPassword);
            console.log(newUser);
            newUser.greet();
    }
}

new UserInputForm();
