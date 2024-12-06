const input = document.getElementById("keyInput");
const display = document.getElementById("keyDisplay");

input.addEventListener("keydown", function (event) {
  display.textContent = `You pressed: ${event.key}`;
});
