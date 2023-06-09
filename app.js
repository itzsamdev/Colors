let index = 0;
var colors = ["yellow", "red", "green", "purple", "orange", "brown"];

function changeColor() {
  const obj = document.getElementsByTagName("body")[0];
  obj.style.background = colors[index++];

  if (index > colors.length - 1) {
    index = 0;
  }
}
