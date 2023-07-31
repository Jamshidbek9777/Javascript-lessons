const title = document.querySelector("#title");
const btn = document.querySelector("#delete");
let range = new Range();
// console.log(title.firstChild);
range.setStart(title.firstChild, 0);
range.setEnd(title.firstChild, 10);
window.getSelection().addRange(range);
// btn.addEventListener("click", () => {
//   range.deleteContents();
// });

const span = document.createElement("span");
span.style.color = "red";
btn.addEventListener("click", () => {
  range.surroundContents(span);
});
