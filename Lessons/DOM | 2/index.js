import mockData from "./mock.js";
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
let data =mockData
const body = document.querySelector("#body");
const list = document.createElement("div");

const displayData = (info) => {
  list.innerHTML = "";
  info.map((user) => {
    const userElement = document.createElement("h3");
    const onDelete = (data, id) => {
      data = info.filter((user) => {
        return user.id !== id;
      });
      
      displayData(data);
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

const sort = () => {
  
  data = data.sort((a, b) => {
    return a.fullname.localeCompare(b.fullname);
  });
  displayData(data);
};
sortButton.onclick = () => sort(data);

// Search
const searchInput = document.querySelector("#searchInput");
searchInput.oninput = ({ target: { value } }) => {
  value = value.toLocaleLowerCase();
  let res = [];
  res = data.filter((user) => {
    return user.fullname.toLocaleLowerCase().includes(value);
  });
  displayData(res);
};

//Add

const addButton = document.querySelector("#add");
const addInput = document.querySelector("#addInput");
let newName = "";
addInput.oninput = ({ target: { value } }) => {
  newName = value;
};
const addUser = () => {
 
  data = [...data, { id: data.length + 1, fullname: newName }];
  displayData(data);
  addInput.value = "";
};
addButton.onclick = () => addUser();
