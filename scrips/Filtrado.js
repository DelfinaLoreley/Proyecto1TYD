const menuo = document.getElementById("menu")
setInterval(() => {
  if (window.innerWidth > 850) {
    menuo.classList.remove("none") 
  }
}, 1000);
function mosocu(){
  const menu = document.getElementById("menu")
  menu.classList.toggle("mostrar")
  menu.classList.toggle("none")
}

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
  const posicionesCelular = [19,109,195,280,363,446,530]
  const items = document.querySelectorAll(".item");
  const ayuda = document.getElementById("ayuda")
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
  if (window.innerWidth < 851) {
    coso.style.transform = `translateY(${posicionesCelular[num]}px)`;
    mosocu()
    ayuda.src = `assets/color${num}.png`
  }
  else{
    coso.style.transform = `translateY(${posiciones[num]}px)`;
  }
  
  img.src = `assets/color${num}.png`
  titulo.style.color = "red";
}
