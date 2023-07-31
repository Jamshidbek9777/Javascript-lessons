import { data } from "./mock.js";
// const box = document.createElement("div");
// box.innerHTML = "<a href='#'>Link</a>";

// //Inserting
// const container = document.querySelector("#container");
// container.append(box);
// const container = document.querySelector("#container")
// container.style.cssText=`
//     background: lightblue;
//     border-radius: 10px;
//     margin:5px;
//     margin-bottom: 15px;
//     padding: 10px;
//     overflow:auto;
//     height: 150px;
// `
// const button =  document.querySelector("#button");
// const initialheight= container.clientHeight
// button.innerText ="show more"
// button.onclick =()=>{
//     if(container.clientHeight!==container.scrollHeight){
//         container.style.height = `${container.scrollHeight}px`
//         button.innerText = "show less"
//     } else {
//         container.style.height = `${initialheight}px`
//         button.innerText = "show more"
//     }
// }
// console.log(data);

//Crud
const body = document.querySelector("#body");
const list = document.createElement("div");

const displayData = (data) => {
  list.innerHTML = "";
  data.map((user) => {
    const userElement = document.createElement("h3");
    const onDelete = (data, id) => {
      let result = [];
      result = data.filter((user) => {
        return user.id !== id;
      });
      displayData(result);
    };
    const button = document.createElement("button");
    button.innerText = "delete";
    button.onclick = () => onDelete(data, user.id);

    userElement.innerText = `${user.id}. ${user.fullname} `;
    userElement.append(button);
    list.append(userElement);
  });
};
displayData(data);
body.append(list);

// Sorting

const sortButton = document.querySelector("#sort");

const sort = (data) => {
  let res = [];
  res = data.sort((a, b) => {
    return a.fullname.localeCompare(b.fullname);
  });
  displayData(res);
};
sortButton.onclick = () => sort(data);

// Search
const searchInput = document.querySelector("#searchInput")
searchInput.oninput=({target:{value}})=>{
  value= value.toLocaleLowerCase()
  let res=[]
  res= data.filter((user)=>{
    return user.fullname.toLocaleLowerCase().includes(value)
  })
  displayData(res)
}

//Add
