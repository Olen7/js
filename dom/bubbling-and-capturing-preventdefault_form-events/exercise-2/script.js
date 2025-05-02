/*
Напишіть код, який працює так:
1. при натисканні на кнопку з id="myModal" на сторінці з'являється спливаюче вікно,
селектор якого зберігається у атрибуті "data-target" кнопки.
2. При натисканні на хрестик всередині або на сіру область за межами вікна – вікно закривається.
*/
const btnElements = document.querySelectorAll(".btn.btn-modal")
btnElements.forEach(el => {
    el.addEventListener("click", (event) =>{
        const {target} = event.target.dataset
        const modalTargetElement = document.querySelector(target)
        modalTargetElement.classList.add("active")
    })
    
})

// const modalCloseElements = document.querySelectorAll(".modal .close")
// modalCloseElements.forEach(el => el.addEventListener("click", (event) =>{
//     event.target.closest(".modal.active")?.classList.remove("active")
// }))

const modalElements = document.querySelectorAll(".modal")
modalElements.forEach(el => el.addEventListener("click", (event) => {
    // if (event.target === event.currentTarget) {
    //   return   event.target.classList.remove("active")
    // }
    console.log(event.target);
    if (event.target.classList.contains("modal") || event.target.classList.contains("close")) {
           event.currentTarget.classList.remove("active")
    }

}))


