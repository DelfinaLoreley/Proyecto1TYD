const imagenes = [
  "assets/img2.png",
  "assets/img3.png",
  "assets/img4.png",
  "assets/img5.png",
  "assets/img6.png",
  "assets/img7.png",
  "assets/img8.png",
];

const imgs = document.querySelectorAll(".miImg");

imgs.forEach(img => {
  img.addEventListener("click", () => {

    img.classList.add("animando");

    setTimeout(() => {
      img.classList.remove("animando");
      let i = 0;

      const intervalo = setInterval(() => {
        if (i < imagenes.length) {
          img.src = imagenes[i];
          i++;
        } else {
          clearInterval(intervalo);
          img.classList.add("fade-out");
        }
      }, 130);

    }, 950);

  });
});