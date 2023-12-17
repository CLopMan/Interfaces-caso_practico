function changeSection(section){
    let menu = document.getElementById("menu")
    let pedido = document.getElementById("pedido")

    if (section === "menu"){
        menu.classList.remove("hidden")
        pedido.classList.add("hidden")
    } else if (section === "pedido" && cart.getProductsTotalAmount() !== 0){
        pedido.classList.remove("hidden")
        menu.classList.add("hidden")
    } else {
        alert("El pedido no puede estar vacío!!!")
    }

}

function generate_product(id, title, img, price, description, ingredients) {
    return `
        <!-- Standard Format of products -->
        <article id="pr-${id}" class="product Item ResizableHeight DisplayContainer">
            <div class="ImagePreview"><img alt="Image ${title}" src="./image/${img}"></div>
            <div class="Content">
                <div class="title SplitContainer">
                    <p class="ItemText">${title}</p>
                    <button class="NumberButton ItemText" onclick='addProduct("${title}",${id},Number(document.getElementById("amount-${id}").innerText) - 1)'>-</button>
                    <p id="amount-${id}" class="ItemText NumberValue">0</p>
                    <button class="NumberButton ItemText" onclick='addProduct("${title}",${id},Number(document.getElementById("amount-${id}").innerText) + 1)'>+</button>
                </div>
                <div class="price SplitContainer">
                    <p class="ProductPrice">${price}</p>
                    <div class="ingredients">
                        ${ingredients.map((x) => `<img alt="${x.alt}" src="${x.src}">`).join("\n")}
                    </div>
                </div>
                <p class="description">${description}</p>
            </div>
        </article>
    `
}

