// console.log(menu); // all

// console.log(menu.children); //element
// console.log(menu.childNodes); //Nodeslist
// element faqat ichidagi elementlarni chiqaradi
// Nodelsit textlar va elementlarni hisobga oladi

// id orqali murojaat qilish
// console.log(menu.firstElementChild);
// console.log(menu.lastElementChild);
//item id si orqali
// console.log(firstChild.nextElementSibling);
// console.log(thirdChild.previousElementSibling);

//Agar element yozilmasa firstChildan keyingi bosh text qaytadi
// console.log(firstChild.nextSibling.nextSibling);

//parent elementni chiqarish
// console.log(firstChild.parentElement);

//Selectors
//getElementsByTagName - tag orqali murojaat qilish
// const menu = document.getElementsByName("ul"); //returns array
// console.log(menu);

//getElementsByClassName - class orqali murojaat qilish
// const menu = document.getElementsByClassName("menu"); //returns array
// console.log(menu);

//getElementById - id orqali
// const menu = document.getElementById("menu");
// console.log(menu);

//querySelector - id, class, tag orqali olsa boladi
// const menu = document.querySelector("ul"); //faqatgina 1-ul ni chiqaradi
// const menuall = document.querySelectorAll("ul"); //barcha ul larni chiqaradi
// console.log(menu);

//innerHTML - menu dagi li, class, id, element bosh joy hammasi chiqadi
// const menu = document.querySelector("#menu");
// menu.innerHTML = "Jamshidbek"; // menu ichidagi li larni o'zgartirish
// console.log(menu.innerHTML); //menu ichidagi  li larni chiqaradi, bo'sh joylar bilan

//innerText - menu dagi elementlar chiqadi ya'ni first,second,third
// const menu = document.querySelector("#menu");
// console.log(menu.innerText);

//textContent - elementlar va bosh joylar chiqadi
// const menu = document.querySelector("#menu");
// console.log(menu.textContent);

//OuterHTML - parent, itself, elements,text,space
// const menu = document.querySelector("#menu");
// console.log(menu.outerHTML);

//hidden - yashirilgan yoki yoqligini aniqlaydi
// const menu = document.querySelector("#menu");
// console.log(menu.hidden);

//getAttributes("attributeName")
// const link = document.querySelector("#link");
// console.log(link.getAttribute("href"));

//setAttributes("attributeName", "attributeValue")
// let item = document.querySelector("#first");
// item.setAttribute("class", "new");
// item.setAttribute("style", "color:red");

//removeAttribute
let first = document.querySelector("#first");
first.removeAttribute("class");
