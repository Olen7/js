/*
Напишіть код, який при першому для користувача завантаження сторінки
 показує спливаюче вікно з id="myModal" через 2 секунди
 після завантаження сторінки та ховає його через 3 секунди після демонстрації.
*/
const isFirstVisit = Boolean(localStorage.getItem("firstVisit"));

if (!isFirstVisit) {
  const myModal = document.getElementById("myModal");
  localStorage.setItem("firstVisit", true);

  setTimeout(() => {
    myModal.classList.add("show");
    setTimeout(() => myModal.classList.remove("show"), 3000);
  }, 2000);
}
