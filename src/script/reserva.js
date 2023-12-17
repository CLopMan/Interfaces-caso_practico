class Test {
    constructor(test) {
        this.val = test
    }
}

class Asistentes {
    constructor(asistentes) {
        this.asistentes = asistentes;
    }
}

class ReserveDate {
    constructor(pack, day, hour) {
        this.pack = pack;
        this.day = day;
        this.hour = hour;
    }
}

class User {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}

class Payment {
    constructor(number, expiry_date, cvc) {
        this.number = number;
        this.expiry_date = expiry_date;
        this.cvc = cvc;
    }
}

class Reserve {
    constructor(asistentes, date, user, payment) {
        this.asistentes = asistentes;
        this.date = date;
        this.user = user;
        this.payment = payment;
    }

    serialize() {
        return this.user.email.value + "-" + this.date.day.value + "-" + this.date.hour.value + "=\"" + [
            this.asistentes.value,
            this.date.pack.value,
            this.user.name.value,
            this.user.phone.value,
            ...(typeof(this.payment) === "string"? [this.payment] : [this.payment.number.value, this.payment.expiry_date.value, this.payment.cvc.value])
        ].join(":") + "\"; SameSite=Strict"
    }
}

let asistentes;
let reserve_date;
let user;

function next_step(prev_step, next_step) {
    let prev = $(`#${prev_step} > .ProgressIcon`);
    let next = $(`#${next_step} > .ProgressIcon`);
    prev.removeClass("Current");
    next.addClass("Current");
    prev.addClass("Completed");
    prev.append("<img src='./image/icon-checkmark.svg' alt='Checkmark icon'></img>");
    $(`#form-${prev_step}`).slideUp("slow", () => { $(`#form-${next_step}`).slideDown(); });
}

generate_form(
    "#form-asistentes",
    "Asistentes",
    [
        {name: "Asistentes", valid: PositiveInteger, placeholder: "0", hide_name: true, type: "number"},
    ],
    { name: "Continuar", serialize: Asistentes, skip_serialize: true, callback: function(result) {
        asistentes = result.asistentes;
        next_step("asistentes", "fecha");
    } }
)

generate_form(
    "#form-fecha",
    "Fecha",
    [
        {name: "Pack", valid: Text, placeholder: "Pack*", hide_name: true, type: "select", options: ["30 Minutos", "1 Hora", "2 Horas", "Estudiante", "Amante de Gatos", "Grupo"]},
        {name: "Fecha", valid: Text, placeholder: "Fecha*", hide_name: true, type: "date"},
        {name: "Hora", valid: Text, placeholder: "Hora*", hide_name: true, type: "time"},
    ],
    { name: "Continuar", serialize: ReserveDate, skip_serialize: true, callback: function(result) {
        let elem = $("#precio-output");
        reserve_date = result;
        if (result.pack.value == "30 Minutos") { elem.text("3.00 €"); }
        else if (result.pack.value == "1 Hora") { elem.text("5.00 €"); }
        else if (result.pack.value == "2 Horas") { elem.text("10.00 €"); }
        else if (result.pack.value == "Estudiante") { elem.text("25.00 €"); }
        else if (result.pack.value == "Amante de Gatos") { elem.text("17.00 €"); }
        else if (result.pack.value == "Grupo") { elem.text((15 * asistentes.value).toString() + ".00 €"); }
        next_step("fecha", "informacion-personal");
    } }
)

generate_form(
    "#form-informacion-personal",
    "Información Personal",
    [
        {name: "Nombre", valid: Name, placeholder: "Nombre Apellido*", hide_name: true},
        {name: "Email", valid: Email, placeholder: "E-mail* (nombre@dominio.ext)", hide_name: true},
        {name: "Teléfono", valid: Phone, placeholder: "Teléfono* (+34788888888)", hide_name: true},
    ],
    { name: "Continuar", serialize: User, skip_serialize: true, callback: function(result) {
        user = result
        next_step("informacion-personal", "pago");
    } }
)

$("#form-pago").children("button").click(() => {
    const form = document.forms["form-pago"];
    let payment = form["payment-method"].value;
    if (payment === "credit-card") {
        payment = validate_form(
            form,
            [
                {valid: CreditCardNumber, name: "card-number-input"},
                {valid: CreditCardExpiryDate, name: "expiry-date-input"},
                {valid: CreditCardCVC, name: "cvc-input"},
            ],
            Payment,
            true
        )
        if (payment === null) { return; }
    }
    $("#form-pago").slideUp("slow", () => { $("#confirmation").slideDown(); });
    $("#pago > .ProgressIcon").removeClass("Current").addClass("Completed").append("<img src='./image/icon-checkmark.svg' alt='Checkmark icon'></img>");
    document.cookie = new Reserve(asistentes, reserve_date, user, payment).serialize();
})

// Hide all steps except the first
$("form:not(:first-child)").hide();
$("#confirmation").hide();
// Activate the default payment method
$("#en-sitio").trigger("click");
