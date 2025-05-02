/*
Напишіть універсальний код, який працює так:
 1. При натисканні на пункт меню з текстом "Girls T-shirt" на сторінці залишаються div з класом item та gts.
 2. При натисканні на пункт меню з текстом "Laptops" на сторінці залишаються div з класом item та lap.
 3. При натисканні на пункт меню з текстом "selfie" на сторінці залишаються div з класом item та selfie.
 4. При натисканні на пункт меню з текстом "All" всі картинки повертаються на свої місця.

*/
const btnFilters = document.querySelectorAll('.btn-outline-dark');
const allItems = document.querySelectorAll('.item');

btnFilters.forEach(elFirst => elFirst.addEventListener("click", function () {
    
    //пройтись по всім btnFilter і прибрати active а потім додати active this
    const prevActiveBtn = [...btnFilters].find(el => el.classList.contains('active'))
    if(prevActiveBtn === this) return

    this.classList.add("active")
    prevActiveBtn.classList.remove("active")

    // const {filter} = elFirst.dataset
    // if (filter === "*") {
    //     // Якщо вибрано "All", показуємо всі елементи
    //   return allItems.forEach(item => item.classList.remove("display-no-active"));
    // } 
    //     // Спочатку ховаємо всі
    //     allItems.forEach(item => item.classList.add("display-no-active"));
    //     // Показуємо тільки ті, що відповідають вибраному класу
    //     const normalizedFilter = filter.slice(1);
    //     [...allItems].filter(el => el.classList.contains(normalizedFilter)).forEach(item =>  item.classList.remove("display-no-active"));
    
    const {filter: cssSelector} = elFirst.dataset;
    // [...allItems].filter(el => !el.matches(`${cssSelector}.item`)).forEach(el => el.classList.add("display-no-active"))
    allItems.forEach(item => item.classList.add("display-no-active"));
    [...allItems].filter(el => el.matches(`${cssSelector}.item`)).forEach(el => el.classList.remove("display-no-active"))//matches повертає тру як що елемент відповідає селектору
    }))
