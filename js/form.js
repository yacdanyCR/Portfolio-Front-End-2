class Contactform {
    #name
    #phone

    validateName(value) {
        return value.length < 5 ? true : false;
    }

    validatePhone(value) {
        let phoneno = /^\d{8}$/;
        if (value.length < 8) {
            return true
        }
        else if (!value.match(phoneno)) {
            return true
        }

        return false
    }

    validateData(name, phone, email) {
        if (this.validateName(name) && this.validatePhone(phone)) {
            return true
        } else {
            return false
        }
    }
}

const form1 = new Contactform();
const $inputs = document.querySelectorAll("input");
const validators = {
    name: (input) => form1.validateName(input),
    phone: (input) => form1.validatePhone(input)
}

const inputType = (input) => {
    const dataType = input.dataset.type;
    if (validators[dataType]) {
        const bool = validators[dataType](input.value);
        inputValidity(bool, input);
    }
}

const inputValidity = (bool, input) => {
    if (bool) {
        input.classList.add("form__input");
        input.setCustomValidity("error")
    } else {
        input.classList.remove("form__input");
    }
}
$inputs.forEach(element => {
    element.addEventListener("blur", (e) => {
        inputType(e.target);
    })
});
