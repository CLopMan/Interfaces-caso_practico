class ShoppingCart {
    constructor() {
        this.prices = [1.90, 3.00, 3.50, 1.40, 2.00,
            1.30, 2.00, 1.90, 0.30,
            1.00, 2.00, 1.50,
            7.00, 4.00, 20.00, 10.00,
            0.70, 1.00, 0.60 ];

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

    }

    getProductAmmount(ind){
        return this.prods[ind-1].cantidad
    }
    showProds(){
        let listDiv = document.getElementById("list-prods");
        listDiv.innerHTML = "";

        for (const product of this.prods) {
            if (product.name !== "" && product.cantidad > 0) {
                listDiv.innerHTML += "<p>Producto: "+product.name+", cantidad: "+product.cantidad+"</p>";
            }
        }
    }

    updateProduct(id, cantidad) {
        let product = document.getElementById(id);
        if (cantidad > 0){
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

        this.updateSum(ind,cantidad)

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
    }

}