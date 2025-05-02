/*
Напишіть скрипт, який при наведенні на елемент із класом tooltip створює внутрішню спливаючу підказку -
span із класом tooltip-text. А коли курсор йде з елемента – підказка пропадає.
Приклад його роботи можна переглянути тут https: //www.w3schools.com/howto/tryit.asp?filename=tryhow_css_tooltip
*/
const tooltipElement = document.querySelectorAll(".tooltip")
tooltipElement.forEach(el => el.addEventListener("mouseover", function(){
    const {tooltip} = this.dataset
       this.insertAdjacentHTML("beforeend", `<span class = "tooltip-text">${tooltip}</span>`)
}))
tooltipElement.forEach(el => el.addEventListener("mouseout", function(){
      this.querySelector(".tooltip-text")?.remove()
}))

