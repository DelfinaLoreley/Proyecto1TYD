function filtrado(cate){
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
}
