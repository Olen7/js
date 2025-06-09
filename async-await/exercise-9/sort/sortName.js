export function sortName(form){
    const { value } = form;
    if (value === "price") {
       const list = document.querySelectorAll("#item");
       const sorted = [...list].sort((a,b) => a.querySelector('.price').textContent - b.querySelector('.price').textContent)
       const container = document.getElementById("list");
       sorted.forEach((el) => container.appendChild(el));
    }
    if (value === "name") {
        const list = document.querySelectorAll("#item");
        const sorted = [...list].sort((a, b) => a.querySelector(".name").dataset.name.localeCompare(b.querySelector(".name").dataset.name));
        const container = document.getElementById("list");
        sorted.forEach((el) => container.appendChild(el));
    }
}