/*
Напишіть код, який зберігає введені у форму реєстрації дані при перезавантажені
сторінки, якщо форма не була відправлена (submit).
*/
const registerForm = document.querySelector(`#register-form`)
const emailField = registerForm.querySelector(`[name=email]`)
const passwordField = registerForm.querySelector(`[name=password]`)
// emailField.addEventListener("change", function(event){
//     console.log(event);
// })
// emailField.addEventListener("input", function(event){
//     const {name, value} = event.target
//     localStorage.setItem(`register:${name}`, value);
// })
// passwordField.addEventListener("input", function(event){
//     const {name, value} = event.target
//     localStorage.setItem(`register:${name}`, value);
// })
function saveFormLocalStorage(form, key){
    // знайти всі поля  яких є атрибут name
    // повісити на всіх яких ми знайшли функцію обробник
    const fields = form.querySelectorAll(`[name]`)
    fields.forEach(el => {
        el.addEventListener("input", function(event){
            const {name, value} = event.target
            localStorage.setItem(`${key}:${name}`, value);
        })
    });
    return 
}
function getFormValueFromLocalStorage(form, key){
    const fields = form.querySelectorAll(`[name]`)
    fields.forEach(el => {
        const {name} = el
        const value = localStorage.getItem(`${key}:${name}`);
        //як що там не нул то записати як value для event target
        if(value){
            el.value = value
        }
    });
       return 
}
saveFormLocalStorage(registerForm, "register")
getFormValueFromLocalStorage(registerForm, "register")

registerForm.addEventListener("submit", function(event){
    event.preventDefault()
    event.target.reset()
    const fields = event.target.querySelectorAll(`[name]`)
    fields.forEach(el =>{
        const {name} = el
        localStorage.removeItem(`register:${name}`);
    })
})