generate_form(
    "#form-register",
    "Registro de Usuario",
    [
        {name: "Nombre",     valid: Name,     placeholder: "Nombre"},
        {name: "Apellidos",  valid: Name,     placeholder: "Apellido1 Apellido2"},
        {name: "Email",      valid: Email,    placeholder: "ejemplo@dominio.extensión", type: "email"},
        {name: "Teléfono",   valid: Phone,    placeholder: "+34766666666"},
        {name: "Contraseña", valid: Password, placeholder: "Introduzca un mínimo de 8 caracteres", type: "password"},
    ],
    {name: "Datos de envío", serialize: User, callback: () => {}}
)
