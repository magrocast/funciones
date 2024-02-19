let azul = document.getElementById("azul");
let rojo = document.getElementById("rojo");
let verde = document.getElementById("verde");
let amarillo = document.getElementById("amarillo");

azul.addEventListener("click", function () {
  cambiarColor(azul);
});

rojo.addEventListener("click", function () {
  cambiarColor(rojo);
});

verde.addEventListener("click", function () {
  cambiarColor(verde);
});

amarillo.addEventListener("click", function () {
  cambiarColor(amarillo);
});

function cambiarColor(elemento) {
  elemento.style.backgroundColor = "black";
}
