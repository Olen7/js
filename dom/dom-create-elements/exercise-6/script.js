/*
Перепишіть код попередньої задачі так, щоб весь список відмальовувався за допомогою
Javascript при завантаженні сторінки.
*/
import { arr } from "./pesonesGirlGenius.js";
import { pathToPhotoInArray } from "./pathToPhoto.js";
//console.log(document.body);

const liArrGirlGenius = arr.map(el => `
    <li class="list-item" >
        ${el}
        <button class="delete-btn">Видалити</button>
        <div class="fill-overlay"></div>
    </li>`
);

document.body.insertAdjacentHTML("afterbegin", `
    <h1>Персонажі Girl Genius</h1>
    <ul>
       ${liArrGirlGenius.join("")}
    </ul>`);

const deleteBtnElements = document.querySelectorAll(".delete-btn");
// фото секція 
const listItems = document.querySelectorAll(".list-item");
listItems.forEach((el, index) => {
    el.dataset.image = pathToPhotoInArray[index];
    console.log(el.dataset.image);
});
listItems.forEach(el => el.addEventListener("click", function(){
    console.log(this);
    const imageWindow = document.getElementById("image-window");
    const imageUrl = this.getAttribute("data-image");
    imageWindow.style.backgroundImage = `url(${imageUrl})`;
}))
deleteBtnElements.forEach(btn => {
    btn.addEventListener("click", function () {
        const li = this.closest("li");

        li.classList.add("fill-active"); // Додаємо клас для зміни кольору

        setTimeout(() => {
            li.remove();
        }, 1500); // Час має збігатися з transition у CSS (1.5s)
    });
});

