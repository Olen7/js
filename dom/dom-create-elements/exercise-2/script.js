 /*
Запитайте користувача через prompt елемент списку з яким текстом 
(Товстий котик/Корги/Ніка/Маленький Йода) тут не потрібен. Після цього видаліть його.
 */
const inputRemove = prompt('Виберіть що з списку Ви хочете прибрати (Товстий котик/Корги/Ніка/Маленький Йода)')
const list = document.querySelectorAll("#list li")
const elList = [...list].find(el => el.textContent === inputRemove)

elList?.remove()
console.log(list);
