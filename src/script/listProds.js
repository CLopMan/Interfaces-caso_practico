let cart = new ShoppingCart();

cart.setUpdateAutomatic()

function addProduct(nombre, ind, cantidad){
    cart.prods[ind-1].name = nombre;

    if (cantidad >= 0){
        cart.prods[ind-1].cantidad = cantidad;
    }
    cart.prods[ind-1].price =cart.prices[ind];

    cart.updateProduct("amount-"+ind.toString(),cantidad);
    cart.updateTotalAmount(ind,cantidad)
    cart.updateTotalQuantity()


    cart.showProds();
}

function updateProduct(ind){
    let cantidad = cart.getProductAmount(ind)
    let prodAmount = document.getElementById("amount-"+ind.toString())
    prodAmount.innerText = String(cantidad)
}
