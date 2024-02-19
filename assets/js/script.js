function pintar(ele, color = "green") {
  ele.style.backgroundColor = color;
}
let ele = document.getElementById("ele1");
pintar(ele);
ele.addEventListener("click", function () {
  pintar(ele, "yellow");
});
