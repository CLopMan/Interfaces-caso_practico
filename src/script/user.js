// User class module

/**
 * @class
 * @classdesc Class representing a user in the system
 */
class User {
    /**
     * @param {Name} nombre
     * @param {Name} apellidos
     * @param {Email} email
     * @param {Phone} telefono
     * @param {Password} password
     * @public
     */
    constructor(nombre, apellidos, email, telefono, password) {
        /**
        * @type {Name}
        * @public
        */
        this.nombre = nombre;
        /**
        * @type {Name}
        * @public
        */
        this.apellidos = apellidos;
        /**
        * @type {Email}
        * @public
        */
        this.email = email;
        /**
        * @type {Phone}
        * @public
        */
        this.telefono = telefono;
        /**
        * @type {Password}
        * @public
        */
        this.password = password;
    }

    /**
     * Serializes the object to a string that can be stored as a cookie
     * @returns {string} 
     * @public
     */
    serialize() {
        return this.email.value + "=\"" + [
            this.nombre.value,
            this.apellidos.value,
            this.telefono.value,
            this.password.value,
        ].join(":") + "\"; SameSite=Strict"
    }
}
