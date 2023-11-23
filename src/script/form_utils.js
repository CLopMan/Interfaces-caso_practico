/**
 * Validates and stores the data of the register form
 * @param {object} form Form object
 * @param {{class: Class, name: String}[]} validation Array with the field name and validation class
 * @param {Class} serializarion Serialization class for the result
 * @public
 */
function validate_form(form, validation, serialization) {
    try {
        // Stores the user
        document.cookie = new serialization(...validation.map(field => new field.class(form[field.name].value))).serialize();
        // Shows a message and clears the form
        alert("Ok");
        clear_form(form);
    } catch (err) { // If there was any validation error, display an error message
        alert("Error de validación: " + err);
    }
}

/**
 * Clears a form
 * @param {object} form Form object
 * @public
 */
function clear_form(form) {
    for (const field of form) {
        field.value = "";
    }
}
