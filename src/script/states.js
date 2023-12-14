
function changeSection(section){
    let menu = document.getElementById("menu")
    let pedido = document.getElementById("pedido")

    if (section === "menu"){
        menu.classList.remove("hidden")
        pedido.classList.add("hidden")
    } else if (section === "pedido"){
        pedido.classList.remove("hidden")
        menu.classList.add("hidden")
    }

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
        prodsDiv.innerHTML = "<!-- Content for category \"Cafés\" -->\n" +
            "                    <div id=\"cafes\" class=\"prods\">\n" +
            "\n" +
            "                        <!-- Standard Format of products -->\n" +
            "                        <article id=\"pr-1\" class=\"pr\">\n" +
            "\n" +
            "                            <div class=\"prev\">\n" +
            "                                <img alt=\"Image Café Solo\" src=\"/src/image/floatingcoffee.png\">\n" +
            "                            </div>\n" +
            "\n" +
            "                            <div class=\"content\">\n" +
            "\n" +
            "                                <div class=\"ops\">\n" +
            "\n" +
            "                                    <div class=\"op\">\n" +
            "                                        <p>Café Solo</p>\n" +
            "\n" +
            "                                        <div class=\"ammount\">\n" +
            "                                            <button class=\"but\" onclick='addProduct(\"Café Solo\",1,Number(document.getElementById(\"ammount-1\").innerText) -1)'>-</button>\n" +
            "                                            <p id=\"ammount-1\">0</p>\n" +
            "                                            <button class=\"but\" onclick='addProduct(\"Café Solo\",1,Number(document.getElementById(\"ammount-1\").innerText) +1)'>+</button>\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "\n" +
            "                                    <div class=\"price\">\n" +
            "\n" +
            "                                        <p>1.90€</p>\n" +
            "\n" +
            "                                        <div class=\"ingredients\"></div>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "\n" +
            "                                <div class=\"descr\">\n" +
            "                                    <p>Granos de cafe arábica Harrar, Etiopía</p>\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "\n" +
            "                        </article>\n" +
            "\n" +
            "                        <!-- Standard Format of products -->\n" +
            "                        <article id=\"pr-2\" class=\"pr\">\n" +
            "\n" +
            "                            <div class=\"prev\">\n" +
            "                                <img alt=\"Image Capuccino\" src=\"/src/image/cappuccino.png\">\n" +
            "                            </div>\n" +
            "\n" +
            "                            <div class=\"content\">\n" +
            "\n" +
            "                                <div class=\"ops\">\n" +
            "\n" +
            "                                    <div class=\"op\">\n" +
            "                                        <p>Capuccino</p>\n" +
            "\n" +
            "                                        <div class=\"ammount\">\n" +
            "                                            <button class=\"but\" onclick='addProduct(\"Capuccino\",2,Number(document.getElementById(\"ammount-2\").innerText) -1)'>-</button>\n" +
            "                                            <p id=\"ammount-2\">0</p>\n" +
            "                                            <button class=\"but\" onclick='addProduct(\"Capuccino\",2,Number(document.getElementById(\"ammount-2\").innerText) +1)'>+</button>\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "\n" +
            "                                    <div class=\"price\">\n" +
            "\n" +
            "                                        <p>3.00€</p>\n" +
            "\n" +
            "                                        <div class=\"ingredients\">\n" +
            "                                            <img alt=\"Milk\" src=\"\">\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "\n" +
            "                                <div class=\"descr\">\n" +
            "                                    <p>Granos de cafe arábica Moka, Etiopía</p>\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </article>\n" +
            "\n" +
            "                        <!-- Standard Format of products -->\n" +
            "                        <article id=\"pr-3\" class=\"pr\">\n" +
            "\n" +
            "                            <div class=\"prev\">\n" +
            "                                <img alt=\"Image Latte Macchiato\" src=\"/src/image/latte_macchiato.png\">\n" +
            "                            </div>\n" +
            "\n" +
            "                            <div class=\"content\">\n" +
            "\n" +
            "                                <div class=\"ops\">\n" +
            "\n" +
            "                                    <div class=\"op\">\n" +
            "                                        <p>Latte Macchiato</p>\n" +
            "\n" +
            "                                        <div class=\"ammount\">\n" +
            "                                            <button class=\"but\" onclick='addProduct(\"Macchiato\",3,Number(document.getElementById(\"ammount-3\").innerText) -1)'>-</button>\n" +
            "                                            <p id=\"ammount-3\">0</p>\n" +
            "                                            <button class=\"but\" onclick='addProduct(\"Macchiato\",3,Number(document.getElementById(\"ammount-3\").innerText) +1)'>+</button>\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "\n" +
            "                                    <div class=\"price\">\n" +
            "\n" +
            "                                        <p>3.50€</p>\n" +
            "\n" +
            "                                        <div class=\"ingredients\">\n" +
            "                                            <img alt=\"Milk\" src=\"\">\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "\n" +
            "                                <div class=\"descr\">\n" +
            "                                    <p>Granos de cafe arábica Harrar, Etiopía</p>\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </article>\n" +
            "\n" +
            "                        <!-- Standard Format of products -->\n" +
            "                        <article id=\"pr-4\" class=\"pr\">\n" +
            "\n" +
            "                            <div class=\"prev\">\n" +
            "                                <img alt=\"Image Expresso\" src=\"/src/image/espresso.png\">\n" +
            "                            </div>\n" +
            "\n" +
            "                            <div class=\"content\">\n" +
            "\n" +
            "                                <div class=\"ops\">\n" +
            "\n" +
            "                                    <div class=\"op\">\n" +
            "                                        <p>Expresso</p>\n" +
            "\n" +
            "                                        <div class=\"ammount\">\n" +
            "                                            <button class=\"but\" onclick='addProduct(\"Expresso\",4,Number(document.getElementById(\"ammount-4\").innerText) -1)'>-</button>\n" +
            "                                            <p id=\"ammount-4\">0</p>\n" +
            "                                            <button class=\"but\" onclick='addProduct(\"Expresso\",4,Number(document.getElementById(\"ammount-4\").innerText) +1)'>+</button>\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "\n" +
            "                                    <div class=\"price\">\n" +
            "\n" +
            "                                        <p>1.40€</p>\n" +
            "\n" +
            "                                        <div class=\"ingredients\">\n" +
            "\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "\n" +
            "                                <div class=\"descr\">\n" +
            "                                    <p>Granos de cafe arábica Moka, Etiopía</p>\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </article>\n" +
            "\n" +
            "                        <!-- Standard Format of products -->\n" +
            "                        <article id=\"pr-5\" class=\"pr\">\n" +
            "\n" +
            "                            <div class=\"prev\">\n" +
            "                                <img alt=\"Image Cafe con Leche\" src=\"/src/image/fluffcoffee.png\">\n" +
            "                            </div>\n" +
            "\n" +
            "                            <div class=\"content\">\n" +
            "\n" +
            "                                <div class=\"ops\">\n" +
            "\n" +
            "                                    <div class=\"op\">\n" +
            "                                        <p>Café con Leche</p>\n" +
            "\n" +
            "                                        <div class=\"ammount\">\n" +
            "                                            <button class=\"but\" onclick='addProduct(\"Cafe con Leche\",5,Number(document.getElementById(\"ammount-5\").innerText) -1)'>-</button>\n" +
            "                                            <p id=\"ammount-5\">0</p>\n" +
            "                                            <button class=\"but\" onclick='addProduct(\"Cafe con Leche\",5,Number(document.getElementById(\"ammount-5\").innerText) +1)'>+</button>\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "\n" +
            "                                    <div class=\"price\">\n" +
            "\n" +
            "                                        <p>2.00€</p>\n" +
            "\n" +
            "                                        <div class=\"ingredients\">\n" +
            "                                            <img alt=\"Milk\" src=\"\">\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "\n" +
            "                                <div class=\"descr\">\n" +
            "                                    <p>Granos de cafe arábica Harrar, Etiopía</p>\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </article>\n" +
            "                    </div>"

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
        prodsDiv.innerHTML = "<div id=\"bakes\" class=\"prods\">\n" +
            "\n" +
            "                        <!-- Standard Format of products -->\n" +
            "                        <article id=\"pr-6\" class=\"pr\">\n" +
            "\n" +
            "                            <div class=\"prev\">\n" +
            "                                <img alt=\"Image Donuts\" src=\"/src/image/donutcat.png\">\n" +
            "                            </div>\n" +
            "\n" +
            "                            <div class=\"content\">\n" +
            "\n" +
            "                                <div class=\"ops\">\n" +
            "\n" +
            "                                    <div class=\"op\">\n" +
            "                                        <p>Donnuts</p>\n" +
            "\n" +
            "                                        <div class=\"ammount\">\n" +
            "                                            <button class=\"but\" onclick='addProduct(\"Donnuts\",6,Number(document.getElementById(\"ammount-6\").innerText) -1)'>-</button>\n" +
            "                                            <p id=\"ammount-6\">0</p>\n" +
            "                                            <button class=\"but\" onclick='addProduct(\"Donnuts\",6,Number(document.getElementById(\"ammount-6\").innerText) +1)'>+</button>\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "\n" +
            "                                    <div class=\"price\">\n" +
            "\n" +
            "                                        <p>1.30€/ud</p>\n" +
            "\n" +
            "                                        <div class=\"ingredients\">\n" +
            "                                            <img alt=\"Eggs\" src=\"\">\n" +
            "                                            <img alt=\"Wheat\" src=\"\">\n" +
            "                                            <img alt=\"Milk\" src=\"\">\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "\n" +
            "                                <div class=\"descr\">\n" +
            "                                    <p>Con masa hecha a mano de calidad.</p>\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </article>\n" +
            "\n" +
            "                        <!-- Standard Format of products -->\n" +
            "                        <article id=\"pr-7\" class=\"pr\">\n" +
            "\n" +
            "                            <div class=\"prev\">\n" +
            "                                <img alt=\"Image Cruasan\" src=\"/src/image/cruasan.png\">\n" +
            "                            </div>\n" +
            "\n" +
            "                            <div class=\"content\">\n" +
            "\n" +
            "                                <div class=\"ops\">\n" +
            "\n" +
            "                                    <div class=\"op\">\n" +
            "                                        <p>Cruasan</p>\n" +
            "\n" +
            "                                        <div class=\"ammount\">\n" +
            "                                            <button class=\"but\" onclick='addProduct(\"Cruasan\",7,Number(document.getElementById(\"ammount-7\").innerText) -1)'>-</button>\n" +
            "                                            <p id=\"ammount-7\">0</p>\n" +
            "                                            <button class=\"but\" onclick='addProduct(\"Cruasan\",7,Number(document.getElementById(\"ammount-7\").innerText) +1)'>+</button>\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "\n" +
            "                                    <div class=\"price\">\n" +
            "\n" +
            "                                        <p>2.00€/ud</p>\n" +
            "\n" +
            "                                        <div class=\"ingredients\">\n" +
            "                                            <img alt=\"Eggs\" src=\"\">\n" +
            "                                            <img alt=\"Wheat\" src=\"\">\n" +
            "                                            <img alt=\"Milk\" src=\"\">\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "\n" +
            "                                <div class=\"descr\">\n" +
            "                                    <p>Masa e ingredientes de calidad</p>\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </article>\n" +
            "\n" +
            "                        <!-- Standard Format of products -->\n" +
            "                        <article id=\"pr-8\" class=\"pr\">\n" +
            "\n" +
            "                            <div class=\"prev\">\n" +
            "                                <img alt=\"Image Napolitana\" src=\"/src/image/840_560.jpg\">\n" +
            "                            </div>\n" +
            "\n" +
            "                            <div class=\"content\">\n" +
            "\n" +
            "                                <div class=\"ops\">\n" +
            "\n" +
            "                                    <div class=\"op\">\n" +
            "                                        <p>Napolitana</p>\n" +
            "\n" +
            "                                        <div class=\"ammount\">\n" +
            "                                            <button class=\"but\" onclick='addProduct(\"Napolitana\",8,Number(document.getElementById(\"ammount-8\").innerText) -1)'>-</button>\n" +
            "                                            <p id=\"ammount-8\">0</p>\n" +
            "                                            <button class=\"but\" onclick='addProduct(\"Napolitana\",8,Number(document.getElementById(\"ammount-8\").innerText) +1)'>+</button>\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "\n" +
            "                                    <div class=\"price\">\n" +
            "\n" +
            "                                        <p>1.90€/ud</p>\n" +
            "\n" +
            "                                        <div class=\"ingredients\">\n" +
            "                                            <img alt=\"Eggs\" src=\"\">\n" +
            "                                            <img alt=\"Wheat\" src=\"\">\n" +
            "                                            <img alt=\"Milk\" src=\"\">\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "\n" +
            "                                <div class=\"descr\">\n" +
            "                                    <p>Rellena de chocolate cremoso</p>\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </article>\n" +
            "\n" +
            "                        <!-- Standard Format of products -->\n" +
            "                        <article id=\"pr-9\" class=\"pr\">\n" +
            "\n" +
            "                            <div class=\"prev\">\n" +
            "                                <img alt=\"Image Churros\" src=\"/src/image/churro.jpg\">\n" +
            "                            </div>\n" +
            "\n" +
            "                            <div class=\"content\">\n" +
            "\n" +
            "                                <div class=\"ops\">\n" +
            "\n" +
            "                                    <div class=\"op\">\n" +
            "                                        <p>Churros</p>\n" +
            "\n" +
            "                                        <div class=\"ammount\">\n" +
            "                                            <button class=\"but\" onclick='addProduct(\"Churros\",9,Number(document.getElementById(\"ammount-9\").innerText) -1)'>-</button>\n" +
            "                                            <p id=\"ammount-9\">0</p>\n" +
            "                                            <button class=\"but\" onclick='addProduct(\"Churros\",9,Number(document.getElementById(\"ammount-9\").innerText) +1)'>+</button>\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "\n" +
            "                                    <div class=\"price\">\n" +
            "\n" +
            "                                        <p>0.30€/ud</p>\n" +
            "\n" +
            "                                        <div class=\"ingredients\">\n" +
            "                                            <img alt=\"Eggs\" src=\"\">\n" +
            "                                            <img alt=\"Wheat\" src=\"\">\n" +
            "                                            <img alt=\"Milk\" src=\"\">\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "\n" +
            "                                <div class=\"descr\">\n" +
            "                                    <p>Hechos a mano</p>\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </article>\n" +
            "                    </div>"
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
        prodsDiv.innerHTML = "<div id=\"juices\" class=\"prods\">\n" +
            "                        <!-- Standard Format of products -->\n" +
            "                        <article id=\"pr-10\" class=\"pr\">\n" +
            "\n" +
            "                            <div class=\"prev\">\n" +
            "                                <img alt=\"Image Orange Juice\" src=\"/src/image/Orangejuice.jpg\">\n" +
            "                            </div>\n" +
            "\n" +
            "                            <div class=\"content\">\n" +
            "\n" +
            "                                <div class=\"ops\">\n" +
            "\n" +
            "                                    <div class=\"op\">\n" +
            "                                        <p>Zumo de Naranja</p>\n" +
            "\n" +
            "                                        <div class=\"ammount\">\n" +
            "                                            <button class=\"but\" onclick='addProduct(\"Zumo de Naranja\",10,Number(document.getElementById(\"ammount-10\").innerText) -1)'>-</button>\n" +
            "                                            <p id=\"ammount-10\">0</p>\n" +
            "                                            <button class=\"but\" onclick='addProduct(\"Zumo de Naranja\",10,Number(document.getElementById(\"ammount-10\").innerText) +1)'>+</button>\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "\n" +
            "                                    <div class=\"price\">\n" +
            "\n" +
            "                                        <p>1.00€</p>\n" +
            "\n" +
            "                                        <div class=\"ingredients\"></div>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "\n" +
            "                                <div class=\"descr\">\n" +
            "                                    <p>Exprimido en el momento</p>\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </article>\n" +
            "\n" +
            "                        <!-- Standard Format of products -->\n" +
            "                        <article id=\"pr-11\" class=\"pr\">\n" +
            "\n" +
            "                            <div class=\"prev\">\n" +
            "                                <img alt=\"Image Apple Juice\" src=\"/src/image/apple-juice-recipe.jpg\">\n" +
            "                            </div>\n" +
            "\n" +
            "                            <div class=\"content\">\n" +
            "\n" +
            "                                <div class=\"ops\">\n" +
            "\n" +
            "                                    <div class=\"op\">\n" +
            "                                        <p>Zumo de Manzana</p>\n" +
            "\n" +
            "                                        <div class=\"ammount\">\n" +
            "                                            <button class=\"but\" onclick='addProduct(\"Zumo de Manzana\",11,Number(document.getElementById(\"ammount-11\").innerText) -1)'>-</button>\n" +
            "                                            <p id=\"ammount-11\">0</p>\n" +
            "                                            <button class=\"but\" onclick='addProduct(\"Zumo de Manzana\",11,Number(document.getElementById(\"ammount-11\").innerText) +1)'>+</button>\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "\n" +
            "                                    <div class=\"price\">\n" +
            "\n" +
            "                                        <p>2.00€</p>\n" +
            "\n" +
            "                                        <div class=\"ingredients\"></div>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "\n" +
            "                                <div class=\"descr\">\n" +
            "                                    <p>Zumo de temporada</p>\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </article>\n" +
            "\n" +
            "                        <!-- Standard Format of products -->\n" +
            "                        <article id=\"pr-12\" class=\"pr\">\n" +
            "\n" +
            "                            <div class=\"prev\">\n" +
            "                                <img alt=\"Image Pineapple Juice\" src=\"/src/image/Mambo_Triturar_Piñacolada_RRSS.jpg\">\n" +
            "                            </div>\n" +
            "\n" +
            "                            <div class=\"content\">\n" +
            "\n" +
            "                                <div class=\"ops\">\n" +
            "\n" +
            "                                    <div class=\"op\">\n" +
            "                                        <p>Zumo de Piña</p>\n" +
            "\n" +
            "                                        <div class=\"ammount\">\n" +
            "                                            <button class=\"but\" onclick='addProduct(\"Zumo de Piña\",12,Number(document.getElementById(\"ammount-12\").innerText) -1)'>-</button>\n" +
            "                                            <p id=\"ammount-12\">0</p>\n" +
            "                                            <button class=\"but\" onclick='addProduct(\"Zumo de Piña\",12,Number(document.getElementById(\"ammount-12\").innerText) +1)'>+</button>\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "\n" +
            "                                    <div class=\"price\">\n" +
            "\n" +
            "                                        <p>1.50€</p>\n" +
            "\n" +
            "                                        <div class=\"ingredients\"></div>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "\n" +
            "                                <div class=\"descr\">\n" +
            "                                    <p>Con un rico sabor</p>\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </article>\n" +
            "\n" +
            "                    </div>"
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
        prodsDiv.innerHTML = "<div id=\"cakes\" class=\"prods\">\n" +
            "                        <!-- Standard Format of products -->\n" +
            "                        <article id=\"pr-13\" class=\"pr\">\n" +
            "\n" +
            "                            <div class=\"prev\">\n" +
            "                                <img alt=\"Image Mini Chocolate Cake\" src=\"/src/image/HEADERkuroneko_halloween.jpg\">\n" +
            "                            </div>\n" +
            "\n" +
            "                            <div class=\"content\">\n" +
            "\n" +
            "                                <div class=\"ops\">\n" +
            "\n" +
            "                                    <div class=\"op\">\n" +
            "                                        <p>Minitarta de Chocolate</p>\n" +
            "\n" +
            "                                        <div class=\"ammount\">\n" +
            "                                            <button class=\"but\" onclick='addProduct(\"Minitarta de Chocolate\",13,Number(document.getElementById(\"ammount-13\").innerText) -1)'>-</button>\n" +
            "                                            <p id=\"ammount-13\">0</p>\n" +
            "                                            <button class=\"but\" onclick='addProduct(\"Minitarta de Chocolate\",13,Number(document.getElementById(\"ammount-13\").innerText) +1)'>+</button>\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "\n" +
            "                                    <div class=\"price\">\n" +
            "\n" +
            "                                        <p>7.00€</p>\n" +
            "\n" +
            "                                        <div class=\"ingredients\">\n" +
            "                                            <img alt=\"Eggs\" src=\"\">\n" +
            "                                            <img alt=\"Wheat\" src=\"\">\n" +
            "                                            <img alt=\"Milk\" src=\"\">\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "\n" +
            "                                <div class=\"descr\">\n" +
            "                                    <p>Chocolate Negro</p>\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </article>\n" +
            "\n" +
            "                        <!-- Standard Format of products -->\n" +
            "                        <article id=\"pr-14\" class=\"pr\">\n" +
            "\n" +
            "                            <div class=\"prev\">\n" +
            "                                <img alt=\"Image Tiramisú\" src=\"/src/image/05COOKING-TIRAMISU1-threeByTwoMediumAt2X-v2.jpg\">\n" +
            "                            </div>\n" +
            "\n" +
            "                            <div class=\"content\">\n" +
            "\n" +
            "                                <div class=\"ops\">\n" +
            "\n" +
            "                                    <div class=\"op\">\n" +
            "                                        <p>Tiramisú</p>\n" +
            "\n" +
            "                                        <div class=\"ammount\">\n" +
            "                                            <button class=\"but\" onclick='addProduct(\"Tiramisú\",14,Number(document.getElementById(\"ammount-14\").innerText) -1)'>-</button>\n" +
            "                                            <p id=\"ammount-14\">0</p>\n" +
            "                                            <button class=\"but\" onclick='addProduct(\"Tiramisú\",14,Number(document.getElementById(\"ammount-14\").innerText) +1)'>+</button>\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "\n" +
            "                                    <div class=\"price\">\n" +
            "\n" +
            "                                        <p>4.00€</p>\n" +
            "\n" +
            "                                        <div class=\"ingredients\">\n" +
            "                                            <img alt=\"Eggs\" src=\"\">\n" +
            "                                            <img alt=\"Wheat\" src=\"\">\n" +
            "                                            <img alt=\"Milk\" src=\"\">\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "\n" +
            "                                <div class=\"descr\">\n" +
            "                                    <p>Una pieza con delicioso sabor a café</p>\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </article>\n" +
            "\n" +
            "                        <!-- Standard Format of products -->\n" +
            "                        <article id=\"pr-15\" class=\"pr\">\n" +
            "\n" +
            "                            <div class=\"prev\">\n" +
            "                                <img alt=\"Image Chocolate Cake\" src=\"/src/image/6d304afefe086879df26cb564115b39d.jpg\">\n" +
            "                            </div>\n" +
            "\n" +
            "                            <div class=\"content\">\n" +
            "\n" +
            "                                <div class=\"ops\">\n" +
            "\n" +
            "                                    <div class=\"op\">\n" +
            "                                        <p>Tarta de Chocolate</p>\n" +
            "\n" +
            "                                        <div class=\"ammount\">\n" +
            "                                            <button class=\"but\" onclick='addProduct(\"Tarta de Chocolate\",15,Number(document.getElementById(\"ammount-15\").innerText) -1)'>-</button>\n" +
            "                                            <p id=\"ammount-15\">0</p>\n" +
            "                                            <button class=\"but\" onclick='addProduct(\"Tarta de Chocolate\",15,Number(document.getElementById(\"ammount-15\").innerText) +1)'>+</button>\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "\n" +
            "                                    <div class=\"price\">\n" +
            "\n" +
            "                                        <p>20.00€</p>\n" +
            "\n" +
            "                                        <div class=\"ingredients\">\n" +
            "                                            <img alt=\"Eggs\" src=\"\">\n" +
            "                                            <img alt=\"Wheat\" src=\"\">\n" +
            "                                            <img alt=\"Milk\" src=\"\">\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "\n" +
            "                                <div class=\"descr\">\n" +
            "                                    <p>Para compartir con amigos!</p>\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </article>\n" +
            "\n" +
            "                        <!-- Standard Format of products -->\n" +
            "                        <article id=\"pr-16\" class=\"pr\">\n" +
            "\n" +
            "                            <div class=\"prev\">\n" +
            "                                <img alt=\"Image Cheese-cake\" src=\"/src/image/nc-13.webp\">\n" +
            "                            </div>\n" +
            "\n" +
            "                            <div class=\"content\">\n" +
            "\n" +
            "                                <div class=\"ops\">\n" +
            "\n" +
            "                                    <div class=\"op\">\n" +
            "                                        <p>Tarta de Queso</p>\n" +
            "\n" +
            "                                        <div class=\"ammount\">\n" +
            "                                            <button class=\"but\" onclick='addProduct(\"Tarta de Queso\",16,Number(document.getElementById(\"ammount-16\").innerText) -1)'>-</button>\n" +
            "                                            <p id=\"ammount-16\">0</p>\n" +
            "                                            <button class=\"but\" onclick='addProduct(\"Tarta de Queso\",16,Number(document.getElementById(\"ammount-16\").innerText) +1)'>+</button>\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "\n" +
            "                                    <div class=\"price\">\n" +
            "\n" +
            "                                        <p>10.00€</p>\n" +
            "\n" +
            "                                        <div class=\"ingredients\">\n" +
            "                                            <img alt=\"Eggs\" src=\"\">\n" +
            "                                            <img alt=\"Milk\" src=\"\">\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "\n" +
            "                                <div class=\"descr\">\n" +
            "                                    <p>Con textura cremosa</p>\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </article>\n" +
            "                    </div>"

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
        prodsDiv.innerHTML = "<div id=\"bis\" class=\"prods\">\n" +
            "\n" +
            "                        <!-- Standard Format of products -->\n" +
            "                        <article id=\"pr-17\" class=\"pr\">\n" +
            "\n" +
            "                            <div class=\"prev\">\n" +
            "                                <img alt=\"Image Chocolate Bisquits\" src=\"/src/image/catcookie.png\">\n" +
            "                            </div>\n" +
            "\n" +
            "                            <div class=\"content\">\n" +
            "\n" +
            "                                <div class=\"ops\">\n" +
            "\n" +
            "                                    <div class=\"op\">\n" +
            "                                        <p>Galletas de Chocolate</p>\n" +
            "\n" +
            "                                        <div class=\"ammount\">\n" +
            "                                            <button class=\"but\" onclick='addProduct(\"Galletas de Chocolate\",17,Number(document.getElementById(\"ammount-17\").innerText) -1)'>-</button>\n" +
            "                                            <p id=\"ammount-17\">0</p>\n" +
            "                                            <button class=\"but\" onclick='addProduct(\"Galletas de Chocolate\",17,Number(document.getElementById(\"ammount-17\").innerText) +1)'>+</button>\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "\n" +
            "                                    <div class=\"price\">\n" +
            "\n" +
            "                                        <p>0.70€/ud</p>\n" +
            "\n" +
            "                                        <div class=\"ingredients\">\n" +
            "                                            <img alt=\"Eggs\" src=\"\">\n" +
            "                                            <img alt=\"Wheat\" src=\"\">\n" +
            "                                            <img alt=\"Milk\" src=\"\">\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "\n" +
            "                                <div class=\"descr\">\n" +
            "                                    <p>Chocolate Negro y con leche.</p>\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </article>\n" +
            "\n" +
            "                        <!-- Standard Format of products -->\n" +
            "                        <article id=\"pr-18\" class=\"pr\">\n" +
            "\n" +
            "                            <div class=\"prev\">\n" +
            "                                <img alt=\"Image Sugar Bisquits\" src=\"/src/image/kitty-cookies4-895x500.jpg\">\n" +
            "                            </div>\n" +
            "\n" +
            "                            <div class=\"content\">\n" +
            "\n" +
            "                                <div class=\"ops\">\n" +
            "\n" +
            "                                    <div class=\"op\">\n" +
            "                                        <p>Galletas de Azucar</p>\n" +
            "\n" +
            "                                        <div class=\"ammount\">\n" +
            "                                            <button class=\"but\" onclick='addProduct(\"Galletas de Azucar\",18,Number(document.getElementById(\"ammount-18\").innerText) -1)'>-</button>\n" +
            "                                            <p id=\"ammount-18\">0</p>\n" +
            "                                            <button class=\"but\" onclick='addProduct(\"Galletas de Azucar\",18,Number(document.getElementById(\"ammount-18\").innerText) +1)'>+</button>\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "\n" +
            "                                    <div class=\"price\">\n" +
            "\n" +
            "                                        <p>1.00€/ud</p>\n" +
            "\n" +
            "                                        <div class=\"ingredients\">\n" +
            "                                            <img alt=\"Eggs\" src=\"\">\n" +
            "                                            <img alt=\"Wheat\" src=\"\">\n" +
            "                                            <img alt=\"Milk\" src=\"\">\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "\n" +
            "                                <div class=\"descr\">\n" +
            "                                    <p>Con diseños hechos a mano</p>\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </article>\n" +
            "\n" +
            "                        <!-- Standard Format of products -->\n" +
            "                        <article id=\"pr-19\" class=\"pr\">\n" +
            "\n" +
            "                            <div class=\"prev\">\n" +
            "                                <img alt=\"Image Butter Bisquits\" src=\"/src/image/images.jpeg\">\n" +
            "                            </div>\n" +
            "\n" +
            "                            <div class=\"content\">\n" +
            "\n" +
            "                                <div class=\"ops\">\n" +
            "\n" +
            "                                    <div class=\"op\">\n" +
            "                                        <p>Galletas de Mantequilla</p>\n" +
            "\n" +
            "                                        <div class=\"ammount\">\n" +
            "                                            <button class=\"but\" onclick='addProduct(\"Galletas de Mantequilla\",19,Number(document.getElementById(\"ammount-19\").innerText) -1)'>-</button>\n" +
            "                                            <p id=\"ammount-19\">0</p>\n" +
            "                                            <button class=\"but\" onclick='addProduct(\"Galletas de Mantequilla\",19,Number(document.getElementById(\"ammount-19\").innerText) +1)'>+</button>\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "\n" +
            "                                    <div class=\"price\">\n" +
            "\n" +
            "                                        <p>0.60€/ud</p>\n" +
            "\n" +
            "                                        <div class=\"ingredients\">\n" +
            "                                            <img alt=\"Eggs\" src=\"\">\n" +
            "                                            <img alt=\"Wheat\" src=\"\">\n" +
            "                                            <img alt=\"Milk\" src=\"\">\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "                                </div>\n" +
            "\n" +
            "                                <div class=\"descr\">\n" +
            "                                    <p>Crujientes y deliciosas</p>\n" +
            "                                </div>\n" +
            "                            </div>\n" +
            "                        </article>\n" +
            "                    </div>"
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
    let progressBar = [document.getElementById("revission"), document.getElementById("t-1"),
        document.getElementById("login"), document.getElementById("t-2"),
        document.getElementById("shipment"), document.getElementById("t-3"), document.getElementById("payment")
    ]

    let stepFrame = document.getElementById("step")
    let frames = [stepFrame.getElementsByClassName("result")[0], stepFrame.getElementsByClassName("login")[0],
        stepFrame.getElementsByClassName("sending")[0],stepFrame.getElementsByClassName("payment")[0],
        stepFrame.getElementsByClassName("success")[0]
    ]


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
        {name: "Nombre ", valid: Name,placeholder: "Nombre de usuario"},
        {name: "Apellidos ", valid: Name,placeholder: "Apellidos Completos"},
        {name: "Email de contacto ", valid: Email, type: "email",placeholder: "Nombre de usuario"},
        {name: "Número de teléfono ", valid: Phone, type: "tel",placeholder: "Teléfono"},
        {name: "Contraseña ", valid: Password, type: "password",placeholder: "Contraseña de usuario"}
    ],
    {
        name: "Datos de Envío",
        serialize: Test,
        skip_serialize: true,
        callback: () => {
            cart.updateMasterPrice(0,5)
            changeStep(3)
        },
        alert_ok: true
    }
)

generate_form(
    "#sending-form",
    "Envío",
    [
        {name: "Dirección de envío", valid: Name,placeholder: "Dirección"},
    ],
)

generate_form(
    "#form-payment",
    "Información de Pago",
    [
        {name: "Nombre del Titular", valid: Name,placeholder: "Nombre"},
        {name: "Número de targeta", valid: CreditCardNumber,placeholder: "Ej: 9999 9999 9999 9999"},
        {name: "Fecha de Expiración", valid: CreditCardExpiryDate,placeholder: "MM / AA"},
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
        alert_ok: true
    }
)