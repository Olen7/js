const clickCountElement = document.querySelector("#click-count");

const increaseBtn = document.querySelector("#increase-btn");
const decreaseBtn = document.querySelector("#decrease-btn");
let count = 0;
increaseBtn.addEventListener("click", function() {
    count += 1;
    clickCountElement.textContent = count;
});

decreaseBtn.addEventListener("click", function(){
    count -= 1;
    clickCountElement.textContent = count;
})

const mainTextElements = document.querySelectorAll(".js-main-text");
// const makeTextBold = function(){
//     this.style.fontWeight = "bold";
// }
const toggleTextBold = (event) => { // event - об'єкт, який описую подію, що сталась
    // console.log(event.target); // event.target - об'єкт, на якому фактично сталася подія
    // console.log(event.currentTarget); // event.currentTarget - об'єкт,до якого прив'язана подія
    // this.style.fontWeight = "bold"; // this не в стрілочних функціях - об'єкт,до якого прив'язана подія
    const {style} = event.currentTarget; // const style = event.currentTarget.style;
    if(style.fontWeight === "bold") {
        return style.fontWeight = "normal";
    }
    style.fontWeight = "bold";
}

mainTextElements.forEach(element => element.addEventListener("click", toggleTextBold));