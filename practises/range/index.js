let title = document.querySelector("#title");
let inp = document.querySelector("#inp");
let range = new Range();
inp.addEventListener("input", (e) => {
  const span = document.createElement("span");
  span.style.font = "bold";
  if (e.target.value == title.innerText.slice(0, e.target.value.length)) {
    span.style.color = "green";
  } else span.style.color = "red";
  range.setStart(title.firstChild, 0);
  range.setEnd(title.firstChild, e.target.value.length);
  range.surroundContents(span);
});
