/**
 * Validates and stores the data of the register form
 * @param {object} form Form object
 * @param {{name: string, valid: Class}[]} validation Array with the field name and validation class
 * @param {Class} serializarion Serialization class for the result
 * @param {boolean} alert_ok Whether to display an alert message if successful
 * @public
 */
function validate_form(form, validation, serialization, alert_ok) {
    try {
        // Stores the user
        document.cookie = new serialization(...validation.map(field => new field.valid(form[field.name].value))).serialize();
        // Shows a message and clears the form
        if (alert_ok) { alert("Ok"); }
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
 * @param {string} form Form ID of the form in which to include the fields, as a CSS selector
 * @param {string} title Form title. Can include HTML
 * @param {{name: string, valid: Class, placeholder: string, hide_name: boolean=, type: string=}[]} fields Array with the field information (name/ID, validation class, placeholder text, whether to hide the label, and the `input` tag type (can additionally be `textarea` for multiline comments))
 * @param {{name: string, serialize: Class, callback: function, alert_ok: boolean=}} [next] Content, serialization class, callback of the next button, and whether to show an alert message if successful
 * @public
 */
function generate_form(elem, title, fields, next) {
    let form = $(elem);
    form.addClass("ItemContainer");
    form.append(`<header>${title}</header>`);
    form.append(`<div class="ItemContainerContent"></div>`);
    let content = form.children("div");
    for (const field of fields) {
        content.append(`
        <div id="${field.name}-item" class="ItemLabelContainer">
            ${field.hide_name? "" : `<label id="${field.name}-label" class="ItemLabel" for="${field.name}-input">${field.name} <span>*</span></label>`}
            <div id="${field.name}-input-container" class="Item ${field.type === "textarea"? "" : "FixedSize"}">
                <${field.type === "textarea"? "textarea" : "input"} type="${field.type? field.type : "text"}" id="${field.name}-input" class="ItemText" name="${field.name}-input" placeholder="${field.placeholder}">${field.type === "textarea"? "</textarea>" : ""}
            </div>
        </div>
        `);
    }
    if (!next) { return; }
    form.append(`<button type="button" class="SplitContainer"><div>${next.name}</div><div>🡢</div></button>`);
    form.children("button").click(() => {
        validate_form(
            document.forms[form.attr("id")],
            fields.map(x => {return {valid: x.valid, name: `${x.name}-input`}}),
            next.serialize,
            next.alert_ok
        )
        next.callback();
    })
}
