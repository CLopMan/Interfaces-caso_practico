// Attribute validation module

/**
 * @class
 * @classdesc Generic class for attribute validation
 */
class Attribute {
    /**
     * @param {str} value Value to validate and wrap
     * @public
     */
    constructor(value) {
        /**
        * Value wrapped
        * @type {str}
        * @public
        */
        this.value = this.validate(value);
    }
    /**
     * @param {string} value Input value
     * @returns {string} Input value if validation succeeded, raises an exception otherwise
     * @public
     */
    validate(value) {
        return value;
    }
}

/**
 * @class
 * @classdesc DNI Attribute class
 */
class DNI extends Attribute {
    validate(value) {
        // Check input format: 8 numbers followed by an uppercase letter
        if (!(/^\d{8}[A-Z]$/.test(value))) { throw "formato incorrecto del DNI"; }
        // Calculate checksum letter: add all numbers and get the correct letter based on the modulo 23 value
        let sum = 0;
        for (const char of value.slice(0, -1)) {
            sum += parseInt(char);
        }
        // Table of modulo 23 value to its corresponding checksum letter
        let correct_char = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
        // Check that the checksum letter matches
        if (value[8] != correct_char[sum % 23]) { throw "valor de DNI incorrecto"; }
        return value;
    }
}

/**
 * @class
 * @classdesc Arbitrary text Attribute class
 */
class Text extends Attribute {
    validate(value) {
        if (value != "") { throw "formato de nombre incorrecto"; }
        return value;
    }
}

/**
 * @class
 * @classdesc Name Attribute class
 */
class Name extends Attribute {
    validate(value) {
        if (!(/^[A-Za-záéíóúüñ]+( [A-Za-záéíóúüñ]+)*$/.test(value))) { throw "formato de nombre incorrecto"; }
        return value;
    }
}

/**
 * @class
 * @classdesc Email Attribute class
 */
class Email extends Attribute {
    validate(value) {
        if (!(/^[a-z0-9]+@[a-z0-9]+\.[a-z]+$/.test(value))) { throw "formato del email incorrecto"; }
        return value;
    }
}

/**
 * @class
 * @classdesc Phone number Attribute class
 */
class Phone extends Attribute {
    validate(value) {
        if (!(/^\+34[7-9]\d{8}$/.test(value))) { throw "formato de número de teléfono incorrecto"; }
        return value;
    }
}

/**
 * @class
 * @classdesc Password Attribute class
 */
class Password extends Attribute {
    validate(value) {
        if (value.length < 8) { throw "la contraseña debe tener al menos 8 caracteres"; }
        return value;
    }
}

/**
 * @class
 * @classdesc Address Attribute class
 */
class Address extends Attribute {
    validate(value) {
        if (!(/^C\/[A-Za-záéíóúüñ]+( [A-Za-záéíóúüñ]+)* Nº\d+, [A-Za-záéíóúüñ]+( [A-Za-záéíóúüñ]+)*, [A-Za-záéíóúüñ]+( [A-Za-záéíóúüñ]+)*$/.test(value))) { throw "la contraseña debe tener al menos 8 caracteres"; }
        return value;
    }
}

/**
 * @class
 * @classdesc Credit-Card number Attribute class
 */
class CreditCardNumber extends Attribute {
    validate(value) {
        if (!(/^[0-9]{15,16}|(([0-9]{4}\s){3}[0-9]{3,4})$/.test(value))) { throw "formato del número de tarjeta incorrecto"; }
        return value;
    }
}

/**
 * @class
 * @classdesc Credit-Card expiry date Attribute class
 */
class CreditCardExpiryDate extends Attribute {
    validate(value) {
        if (!(/^\d\d\/\d\d$/.test(value))) { throw "formato de la fecha de expiración incorrecto"; }
        return value;
    }
}

/**
 * @class
 * @classdesc Credit-Card CVC Attribute class
 */
class CreditCardCVC extends Attribute {
    validate(value) {
        if (!(/^\d{3}$/.test(value))) { throw "formato del CVC de la tarjeta incorrecto"; }
        return value;
    }
}