function ChangeState(state) {
    let prodsDiv = document.getElementsByClassName("prodDiv")[0]
    let buttons = document.getElementsByClassName("but")

    if (state === 1) {

        for (let i = 0; i < buttons.length; i++) {
            if (i === state -1){
                buttons[i].style.color = "#ffffff"
                buttons[i].style.backgroundColor = "#6C461A"
            } else {
                buttons[i].style.backgroundColor = "#F9F8F6"
                buttons[i].style.color = "#000000"
            }
        }
        console.log("State 1")
        let items = [
            [1, "Café Solo", "floatingcoffee.png", "1.90€", "Granos de cafe arábica Harrar, Etiopía", []],
            [2, "Capuccino", "cappuccino.png", "3.00€", "Granos de cafe arábica Moka, Etiopía", [{alt: "Milk", src: "./image/milk.png"}]],
            [3, "Latte Macchiato", "latte_macchiato.png", "3.50€", "Granos de cafe arábica Harrar, Etiopía", [{alt: "Milk", src: "./image/milk.png"}]],
            [4, "Expresso", "espresso.png", "1.40€", "Granos de cafe arábica Moka, Etiopía", []],
            [5, "Café con Leche", "fluffcoffee.png", "2.00€", "Granos de cafe arábica Harrar, Etiopía", [{alt: "Milk", src: "./image/milk.png"}]],
        ].map((x) => generate_product(...x)).join("\n")
        prodsDiv.innerHTML = `
            <!-- Content for category "Cafés" -->
            <div id="cafes" class="prods">
                ${items}
        `;
    } else if (state === 2) {
        for (let i = 0; i < buttons.length; i++) {
            if (i === state -1){
                buttons[i].style.color = "#ffffff"
                buttons[i].style.backgroundColor = "#6C461A"
            } else {
                buttons[i].style.backgroundColor = "#F9F8F6"
                buttons[i].style.color = "#000000"
            }
        }

        console.log("State 2")
        let items = [
            [6, "Donnuts", "donutcat.png", "1.30€/ud", "Con masa hecha a mano de calidad", [{alt: "Eggs", src: "./image/huevos.png"}, {alt: "Wheat", src: "./image/trigo.png"}, {alt: "Milk", src: "./image/milk.png"}]],
            [7, "Cruasan", "cruasan.png", "2.00€/ud", "Masa e ingredientes de calidad", [{alt: "Eggs", src: "./image/huevos.png"}, {alt: "Wheat", src: "./image/trigo.png"}, {alt: "Milk", src: "./image/milk.png"}]],
            [8, "Napolitana", "840_560.jpg", "1.90€/ud", "Rellena de chocolate cremoso", [{alt: "Eggs", src: "./image/huevos.png"}, {alt: "Wheat", src: "./image/trigo.png"}, {alt: "Milk", src: "./image/milk.png"}]],
            [9, "Churros", "churro.jpg", "0.30€/ud", "Hechos a mano", [{alt: "Eggs", src: "./image/huevos.png"}, {alt: "Wheat", src: "./image/trigo.png"}, {alt: "Milk", src: "./image/milk.png"}]],
        ].map((x) => generate_product(...x)).join("\n")
        prodsDiv.innerHTML = `
            <div id="bakes" class="prods">
                ${items}
            </div>
        `;
    } else if (state === 3) {
        for (let i = 0; i < buttons.length; i++) {
            if (i === state -1){
                buttons[i].style.color = "#ffffff"
                buttons[i].style.backgroundColor = "#6C461A"
            } else {
                buttons[i].style.backgroundColor = "#F9F8F6"
                buttons[i].style.color = "#000000"
            }
        }

        console.log("State 3")
        let items = [
            [10, "Zumo de Naranja", "Orangejuice.jpg", "1.00€", "Exprimido en el momento", []],
            [11, "Zumo de Manzana", "apple-juice-recipe.jpg", "2.00€", "Zumo de temporada", []],
            [12, "Zumo de Piña", "Mambo_Triturar_Piñacolada_RRSS.jpg", "1.50€", "Con un rico sabor", []],
        ].map((x) => generate_product(...x)).join("\n")
        prodsDiv.innerHTML = `
            <div id="juices" class="prods">
                ${items}
            </div>`
    } else if (state === 4) {
        for (let i = 0; i < buttons.length; i++) {
            if (i === state -1){
                buttons[i].style.color = "#ffffff"
                buttons[i].style.backgroundColor = "#6C461A"
            } else {
                buttons[i].style.backgroundColor = "#F9F8F6"
                buttons[i].style.color = "#000000"
            }
        }
        console.log("State 4")
        let items = [
            [13, "Minitarta de Chocolate", "HEADERkuroneko_halloween.jpg", "7.00€", "Chocolate Negro", [{alt: "Eggs", src: "./image/huevos.png"}, {alt: "Wheat", src: "./image/trigo.png"}, {alt: "Milk", src: "./image/milk.png"}]],
            [14, "Tiramisú", "05COOKING-TIRAMISU1-threeByTwoMediumAt2X-v2.jpg", "4.00€", "Una pieza con delicioso sabor a café", [{alt: "Eggs", src: "./image/huevos.png"}, {alt: "Wheat", src: "./image/trigo.png"}, {alt: "Milk", src: "./image/milk.png"}]],
            [15, "Tarta de Chocolate", "6d304afefe086879df26cb564115b39d.jpg", "20.00€", "Para compartir con amigos!", [{alt: "Eggs", src: "./image/huevos.png"}, {alt: "Wheat", src: "./image/trigo.png"}, {alt: "Milk", src: "./image/milk.png"}]],
            [16, "Tarta de Queso", "nc-13.png", "10.00€", "Con textura cremosa", [{alt: "Eggs", src: "./image/huevos.png"}, {alt: "Milk", src: "./image/milk.png"}]],
        ].map((x) => generate_product(...x)).join("\n")
        prodsDiv.innerHTML = `
            <div id="cakes" class="prods">
                ${items}
            </div>
        `
    } else if (state === 5) {
        for (let i = 0; i < buttons.length; i++) {
            if (i === state -1){
                buttons[i].style.color = "#ffffff"
                buttons[i].style.backgroundColor = "#6C461A"
            } else {
                buttons[i].style.backgroundColor = "#F9F8F6"
                buttons[i].style.color = "#000000"
            }
        }
        console.log("State 5")
        let items = [
            [17, "Galletas de Chocolate", "catcookie.png", "0.70€/ud", "Chocolate Negro y con leche", [{alt: "Eggs", src: "./image/huevos.png"}, {alt: "Wheat", src: "./image/trigo.png"}, {alt: "Milk", src: "./image/milk.png"}]],
            [18, "Galletas de Azucar", "kitty-cookies4-895x500.jpg", "1.00€/ud", "Con diseños hechos a mano", [{alt: "Eggs", src: "./image/huevos.png"}, {alt: "Wheat", src: "./image/trigo.png"}, {alt: "Milk", src: "./image/milk.png"}]],
            [19, "Galletas de Mantequilla", "images.jpeg", "0.60€/ud", "Crujientes y deliciosas", [{alt: "Eggs", src: "./image/huevos.png"}, {alt: "Wheat", src: "./image/trigo.png"}, {alt: "Milk", src: "./image/milk.png"}]],
        ].map((x) => generate_product(...x)).join("\n")
        prodsDiv.innerHTML = `
            <div id="bis" class="prods">
                ${items}
            </div>
        `
    }
}

function updateSection(num){
    let sectionInds
    switch (num) {
        case 1:
            sectionInds = [1,2,3,4,5]
            break
        case 2:
            sectionInds = [6,7,8,9]
            break
        case 3:
            sectionInds = [10,11,12]
            break
        case 4:
            sectionInds = [13,14,15,16]
            break
        case 5:
            sectionInds = [17,18,19]
    }

    for (const sectionInd of sectionInds) {
        updateProduct(sectionInd)
    }
}

