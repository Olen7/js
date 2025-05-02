const mainContainer = document.getElementById("main");

const mainText = document.createElement("p");
mainText.className = "main-text";
mainText.textContent = "Some main text";
mainContainer.append(mainText); // .append - метод DOM-елементу, який вставляє інший DOM-елемент у нього в кінці.

const mainTitle = document.createElement("h2"); // mainTitle - посилання на DOM-елемент, який зберігається у пам'яті браузера
// mainTitle.id = "main-title";
mainTitle.setAttribute("id", "main-title");
mainTitle.className = "main-title";
mainTitle.textContent = "Main title";
mainTitle.addEventListener("click", function(){
     console.log("Click to h2");
})
mainContainer.prepend(mainTitle); // .prepend - метод DOM-елементу, який вставляє інший DOM-елемент у нього на початок.

mainContainer.insertAdjacentHTML("beforeend", `<p id="main-footer-text" class="main-text"><a href="#">Some text</a> in footer of main</p>`);
const mainFooterText = document.querySelector("#main-footer-text");
const clickToMainFooterText = function(){
    console.log("Click to main footer text");
};
mainFooterText.addEventListener("click", clickToMainFooterText);
mainFooterText.removeEventListener("click", clickToMainFooterText);
mainFooterText.remove();

const header = document.createElement("header");
header.className = "header";
header.textContent = "Some text";

header.innerHTML = `
    <h1 class="header-title">Welcome to site</h1>
    <h2 class="header-subtitle">We have many interesting things</h2>
`;

// const headerTitle = document.createElement("h1");
// headerTitle.className = "header-title";
// headerTitle.textContent = "Welcome to site";

// const headerSubTitle = document.createElement("h2");
// headerSubTitle.className = "header-subtitle";
// headerSubTitle.textContent = "We have many interesting things";

// header.append(headerTitle);
// header.append(headerSubTitle);

mainContainer.before(header);

const footer = document.createElement("footer");
footer.className = "footer";
footer.textContent = "Site footer";

mainContainer.after(footer);