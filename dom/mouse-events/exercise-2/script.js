/*
Напишіть код, який працює так: при кліку на пункт меню його фон змінюється на червоний.
Але при цьому, якщо до цього був обраний інший пункт меню, у попереднього вибраного пункту червоний фон змінюється назад на чорний
(щоб не вийшло два червоних пункти меню).
*/
const navbarNavLinkBtn = document.querySelectorAll(".navbar-nav .navbar-nav-link")
const toggleNavLink = function(){
    const prevActiveNavLink = [...navbarNavLinkBtn].find(el => el.classList.contains("active"))
    if (prevActiveNavLink && prevActiveNavLink !== this) {
        prevActiveNavLink.classList.remove("active")  
    }
    if (prevActiveNavLink !== this) {
        this.classList.add("active")
    }
   
}
navbarNavLinkBtn.forEach(el => el.addEventListener('click', toggleNavLink))
console.log(navbarNavLinkBtn);
