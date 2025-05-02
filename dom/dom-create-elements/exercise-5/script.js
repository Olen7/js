/*
Напишіть код, який видаляє відповідний li.
*/
const deleteBtnElements = document.querySelectorAll(".delete-btn")
deleteBtnElements.forEach(el => el.addEventListener("click", function(){
    this.closest("li")?.remove()
    //console.log(this.closest("li")); //closest це методод який шукає найближчого батька що відповідає переданому селектору
}))