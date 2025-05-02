const sectionTitleElementsOdd = document.querySelectorAll(".section-title:nth-child(odd)");
const sectionTitleElementsEven = document.querySelectorAll(".section-title:nth-child(even)");

sectionTitleElementsOdd.forEach(el => {
    // el.className = el.className.split(" ").filter(name => name !== "dark").join(" ")
    el.classList.remove("dark");
})

sectionTitleElementsEven.forEach(el => {
    // el.className = `${el.className} dark`;
    el.classList.add("dark");
})
const mainTitleElement = document.querySelector(".main-title");
if(mainTitleElement.classList.contains("active")) {
    mainTitleElement.classList.remove("active")
} else {
    mainTitleElement.classList.add("active")
}
// mainTitleElement.classList.toggle("active");

// const newSectionTitle = document.createElement("h2");
// newSectionTitle.textContent = "Section title 5";
// newSectionTitle.className = "section-title";
// [...document.body.querySelectorAll(".section-title")].pop().after(newSectionTitle);