const toggle = document.getElementById("themeToggle");
const themeLink = document.getElementById("estilo");
const switchDiv = document.querySelector('.switch-container');
const spanLightMode = document.querySelector('.Light');
const spanDarkMode = document.querySelector('.Dark');

let temaActual = "oscuro"; // estado inicial

// Inicializar clases y estilos
spanDarkMode.classList.add('switch');

toggle.addEventListener("click", () => {

    if (temaActual === "oscuro") {
        themeLink.href = "styles/ModoClaro.css";
        temaActual = "claro";
        spanDarkMode.classList.remove('switch');
        spanLightMode.classList.add('switch');
    } else {
        themeLink.href = "styles/ModoOscuro.css";
        temaActual = "oscuro";
        spanLightMode.classList.remove('switch');
        spanDarkMode.classList.add('switch');
    }
});


