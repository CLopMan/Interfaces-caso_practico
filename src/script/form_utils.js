/**
 * Validates and stores the data of the register form
 * @param {object} form Form object
 * @param {{name: String, valid: Class}[]} validation Array with the field name and validation class
 * @param {Class} serializarion Serialization class for the result
 * @public
 */
function validate_form(form, validation, serialization) {
    try {
        // Stores the user
        document.cookie = new serialization(...validation.map(field => new field.valid(form[field.name].value))).serialize();
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

/**
 * Generates a form with the given fields
 * @param {String} form Form ID of the form in which to include the fields
 * @param {{name: String, valid: Class}[]} fields Array with the field name and validation class
 * @param {Class} serializarion Serialization class for the result
 * @param {{fun: function, name: String}} next Content and callback of the next button. Validation is done automatically
 * @public
 */
function generate_form(elem, fields, serialization, next) {
    let form = $(elem);
    for (const field of fields) {
        form.append( `
        <label id="${field.name}-label">${field.name}</label>
        <label id="${field.name}-input-container" class="input-field">
            <input type="text" id="${field.name}-input" name="${field.name}-input">
        </label>
        `);
    }
    form.append(`<button type="button">${next.name}</button>`);
    form.find("button").click(() => {
        validate_form(
            document.forms[form.attr("id")],
            fields.map(x => {return {valid: x.valid, name: `${x.name}-input`}}),
            serialization
        )
        next.fun();
    })
}
