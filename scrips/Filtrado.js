filtrado()
function filtrado(cate) {
  const elementos = document.querySelectorAll('.item');
  console.log(elementos)
  const ids = Array.from(elementos)
    .filter(el => Number(el.dataset.tipo) === cate)
    .map(el => el.id);
  console.log(ids)
  return ids;
}