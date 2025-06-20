
/*
Напишіть код, який працює так: 
1. Після завантаження сторінки робиться GET-запит на адресу "https://zenquotes-proxy.onrender.com/api/random". У відповідь 
повертається об'єкт виду:
{
"q": "Our industry does not respect tradition. What it respects is innovation.",
"a": "Satya Nadella",
"h": "<blockquote>&ldquo;Our industry does not respect tradition. What it respects is innovation.&rdquo; &mdash; <footer>Satya Nadella</footer></blockquote>"
}
Треба вивести поле "q" в p, а під ним - поле "a". Все це в div з id="random-quote".
2. При натискані на кнопку з id="get-random-quote" треба знову робити запит на бекенд і відмальовувати новую випадковую цитату.
3. Зробіть код максимально модульним.
*/
import {getRandomQuote} from "../api/quote-api.js"
import {createQuoteMarkup} from "../js/createQuoteMarkup.js"
const randomQuote = document.querySelector("#random-quote");
const getRandomQuoteBtn = document.querySelector("#get-random-quote");

getRandomQuote().then(({data, error}) => {
    randomQuote.innerHTML = createQuoteMarkup(data)
   
});
getRandomQuoteBtn.addEventListener("click", function (event) {
    getRandomQuote().then(({data, error}) => {
        randomQuote.innerHTML = createQuoteMarkup(data)
});
});
