class Test {
    constructor(test) {
        this.val = test
    }
    serialize() {""}
}

generate_form(
    "#form-asistentes",
    "Asistentes",
    [
        {name: "Asistentes", valid: Name, placeholder: "Asistentes", hide_name: true},
    ],
    { name: "Continuar", serialize: Test, callback: () => {} }
)

generate_form(
    "#form-fecha",
    "Fecha",
    [
        {name: "Pack", valid: Name, placeholder: "Pack *", hide_name: true},
        {name: "Fecha", valid: Name, placeholder: "Fecha *", hide_name: true},
        {name: "Hora", valid: Name, placeholder: "Hora *", hide_name: true},
    ],
    { name: "Continuar", serialize: Test, callback: () => {} }
)

generate_form(
    "#form-informacion-personal",
    "Fecha",
    [
        {name: "Nombre", valid: Name, placeholder: "Nombre Apellido *", hide_name: true},
        {name: "Email", valid: Email, placeholder: "Correo electrónico* (nombre@dominio.ext)", hide_name: true},
        {name: "Teléfono", valid: Phone, placeholder: "Teléfono *", hide_name: true},
    ],
    { name: "Continuar", serialize: Test, callback: () => {} }
)
