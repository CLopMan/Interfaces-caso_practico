// Order class module

/**
 * @class
 * @classdesc Class representing an order in the system
 */
class Order {
    /**
     * @param {Email} email
     * @param {CreditCardNumber} card_number
     * @param {CreditCardExpiryDate} card_expiry_date
     * @param {CreditCardCVC} card_cvc
     * @param {object} requests
     * @public
     */
    constructor(email, card_number, card_expiry_date, card_cvc, requests) {
        /**
         * @type {Name}
         * @public
         */
        this.name = nombre_completo;
        /**
         * @type {CreditCardNumber}
         * @public
         */
        this.card_number = card_number;
        /**
         * @type {CreditCardExpiryDate}
         * @public
         */
        this.card_expiry_date = card_expiry_date;
        /**
         * @type {CreditCardCVC}
         * @public
         */
        this.card_cvc = card_cvc;
        /**
         * @type {object}
         * @public
         */
        this.requests = requests;
    }

    /**
     * Serializes the object to a string that can be stored as a cookie
     * @returns {string}
     * @public
     */
    serialize() {
        return "request=\"" + [
            this.name.value,
            this.card_number.value,
            this.card_expiry_date.value,
            this.card_cvc.value,
            Object.entries(this.requests)
                  .map(([k, v]) => k + "-" + v.toString() )
                  .join(",")
        ].join(":") + "\"; SameSite=Strict"
    }
}
