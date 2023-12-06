// Adds the header/navigation menu
$("body").prepend(`<header>
    CATfé
    <img src="image 2.png" alt="CATfé logo">
    <div id="nav-button-container"><button type="button" id="nav-menu-button" onclick="toggle_menu()">☰</button></div>
</header>
<nav id="nav-menu">
    <a class="Button" href="./home.html">Home</a>
    <a class="Button" href="./menu_pedido.html">Haz un pedido</a>
    <a class="Button" href="./actividades.html">Actividades</a>
    <a class="Button" href="./tarifas.html">Productos</a>
    <a class="Button" href="./gatos.html">Nuestros gatos</a>
    <a class="Button" href="./establecimiento.html">Establecimiento</a>
    <a class="Button" href="./reserva.html">Reserva</a>
    <a class="Button" href="./localizacion.html">Dónde estamos</a>
    <a class="Button" href="./contacto.html">Contacto</a>
</nav>
`)
$("#nav-menu").hide();

// State of the hamburger menu
let menu_shown = false

/**
 * Toggles the hamburger menu visibility with an animation
 * @public
 */
function toggle_menu() {
    if (menu_shown === true) {
        $("body").css({overflow: ""});
        $("#nav-menu").fadeOut(250);
        $("#nav-menu-button").text("☰");
        menu_shown = false
    } else {
        $("body").css({overflow: "hidden"});
        $("#nav-menu").fadeIn(250);
        $("#nav-menu-button").text("🗙");
        menu_shown = true
    }
}
