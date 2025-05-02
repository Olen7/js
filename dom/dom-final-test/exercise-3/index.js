/*
Напишіть список покупок із формою додавання списку покупок.
Зліва у вас має бути блок із формою додавання нової покупки з такими полями:
- Назва;
- кількість;
- ціна;
- термінова покупка (чек-бокс);
- тип покупки (список, що випадає, з такими варіантами: побутова хімія, продукти, інше);


Справа у вас має бути список доданих покупок. Над списком
Необхідно виводити загальну кількість покупок та його ціну.
При натисканні на кожний пункт його можна перечернути - тобто він вже куплений
(Тоді його кількість і ціна забираються зі списку). При повторному натисканні він
повертається до списку.

Розмітку можете вивести за допомогою JS або одразу написати в index.html-файлі.
*/
import serializeForm from "./serializeForm.js";
document.body.insertAdjacentHTML(
  "beforeend",
  `
    <form action="" id="form">
    <div>
        <label for="title">Назва</label>
        <input type="text" id="title" name="title" placeholder="Назва" />
    </div>
    <div>
        <label for="count">Кількість</label>
        <input type="number" id="count" name="count" placeholder="Кількість" />
    </div>
    <div>
        <label for="price">Ціна</label>
        <input type="number" id="price" name="price" placeholder="Ціна" />
    </div>
    <div>
        <label for="urgency">Терміновість</label>
        <input type="checkbox" id="urgency" name="urgency">
    </div>
    <div>
        <label for="type">Type</label>
        <select name="type" id="type">
            <option value="побутова хімія">побутова хімія</option>
            <option value="продукти">продукти</option>
            <option value="інше">інше</option>
        </select>
      </div>
    <button>Add</button> 
    </form>
     <div id="calculate-display">
       <p>Сума: <span id='span-price'>0</span></p>
       <p>Загальна кількість покупок:<span id='span-counts'>0</span></p>
       <ul id="product-list"></ul>
    </div>
    `
);
const formElement = document.querySelector("#form");
const productList = document.querySelector("#product-list");
const spanPrice = document.querySelector("#span-price")
const spanCounts = document.querySelector("#span-counts")
const arr = []
productList.addEventListener("click", event =>{

    if (event.target.classList.contains("product-list-item")) {
      const index =  [...productList.querySelectorAll("li")].findIndex(item => item === event.target)
      const {count, price} = arr[index]
      const prevPrice = Number(spanPrice.textContent)
      const prevCounts = Number(spanCounts.textContent)
      if(!event.target.classList.contains("done")){   
        spanPrice.textContent = prevPrice - price * count;
        spanCounts.textContent = prevCounts - Number(count);
      }else{
        spanPrice.textContent = prevPrice + price * count;
        spanCounts.textContent = prevCounts + Number(count);
      }
        event.target.classList.toggle('done')
    }
})
formElement.addEventListener("submit", function (event) {
    

  event.preventDefault();
  const data = serializeForm(this);
  arr.push(data)
  const prevPrice = Number(spanPrice.textContent)
  spanPrice.textContent = prevPrice + data.price * data.count;

  const prevCounts = Number(spanCounts.textContent)

  spanCounts.textContent = prevCounts + Number(data.count);

console.log(spanCounts);
  productList.insertAdjacentHTML(
    "beforeend",`
        <li class="product-list-item">Назава: ${data.title}, Кількість: ${data.count}, Вартість: ${data.price * data.count}, ${data.urgency ? "Термінова покупка" : "Не термінова покупка"}, Тип покупки: ${data.type}</li>`
  );
});


