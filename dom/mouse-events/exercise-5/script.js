 /*
Напишіть код, який працює так:
При кліку на кнопку з id="myBtn" з'являється модальне вікно з id="myModal".
При кліку на хрестик всередині модального вікна воно закривається.
 */

// const myBtnElement = document.querySelector("#myBtn")
// const myModalElement = document.querySelector('#myModal')
// const closeElement = document.querySelector(".modal-content .close")

// function toggleModal(){
//     myModalElement.classList.toggle("active")
// }
// myBtnElement.addEventListener("click",  toggleModal)
// closeElement.addEventListener("click",  toggleModal)

const btnModals = document.querySelectorAll(".js-open-modal")
const closeModal = document.querySelectorAll(".js-close-modal")
btnModals.forEach(el => el.addEventListener("click", function(){
    const {target: modalSelector} = el.dataset
    const modal = document.querySelector(modalSelector)
    modal.classList.add("active")

    //console.log(el.dataset.target);
}))
closeModal.forEach(el => el.addEventListener('click', function(){
    //
    const {target:  modalSelector} = el.dataset
    const modal = document.querySelector(modalSelector)
    modal.classList.remove("active")
}))