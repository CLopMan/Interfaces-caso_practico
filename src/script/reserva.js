class Test {
    constructor(test) {
        this.val = test
    }
    serialize() { return ""; }
}

class Asistentes {
    constructor(asistentes) {
        this.asistentes = asistentes;
    }
    serialize() { return ""; }
}

class ReserveDate {
    constructor(pack, day, hour) {
        this.pack = pack;
        this.day = day;
        this.hour = hour;
    }
    serialize() { return ""; }
}

let asistentes = 0;

function next_step(prev_step, next_step) {
    let prev = $(`#${prev_step} > .ProgressIcon`);
    let next = $(`#${next_step} > .ProgressIcon`);
    prev.removeClass("Current");
    next.addClass("Current");
    prev.addClass("Completed");
    prev.text("✓");
    $(`#form-${prev_step}`).slideUp("slow", () => { $(`#form-${next_step}`).slideDown(); });
}

generate_form(
    "#form-asistentes",
    "Asistentes",
    [
        {name: "Asistentes", valid: PositiveInteger, placeholder: "1", hide_name: true, type: "number"},
    ],
    { name: "Continuar", serialize: Asistentes, callback: function(result) {
        asistentes = result.asistentes.value
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
    { name: "Continuar", serialize: ReserveDate, callback: function(result) {
        let elem = $("#precio-output");
        if (result.pack.value == "30 Minutos") { elem.text("3.00 €"); }
        else if (result.pack.value == "1 Hora") { elem.text("5.00 €"); }
        else if (result.pack.value == "2 Horas") { elem.text("10.00 €"); }
        else if (result.pack.value == "Estudiante") { elem.text("25.00 €"); }
        else if (result.pack.value == "Amante de Gatos") { elem.text("17.00 €"); }
        else if (result.pack.value == "Grupo") { elem.text((15 * asistentes).toString() + ".00 €"); }
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
    { name: "Continuar", serialize: Test, callback: function() {
        next_step("informacion-personal", "pago");
    } }
)

$("#form-pago").children("button").click(() => {
    const form = document.forms["form-pago"];
    if (form["payment-method"].value === "credit-card") {
        if (null === validate_form(
            form,
            [
                {valid: CreditCardNumber, name: "card-number-input"},
                {valid: CreditCardExpiryDate, name: "expiry-date-input"},
                {valid: CreditCardCVC, name: "cvc-input"},
            ],
            Test,
        )) { return; }
    }
    $("#form-pago").slideUp("slow", () => { $("#confirmation").slideDown(); });
    $("#pago > .ProgressIcon").removeClass("Current").addClass("Completed").text("✓");
})

// Hide all steps except the first
$("form:not(:first-child)").hide();
$("#confirmation").hide();
// Activate the default payment method
$("#en-sitio").trigger("click");
