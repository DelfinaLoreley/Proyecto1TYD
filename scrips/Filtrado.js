function filtrado(cate, element){
  const contenedor = document.getElementById("contenedorDeSeniales");
  const hijos = contenedor.children;

  for (let hijo of hijos) {
    const tipo = Number(hijo.dataset.tipo);

    if (Number(cate) == 0 || tipo === Number(cate)) {
      hijo.style.display = "block"; // mostrar
    } else {
      hijo.style.display = "none"; // ocultar
    }
  }
  cambio(cate, element)
}
function cambio(num,e){
  const coso = document.getElementById("cosoblanco")
  const img = e.querySelector("img");
  const titulo = e.querySelector("h2");
  const posiciones =[29,105,191,271,353,433,517]
  const items = document.querySelectorAll(".item");

  for (let i = 0; i <= 6; i++) {
    if (i === num) continue;

    const item = items[i];
    if (!item) continue;

    const img = item.querySelector("img");
    const titulo = item.querySelector("h2");
    if (img) {
      img.src = `assets/sin${i}.png`;
      titulo.style.color = "var(--fontColor)";
    }
  }
  coso.style.transform = `translateY(${posiciones[num]}px)`;
  img.src = `assets/color${num}.png`
  titulo.style.color = "red";
}
