/*
Користувач пише у формі рік, місяць та день місяця, і у 
p з id="date-form-result" виводиться відповідь, чи будь день вихідним.
*/
import serializeForm from "./serializeForm.js"
const dateForm = document.querySelector("#date-form")
const dateFormResult = document.querySelector("#date-form-result")
dateForm.addEventListener("submit", function(event){
    event.preventDefault()
    const {year,month,day,} = serializeForm(event.target)
    const date = new Date(year, month - 1, day,)
    dateFormResult.textContent = (date.getDay() === 0 || date.getDay() === 6) ? "Цей день вихідний" : "Цей день не вихідний"
    event.target.reset()
})