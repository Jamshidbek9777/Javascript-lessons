const forms = document.forms;
// console.log(form);

// const elements = form.g12.elements;
// console.log(elements);

//Select
// console.log(forms.g12.languages.value);

// let selectLang = forms.g12.languages;
// //Practise
// let greeting = document.querySelector("#greeting");

// const sayHello = (value) => {
//   switch (value) {
//     case "uz":
//       return "Assalomu alaykum";
//     case "rus":
//       return "Privet";
//     case "en":
//       return "Hello";
//   }
// };
// greeting.innerText = sayHello(selectLang.value);
// selectLang.addEventListener("input", ({ target: { value } }) => {
//   greeting.innerText = sayHello(value);
// });

//Input validation

let passwordInput = forms.g12.password;
let message = document.querySelector("#message");

const inputValidation = (value) => {
  if (value.length == 0) {
    return { message: "" };
  } else if (value.length >= 0 && value.length < 8) {
    return { message: "Eng kamida 8 ta parol kiriting", color: "red" };
  } else if (value.length >= 8) {
    return { message: "Parol ishonchli", color: "green" };
  }
};

passwordInput.addEventListener("input", ({ target: { value } }) => {
  message.innerText = inputValidation(value).message;
  message.style.color = inputValidation(value).color;
});

//Submit

forms.g12.addEventListener("submit", (e) => {
  // e.preventDefault();
  forms.g12.action = "https://jsonplaceholder.typicode.com/users";
});
