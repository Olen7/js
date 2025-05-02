 /*
Напишіть код, який працює так:
1. При натисканні на пункт меню до нього додається клас active.
2. В інших пунктів меню цей клас забирається.
Використовуйте спливання подій та e.target
*/
const topMenuElement = document.querySelector('#top-menu')
topMenuElement.addEventListener("click", (e) => {
    console.log(e.currentTarget);
    //1 влоб
    // if (e.target.tagName === "A") {
    //     const navbarNavLink = document.querySelectorAll(".navbar-nav-link")
    //     navbarNavLink.forEach(el => el.classList.remove("active"))
    //     e.target.classList.add("active")    
    // }
    // console.log(e.target.tagName); //e.target.tagName - імя тегу у верхньому регістрі 

    //2 красивіший
    if (e.target.tagName === "A") {
        const prevActiveElement = document.querySelector(".active")
        if(prevActiveElement !== e.target){
            prevActiveElement?.classList.remove("active")
        }
        e.target.classList.add("active")
    }
})

