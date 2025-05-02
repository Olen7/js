// const btnElements = document.querySelectorAll(".btn");
// btnElements.forEach(el => el.addEventListener("click", function(){
//     this.classList.toggle("active");
// }))
const btnList = document.querySelector("#btn-list");
btnList.addEventListener("click", function(event){
    // console.log(event); // event - це об'єкт, що описую подію, що відбулася і дозволяє з нею працювати
    // console.log("event.target", event.target); // event.target - це DOM-елемент, на якому подія реально відбулася
    // console.log("event.currentTarget", event.currentTarget); // event.currentTarget - це DOM-елемент, до якого прив'язана подія
    // console.log("this", this); //this - це DOM-елемент, до якого прив'язана подія
    if(event.target.classList.contains("btn")) {
        event.target.classList.toggle("active");
    }
})