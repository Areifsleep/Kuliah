const button = document.getElementById("hoverButton");
const message = document.getElementById("hoverMessage");

button.addEventListener("mouseover", function () {
  message.textContent = "Mouse is over the button!";
});

button.addEventListener("mouseout", function () {
  message.textContent = "";
});
