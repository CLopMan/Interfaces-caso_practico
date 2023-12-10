class Test {
    constructor(test) {
        this.val = test
    }
    serialize() {""}
}

function next_step(prev_step, next_step) {
    let prev = $(`#${prev_step} > .ProgressIcon`);
    let next = $(`#${next_step} > .ProgressIcon`);
    prev.removeClass("Current")
    next.addClass("Current")
    prev.addClass("Completed")
    prev.text("✓")
}

generate_form(
    "#form-asistentes",
    "Asistentes",
    [
        {name: "Asistentes", valid: PositiveInteger, placeholder: "1", hide_name: true, type: "number"},
    ],
    { name: "Continuar", serialize: Test, callback: function() {
        $("#form-asistentes").fadeOut("slow", () => { $("#form-fecha").fadeIn(); });
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
    { name: "Continuar", serialize: Test, callback: function() {
        $("#form-fecha").fadeOut("slow", () => { $("#form-informacion-personal").fadeIn(); });
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
        $("#form-informacion-personal").fadeOut("slow", () => { $("#form-pago").fadeIn(); });
        next_step("informacion-personal", "pago");
    } }
)

// Hide all steps except the first
$("form:not(:first-child)").hide();
