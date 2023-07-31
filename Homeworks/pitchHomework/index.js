const pitch = document.querySelector("#pitch");
const ball = document.querySelector("#ball");

pitch.addEventListener("click", (e) => {
  console.log(e.offsetX, "x");
  console.log(e.offsetY, "y");
  ball.style.cssText = `
  top: ${e.offsetY - 25}px;
  left: ${e.offsetX - 25}px;
  `;
});
