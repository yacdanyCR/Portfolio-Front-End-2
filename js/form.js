class Contactform {
    #name
    #phone

    validateName(value) {
        /*   return value.lenght < 5 ? true : false */
      /*   if (value.length < 5) {
            alert("el nombre tiene menos de 5 caracteres")
        } */
    }

    validatePhone(value) {
        let phoneno = /^\d{8}$/;
        return value.match(phoneno) ? true : false;
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
        validators[dataType](input.value);
    }

    console.log(input.parentElement)
}
$inputs.forEach(element => {
    element.addEventListener("blur", (e) => {
        inputType(e.target);
        console.log(validators)
    })
});
