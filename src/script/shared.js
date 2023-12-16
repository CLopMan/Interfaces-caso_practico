// Adds the header/navigation menu
$("body").prepend(`<header class="SplitContainer">
    <img src="./image/logo_menu.png" alt="CATfé logo">
    <div id="nav-button-container"><button type="button" id="nav-menu-button" onclick="toggle_menu()">☰</button></div>
</header>
<nav id="nav-menu">
    <a href="./home.html">Home</a>
    <a href="./menu_pedido.html">Haz un pedido</a>
    <a href="./actividades.html">Actividades</a>
    <a href="./tarifas.html">Productos</a>
    <a href="./gatos.html">Nuestros gatos</a>
    <a href="./establecimiento.html">Establecimiento</a>
    <a href="./reserva.html">Reserva</a>
    <a href="./contacto.html">Sobre nosotros</a>
</nav>
`)

// State of the hamburger menu
let menu_shown = false

/**
 * Toggles the hamburger menu visibility with an animation
 * @public
 */
function toggle_menu() {
    if (menu_shown === true) {
        $("#nav-menu").removeClass("ShowNav");
        $("#nav-menu-button").text("☰");
        menu_shown = false
    } else {
        $("#nav-menu").addClass("ShowNav")
        $("#nav-menu-button").text("🗙");
        menu_shown = true
    }
}
