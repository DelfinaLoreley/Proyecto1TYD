const toggle = document.getElementById("themeToggle");
const themeLink = document.getElementById("estilo");

let temaActual = "claro"; // estado inicial

toggle.addEventListener("click", () => {

    if (temaActual === "claro") {
        themeLink.href = "styles/ModoOscuro.css";
        temaActual = "oscuro";
    } else {
        themeLink.href = "styles/ModoClaro.css";
        temaActual = "claro";
    }
});

