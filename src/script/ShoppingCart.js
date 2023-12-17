class ShoppingCart {
    constructor() {
        this.prices = [1.90, 3.00, 3.50, 1.40, 2.00,
            1.30, 2.00, 1.90, 0.30,
            1.00, 2.00, 1.50,
            7.00, 4.00, 20.00, 10.00,
            0.70, 1.00, 0.60 ];

        this.shipment_countries = [
            "Albania", "Indonesia",
            "Alemania" ,"Irak",
            "Angola", "Irlanda",
            "Antigua y Barbuda", "Islas Feroe",
            "Argentina", "Islas Vírgenes",
            "Aruba", "Israel",
            "Australia", "Italia",
            "Bahamas", "Jamaica",
            "Bangladesh", "Japón",
            "Barbados", "Letonia",
            "Bélgica", "Líbano",
            "Belice", "Malasia",
            "Bolivia", "Martinica",
            "Brasil", "México",
            "Canadá", "Nicaragua",
            "Chile", "Nigeria",
            "China", "Noruega",
            "China-Taiwán",
            "Colombia", "Países Bajos",
            "Corea del Sur", "Pakistán",
            "Costa Rica", "Paraguay",
            "Cuba", "Perú",
            "Curazao", "Polonia",
            "Dinamarca", "Portugal",
            "Dominica", "Puerto Rico",
            "Ecuador", "Reino Unido",
            "El Salvador", "República Dominicana",
            "Emiratos Árabes Unidos", "Rusia",
            "España", "San Martín",
            "Estados Unidos de América", "Santa Lucía",
            "Francia", "Sri Lanka",
            "Gambia", "Suecia",
            "Ghana", "Suiza",
            "Granada", "Suriname",
            "Grecia", "Tailandia",
            "Guadalupe y Dependencias", "Trinidad y Tobago",
            "Guatemala", "Turquía",
            "Guyana", "Uruguay",
            "Haití", "Venezuela",
            "Honduras", "Vietnam",
            "Hong Kong", "Panamá",
            "India",
        ]

        this.shipment = {}
        for (const country of this.shipment_countries) {
            this.shipment[country] = Math.random() * (15-1)+1;
        }

        this.sums = []
        for (let i = 0; i < this.prices.length; i++) {
            this.sums[i] = 0
        }

        this.prods = [];
        for (let i = 0; i < this.prices.length; i++) {
            this.prods[i] = {
                name: "",
                cantidad: 0,
                price: 0
            };
        }

        this.shipment_cost = 0
        this.masterPrice = 0

    }

    setUpdateAutomatic(){
        let campo = document.getElementById("direction-input")
        campo.onkeyup = (ev) =>{
            this.updateShipmentCostAddress()
            this.updateMasterPrice()
        }
    }

    updateShipmentCostAddress(){
        let campo = document.getElementById("direction-input")
        for (const pais of this.shipment_countries) {
            if (campo.value.toLowerCase().includes(pais.toLowerCase(),0) ){
                this.shipment_cost = this.shipment[pais];
            } else if (campo.value === "") {
                this.shipment_cost = 0
            }
        }

    }

    updateMasterPrice() {

        let truncar = (num,dec) => {
            let s = num.toString()
            let decimalLength = s.indexOf(".")+1
            let numStr = s.substring(0,decimalLength + dec)
            return Number(numStr)
        }

        // Update Master Price with shipment costs
        this.masterPrice = this.shipment_cost + this.getProductsTotalCost()

        // Update the Master Price fields on HTML
        let ship_cost = document.getElementById("shipment-cost")
        let total_prods_am = document.getElementById("total-am")
        let master_price = document.getElementById("master-price")

        ship_cost.innerText = String(truncar(this.shipment_cost,2)) +" €"
        total_prods_am.innerText = String(truncar(this.getProductsTotalCost(),2)) + " €"
        master_price.innerText = String(truncar(this.masterPrice,2))+" €"
    }

    getProductsTotalCost(){
        let cost = 0

        for (let i = 0; i < this.prices.length; i++) {
            cost += this.prods[i].cantidad * this.prices[i]
        }
        return cost
    }

    getProductsTotalAmmount(){
        let total_ammount = 0
        for (const prod of this.prods) {
            total_ammount += prod.cantidad
        }
        return total_ammount
    }
    getProductAmmount(ind){
        return this.prods[ind-1].cantidad
    }
    showProds(){
        let listDiv = document.getElementById("list-prods");
        let listOrder = document.getElementById("list-prods-order")
        let collectionImages = ["./image/floatingcoffee.png","./image/cappuccino.png",
            "./image/latte_macchiato.png", "./image/espresso.png",
            "./image/fluffcoffee.png", "./image/donutcat.png",
            "./image/cruasan.png", "./image/840_560.jpg",
            "./image/churro.jpg", "./image/Orangejuice.jpg",
            "./image/apple-juice-recipe.jpg", "./image/Mambo_Triturar_Piñacolada_RRSS.jpg",
            "./image/HEADERkuroneko_halloween.jpg", "./image/05COOKING-TIRAMISU1-threeByTwoMediumAt2X-v2.jpg",
            "./image/6d304afefe086879df26cb564115b39d.jpg", "./image/nc-13.webp",
            "./image/catcookie.png", "./image/kitty-cookies4-895x500.jpg",
            "./image/images.jpeg"
        ]
        listDiv.innerHTML = "";
        listOrder.innerHTML = "";

        let truncar = (num,dec) => {
            let s = num.toString()
            let decimalLength = s.indexOf(".")+1
            let numStr = s.substring(0,decimalLength + dec)
            return Number(numStr)
        }

        for (const [i,product] of this.prods.entries()) {
            if (product.name !== "" && product.cantidad > 0) {
                listDiv.innerHTML += `
                    <div class="preview row">
                        <div class="title row col-6">
                            <p class="t col-9">`+product.name+`</p>
                            <p class="p col-3">`+this.prices[i]+`€</p>
                        </div>
                        <div class="price row col-6">
                            <p class="x col-5">x`+product.cantidad+`</p>
                            <p class="subtotal col-7">`+truncar(this.sums[i],2)+`€</p>
                        </div>
                    </div>
                `;

                listOrder.innerHTML += `
                    <div class="preview row">
                        <div class="image-prev">
                            <img alt="Image Prev" src="+collectionImages[i]+">
                        </div>
                        <div class="title col-7">
                            <p class="t">`+product.name+`</p>
                            <p class="p">`+this.prices[i]+`€</p>
                        </div>
                        <div class="price row col-3">
                            <p class="x col-5">x`+product.cantidad+`</p>
                            <p class="subtotal col-7">`+truncar(this.sums[i],2)+`€</p>
                        </div>
                    </div>
                `;
            }
        }
    }

    updateProduct(id, cantidad) {
        let product = document.getElementById(id);
        if (cantidad >= 0){
            product.innerText = cantidad;
        } else {
            product.innerText = "0";
        }
    }

    updateSum(ind, cant){
        if (cant >= 0) {
            this.sums[ind-1] = cant*this.prices[ind-1]
        } else {
            this.sums[ind-1] = 0
        }
    }
    updateTotalAmmount(ind,cantidad){
        let result = document.getElementById("order-total")
        let res_prod = document.getElementById("order-total-prev")

        if (cantidad >= 0){
            this.updateSum(ind,cantidad)
        }

        let totalPrice = 0
        for (const sum of this.sums) {
            totalPrice += sum
        }

        let truncar = (num,dec) => {
            let s = num.toString()
            let decimalLength = s.indexOf(".")+1
            let numStr = s.substring(0,decimalLength + dec)
            return Number(numStr)
        }
        result.innerText = String(truncar(totalPrice,2))+"€"
        res_prod.innerText = String(truncar(totalPrice,2))+"€"
    }

    updateTotalQuantity(){
        let total_quantity = document.getElementById("sum-am")

        total_quantity.innerText = String(this.getProductsTotalAmmount())
    }
}
