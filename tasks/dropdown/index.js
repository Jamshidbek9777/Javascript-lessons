const slider = document.querySelector("#slider");
const slides = document.querySelector("#slides");

slider.onclick = () => {
  if (slides.style.cssText !== `display: none;`) {
    slides.style.cssText = `
        display: none;
        `;
  } else {
    slides.style.cssText = `
    display: block;
    `;
  }
};
