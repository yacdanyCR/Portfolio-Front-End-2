class Contactform {
    #name
    #phone

    validateName(value) {
        return value.lenght < 5 ? true : false
    }

    validatePhone(value) {
        let phoneno = /^\d{8}$/;
        return value.match(phoneno) ? true : false;
    }

    validateData(name, phone, email) {
        if (this.validateName(name) && this.validatePhone(phone) && this.validateEmail(email)) {
            return true
        } else {
            return false
        }
    }

    set setName(name) {
        this.#name = name
    }

    set setPhone(phone) {
        this.#phone = phone
    }

    set setEmail(email) {
        this.#email = email
    }
}

const form1 = new Contactform();
let $name = document.getElementById("name");
let $phone = document.getElementById("phone");
let $email = document.getElementById("email");
let $form = document.getElementById("form");
$form.addEventListener('submit', (e) => {
    e.preventDefault()
    form1.validateData($name.value, $phone.value, $email.value) === true ? e.currentTarget.submit() : alert("Datos Incorrectod");
})