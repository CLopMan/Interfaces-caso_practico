generate_form(
    "#form-register",
    [
        {name: 'Nombre',     valid: Name},
        {name: 'Apellidos',  valid: Name},
        {name: 'Email',      valid: Email},
        {name: 'Teléfono',   valid: Phone},
        {name: 'Contraseña', valid: Password},
    ],
    User,
    {fun: () => {}, name: 'Datos de envío'}
)
