let cart = new ShoppingCart();

function addProduct(nombre, ind, cantidad){
    cart.prods[ind-1].name = nombre;

    if (cantidad >= 0){
        cart.prods[ind-1].cantidad = cantidad;
    }
    cart.prods[ind-1].price =cart.prices[ind];


    cart.updateProduct("ammount-"+ind.toString(),cantidad);
    cart.updateTotalAmmount(ind,cantidad)
    cart.updateTotalQuantity()


    cart.showProds();
}

function updateProduct(ind){
    let cantidad = cart.getProductAmmount(ind)
    let prodAmmount = document.getElementById("ammount-"+ind.toString())
    prodAmmount.innerText = String(cantidad)
}