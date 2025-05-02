// const titleEl = document.getElementById("title");
// titleEl.style.color = "red";
// titleEl.style.fontSize = "24px";
// const titleEl = document.querySelector("#title");
// console.log(titleEl);
// const listElements = document.querySelectorAll(".list-item");
// const listElements = document.querySelectorAll(".list li");
// console.log(listElements);
const listElements = document.getElementsByClassName("list-item"); // повертає HTMLCollection - динамічний псевдомасив (без методів) з властиввістью length
console.log(listElements);
// console.log(listElements.length);
for(const elem of listElements) {
    elem.style.color = "red";
}
// [...listElements].forEach(elem => elem.style.color = "red");
const listEl = document.querySelector("#list");
listEl.style.listStyle = "none";
const listElements2 = listEl.querySelectorAll(".list-item"); // повертає NodeList - статичний псевдомасив з єдиним методом forEach та властивістью length
console.log(listElements2);
listElements2.forEach(elem => elem.style.fontSize = "18px");
document.querySelector("#list").insertAdjacentHTML("beforeend", `<li class="list-item">Item 6</li>`);
console.log(listElements);
console.log(listElements2);
// const newListElement = document.querySelector("#list li:last-child");
const newListElement = document.querySelector("#list .list-item:last-child");
newListElement.style.color = "red";
newListElement.style.fontSize = "18px";
// newListElement.style["font-size"] = "18px";

