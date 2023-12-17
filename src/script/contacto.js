class ContactMessaje {
    constructor(email, subject, messaje) {
        this.email = email;
        this.subject = subject;
        this.messaje = messaje;
    }

    serialize() {
        return this.email.value + "-" + this.subject.value + "=\"" + [
            this.messaje.value.replaceAll("\n", "\\n"),
        ].join(":") + "\"; SameSite=Strict"
    }
}

generate_form(
    "#form-contacto",
    "Contacto",
    [
        {name: "Email de contacto", valid: Email, placeholder: "ejemplo@dominio.extensión" },
        {name: "Tema", valid: Text, placeholder: "Mensaje" },
        {name: "Mensaje", valid: Text, placeholder: "Mensaje", type: "textarea"},
    ],
    { name: "Enviar mensaje", serialize: ContactMessaje, callback: () => {}, alert_ok: true }
)

$("#faq button").click(function() {
    $(this).parent().parent().children("p").slideToggle();
})

$("p.Item").hide();
