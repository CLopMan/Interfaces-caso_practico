/**
 * Validates and stores the data of a form
 *
 * @param {Object} form Form object
 * @param {{name: string, valid: Class}[]} validation Array with the field name and validation class
 * @param {Class} serializarion Serialization class for the result
 * @param {boolean} [skip_serialize=false] Whether to store the validated object on a cookie or just return it
 * @param {boolean} [alert_ok=false] Whether to display an alert message if successful
 * @returns {Object|null} The validated object if the validation succeeded. The class will be the one passed as `serialization`
 * @public
 */
function validate_form(form, validation, serialization, skip_serialize, alert_ok) {
    try {
        // Validates the data and stores it on a cookie
        let result = new serialization(...validation.map(field => new field.valid(form[field.name].value)))
        if (!skip_serialize) { document.cookie = result.serialize(); }
        // Shows a message and clears the form
        if (alert_ok) { alert("Ok"); }
        return result
    } catch (err) { // If there was any validation error, display an error message
        alert("Error de validación: " + err);
        return null
    }
}

/**
 * Clears a form
 *
 * @param {Object} form Form object
 * @public
 */
function clear_form(form) {
    for (const field of form) {
        field.value = "";
    }
}


/**
 * Form field parameters
 *
 * @typedef {Object} FieldParameters
 * @property {string} name Name/ID of the field
 * @property {Class} valid Validation class of the field
 * @property {string} placeholder Placeholder of the field
 * @property {boolean} [hide_name=false] Whether to hide the label of the field
 * @property {string} [type=text] Type of the field. Can be any valid HTML `input` tag type value, or `textarea`
 * @property {string[]} [options] If the type of the object is `select`, contains the available options
 */

/**
 * Generates the HTML code for a form field with the given parameters
 *
 * @param {FieldParameters} field Parameters of the field
 * @returns {string} The generated HTML code
 * @public
 */
function generate_form_element(field) {
    let attrs = `id="${field.name}-input" class="ItemText ${field.type === "date"? "datepicker" : ""} ${field.type === "time"? "timepicker" : ""}" name="${field.name}-input" placeholder="${field.placeholder}"`
    if (field.type === "textarea") {
        return `<textarea ${attrs}></textarea>`
    }
    if (field.type === "number") {
        return `
        ${field.hide_name? `<label id="${field.name}-label" class="ItemLabel" for="${field.name}-input">${field.name}</label>` : ""}
        <button type="button" class="NumberButton ItemText" onclick="$(this).next()[0].stepDown()">-</button>
        <input type="number" ${attrs} min="1" max="50" size="3" onkeydown="return ['Backspace','Delete','ArrowLeft','ArrowRight'].includes(event.code) || (!isNaN(Number(event.key)) && event.code!=='Space')">
        <button type="button" class="NumberButton ItemText" onclick="$(this).prev()[0].stepUp()">+</button>
        `
    }
    if (field.type === "select") {
        return `
        <select ${attrs}>
            ${`<option hidden disabled selected value>${field.placeholder}</option>` + field.options.map((x) => `<option value="${x}">${x}</option>`).join("\n")}
        </select>
        `
    }
    return `<input type="${field.type? field.type : "text"}" ${attrs}">`
}

/**
 * Function called after correctly validating a form
 *
 * @callback formValidationCallback
 * @param {Object} Validated form object
 */

/**
 * Generates a form with the given fields
 *
 * @param {string} form Form ID of the form in which to include the fields, as a CSS selector
 * @param {string} title Form title. Can include HTML
 * @param {FieldParameters[]} fields Array with the field parameters
 * @param {Object} [next] Next button parameters. If not specified, no next button will be added
 * @param {string} next.name Name/Text of the button
 * @param {Class} next.serialize Serialization class for the form
 * @param {formValidationCallback} next.callback Callback function to trigger after a correct validation
 * @param {boolean} [skip_serialize=false] Whether to store the validated object on a cookie or not
 * @param {boolean} [next.alert_ok=false] Whether to display an alert message after a correct validation
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
            <div id="${field.name}-input-container" class="Item ${field.type === "textarea"? "ResizableHeight" : ""} ${field.type === "select"? "dropdown" : ""}">
                ${generate_form_element(field)}
            </div>
        </div>
        `);
    }
    if ((datepickers = form.find(".datepicker")).length) { datepickers.pickadate({ hiddenName: true, min: true }); }
    if ((timepickers = form.find(".timepicker")).length) { 
        timepickers.pickatime({
            format: "HH:i",
            interval: 15,
            hiddenName: true,
            disable: [
                { from: [0,0], to: [7,45] },
                { from: [22,0], to: [23,45] },
            ]
        });
    }
    if (!next) { return; }
    form.append(`<button type="button" class="BrownButton SplitContainer"><div>${next.name}</div><div>🡢</div></button>`);
    form.children("button").click(() => {
        let result = validate_form(
            document.forms[form.attr("id")],
            fields.map(x => {return {valid: x.valid, name: `${x.name}-input`}}),
            next.serialize,
            next.skip_serialize,
            next.alert_ok
        )
        if (result !== null) {
            next.callback(result);
            clear_form(form);
        }
    })
}
