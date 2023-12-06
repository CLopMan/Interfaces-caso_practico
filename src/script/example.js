generate_form(
    "#form-example", // ID del formulario a añadir, como selector de CSS
    "Registro de Usuario", // Título del formulario. Puede tener HTML
    // Lista de campos a añadir
    [
        // name: nombre/id del campo
        // valid: clase de validación a usar (generalmente del módulo de atributos de JS)
        // placeholder: texto por defecto del campo cuando está vacío
        // hide_name: ocultar nombre del campo o no (por defecto `false`)
        // type: tipo del elemento `input`. Se permite también `textarea` para texto multilínea
        {name: "Nombre",     valid: Name,     placeholder: "Nombre"},
        {name: "Apellidos",  valid: Name,     placeholder: "Apellido1 Apellido2", hide_name: true},
        {name: "Email",      valid: Email,    placeholder: "ejemplo@dominio.extensión", type: "email"},
        {name: "Teléfono",   valid: Phone,    placeholder: "+34766666666"},
        {name: "Contraseña", valid: Password, placeholder: "Introduzca un mínimo de 8 caracteres", type: "password"},
        {name: "Comentario", valid: Text,     placeholder: "Introduzca texto", type: "textarea"},
    ],
    // Información del botón de confirmación
    {
        // name: texto del botón
        // serialize: clase de serialización
        // callback: función a ejecutar después de verificar/serializar los datos
        name: "Datos de envío", serialize: User, callback: () => {}
    }
)
