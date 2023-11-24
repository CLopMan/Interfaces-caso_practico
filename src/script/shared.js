// Adds the header/navigation menu
$("body").prepend(`<header>
    CATfé
    <img src="TODO: missing image" alt="CATfé logo">
    <button type="button" id="nav-menu-button" onclick="toggle_menu()">☰</button>
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
menu_shown = false

/**
 * Toggles the hamburger menu visibility with an animation
 * @public
 */
function toggle_menu() {
    if (menu_shown === true) {
        $("#nav-menu").hide();
        $("#nav-menu-button").text("☰");
        menu_shown = false
    } else {
        $("#nav-menu").show();
        $("#nav-menu-button").text("🗙");
        menu_shown = true
    }
}
