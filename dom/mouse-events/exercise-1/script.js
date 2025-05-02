/*
Зробіть так, щоб при першому кліку на кнопку її фон змінювався на червоний, колір тексту — на білий, а текст усередині кнопки — на "Eat me!".
При повторному кліку все поверталося назад.
*/
const firstButton = document.querySelector('#first-button')
firstButton.addEventListener("click", function(event){
    // if (this.textContent === "Eat me!") {
    //     this.style.backgroundColor = "white";
    //     this.style.color = "red";
    //     this.textContent = "Click me!";
    //     return
    // }
    //     this.style.backgroundColor = "red";
    //     this.style.color = "white";
    //     this.textContent = "Eat me!";
    // const {style} = event.currentTarget;
    // if (event.currentTarget.textContent === "Eat me!") {
    //     style.backgroundColor = "white";
    //     style.color = "red";
    //     event.currentTarget.textContent = "Click me!";
    //     return
    // }
    // style.backgroundColor = "red";
    // style.color = "white";
    // event.currentTarget.textContent = "Eat me!";
    // if (this.classList.contains("active")) {
    //    return this.classList.remove("active")
    // }
    // this.classList.add("active")
    this.classList.toggle("active")
    this.textContent = this.textContent !== "Eat me!" ? "Eat me!" : "Click me!"
})

console.log();
