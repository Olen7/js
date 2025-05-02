/* Задание:
Напишіть код, який працює так: при натисканні на елемент з класом btn-collapse після нього повинен з'являтися p з текстом,
що зберігається в атрибуті data-info. При повторному натисканні елемент з текстом повинен видалятися.
*/
const btnElements = document.querySelectorAll(".btn.btn-collapse ")
btnElements.forEach(el => el.addEventListener("click", function(){
    const {info} = this.dataset
    // const pElement = document.createElement("p")
    // pElement.textContent = info
    // console.log(this.nextElementSibling); // nextElementSibling знаходить наступний елемент
    if (this.nextElementSibling?.classList.contains("main-text")) {
        return this.nextElementSibling.remove()
    }
    this.insertAdjacentHTML("afterend", `<p class="main-text">${info}</p>`)

    
}))
// перевірити після кнопки чи є елемент
// перевіряю чи є відповідний клас