function changeStep(step){
    let progressBar = [document.getElementById("revision"), document.getElementById("t-1"),
        document.getElementById("login"), document.getElementById("t-2"),
        document.getElementById("shipment"), document.getElementById("t-3"), document.getElementById("payment")
    ]

    let stepFrame = document.getElementById("step")
    let frames = [stepFrame.getElementsByClassName("result")[0], stepFrame.getElementsByClassName("login")[0],
        stepFrame.getElementsByClassName("sending")[0],stepFrame.getElementsByClassName("payment")[0],
        stepFrame.getElementsByClassName("success")[0]
    ]

    if (step === 2 && cart.getProductsTotalAmount() === 0){
        alert("El pedido no puede estar vacío!!!")
        return
    }

    switch (step){
        case 1:
            progressBar[0].style.backgroundColor = "#6c461a";
            progressBar[0].style.color = "#ffffff";
            for (let i = 1; i < progressBar.length; i++) {
                progressBar[i].style.color = "#000000";
                progressBar[i].style.backgroundColor = "lightgray";
            }

            for (let i = 0; i < frames.length; i++) {
                if (i === 0){
                    frames[i].style.display = "block"
                } else {
                    frames[i].style.display = "none"
                }
            }
            break;
        case 2:
            for (let i = 0; i < progressBar.length; i++) {
                if (i <= 2){
                    progressBar[i].style.backgroundColor = "#6c461a";
                    progressBar[i].style.color = "#ffffff";
                } else {
                    progressBar[i].style.color = "#000000";
                    progressBar[i].style.backgroundColor = "lightgray";
                }
            }

            for (let i = 0; i < frames.length; i++) {
                if (i === 1){
                    console.log("Show")
                    frames[i].style.display = "block"
                } else {
                    frames[i].style.display = "none"
                }
            }
            break
        case 3:
            for (let i = 0; i < progressBar.length; i++) {
                if (i <= 4){
                    progressBar[i].style.backgroundColor = "#6c461a";
                    progressBar[i].style.color = "#ffffff";
                } else {
                    progressBar[i].style.color = "#000000";
                    progressBar[i].style.backgroundColor = "lightgray";
                }
            }

            for (let i = 0; i < frames.length; i++) {
                if (i === 2){
                    frames[i].style.display = "block"
                } else {
                    frames[i].style.display = "none"
                }
            }
            break
        case 4:
            for (let i = 0; i < progressBar.length; i++) {
                progressBar[i].style.backgroundColor = "#6c461a";
                progressBar[i].style.color = "#ffffff";
            }

            for (let i = 0; i < frames.length; i++) {
                if (i === 3){
                    frames[i].style.display = "block"
                } else {
                    frames[i].style.display = "none"
                }
            }
            break
        case 5:
            for (let i = 0; i < progressBar.length; i++) {
                progressBar[i].style.backgroundColor = "#6c461a";
                progressBar[i].style.color = "#ffffff";
            }

            for (let i = 0; i < frames.length; i++) {
                if (i === 4){
                    frames[i].style.display = "block"
                } else {
                    frames[i].style.display = "none"
                }
            }
            break
    }
}

class Test{
    constructor() {
    }
}

generate_form(
    "#register-form",
    "Registro de Usuario",
    [
        {name: "Nombre",     valid: Name,     placeholder: "Nombre"},
        {name: "Apellidos",  valid: Name,     placeholder: "Apellido1 Apellido2"},
        {name: "Email",      valid: Email,    placeholder: "ejemplo@dominio.extensión", type: "email"},
        {name: "Teléfono",   valid: Phone,    placeholder: "+34766666666"},
        {name: "Contraseña", valid: Password, placeholder: "Introduzca un mínimo de 8 caracteres", type: "password"},
    ],
    {
        name: "Datos de Envío",
        serialize: User,
        callback: () => {
            cart.updateMasterPrice()
            changeStep(3)
        },
    }
)

generate_form(
    "#sending-form",
    "Envío",
    [
        {name: "direction", valid: Name,placeholder: "Dirección"},
    ],
)

generate_form(
    "#form-payment",
    "Información de Pago",
    [
        {name: "Nombre del Titular", valid: Name,placeholder: "Nombre"},
        {name: "Número de targeta", valid: CreditCardNumber,placeholder: "Ej: 9999 9999 9999 9999"},
        {name: "Fecha de Expiración", valid: CreditCardExpiryDate,placeholder: "MM/AA"},
        {name: "CVC", valid: CreditCardCVC,placeholder: "CVC"},
    ],
    {
        name: "Pagar",
        serialize: Test,
        skip_serialize: true,
        callback: () => {
            changeStep(5)
            $('#clock').timeTo({
                seconds: 1800,
                displayHours: false
            });
        },
    }
)
