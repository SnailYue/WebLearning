const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const showError = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

const showSuccess = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

const getFieldName = (input) => {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

const checkRequired = (inputs) => {
    inputs.forEach((input) => {
        if (input.value.trim() === "") {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

const checkLength = (input, min, max) => {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be at less than ${min} characters`);
    } else {
        showSuccess(input);
    }
}

const checkEmail = (input) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(input.value.trim()).toUpperCase())) {
        showSuccess(input);
    } else {
        showError(input, `${getFieldName(input)} is not valid`);
    }
}

const checkPasswordMatch = (input1, input2) => {
    if (input1.value !== input2.value) {
        showError(input2, "Passwords do not match")
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordMatch(password, password2);
});