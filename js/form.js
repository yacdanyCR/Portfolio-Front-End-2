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
        if (this.validateName(name) && this.validatePhone(phone) ) {
            return true
        } else {
            return false
        }
    }
}

const form1 = new Contactform();
let $name = document.getElementById("name");
let $phone = document.getElementById("phone");
let $form = document.getElementById("form");
$form.addEventListener('submit', (e) => {
    e.preventDefault()
    form1.validateData($name.value, $phone.value) === true ? e.currentTarget.submit() : alert("Datos Incorrectod");
})