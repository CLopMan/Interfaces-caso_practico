/**
 * Validates and stores the data of the register form
 * @param {object} form Form object
 * @param {{name: string, valid: Class}[]} validation Array with the field name and validation class
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
 * @param {string} form Form ID of the form in which to include the fields
 * @param {string} title Form title
 * @param {{name: string, hide_name: boolean=, valid: Class, placeholder: string, type: string=}[]} fields Array with the field name and validation class
 * @param {{name: string, serialize: Class, fun: function}} [next] Content, serialization class, and callback of the next button
 * @public
 */
function generate_form(elem, title, fields, next) {
    let form = $(elem);
    form.addClass("ItemContainer");
    form.append(`<header>${title}</header>`);
    for (const field of fields) {
        form.append(`
        <div id="${field.name}-item" class="ItemLabelContainer">
            ${field.hide_name? "" : `<label id="${field.name}-label" class="ItemLabel" for="${field.name}-input">${field.name} <span>*</span></label>`}
            <div id="${field.name}-input-container" class="Item">
                <input type="${field.type? field.type : "text"}" id="${field.name}-input" class="ItemText" name="${field.name}-input" placeholder="${field.placeholder}">
            </div>
        </div>
        `);
    }
    if (!next) { return; }
    form.append(`<button type="button"><div class="ButtonText">${next.name}</div><div class="ButtonArrow">🡢</div></button>`);
    form.find("button").click(() => {
        validate_form(
            document.forms[form.attr("id")],
            fields.map(x => {return {valid: x.valid, name: `${x.name}-input`}}),
            next.serialize
        )
        next.fun();
    })
}
