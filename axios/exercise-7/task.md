- [ ] Підключити API
- [x] Показати список на сторінці
 ~~цей текст буде закреслений~~
 
 Звісно! Ось покроковий план:

- [x] Створи HTML-форму для реєстрації з полями: ім'я, email, пароль.

- [x] Додай кнопку «Зареєструватись».

- [x] Створи аналогічну форму для логіну з полями: email і пароль.

    Налаштування сервера:

- [x] Створи простий сервер (наприклад, на Node.js) з маршрутами для реєстрації та логіну.

- [x] Використовуй бібліотеку для роботи з паролями, наприклад bcrypt, щоб хешувати паролі.

- [x] Налаштуй зберігання користувачів у простій базі даних (наприклад, SQLite або MongoDB).

- [x] Відправка даних на сервер через Axios:

- [x] Підключи Axios до свого фронтенду.

- [x] Реалізуй функцію, яка при сабміті форми відправляє POST-запит з даними користувача на сервер.

- [x] Обробка відповіді від сервера:

- [x] На сервері при реєстрації перевіряй, чи немає такого користувача, хешуй пароль і зберігай користувача.

- [ ] При логіні перевіряй відповідність пароля і повертай токен або сесію.

- [ ] Зберігання токенів на клієнті:

- [ ] Зберігай отриманий токен у localStorage або в cookies.

- [ ] Налаштуй перехоплення запитів Axios, щоб додавати токен до заголовків для захищених маршрутів.

- [ ] Перевірка аутентифікації:

- [ ] Додай захист для певних маршрутів на фронтенді (наприклад, доступ до профілю лише для авторизованих користувачів).

- [ ] Перевіряй на бекенді токен і повертай відповідні помилки, якщо токен невалідний або користувач не авторизований.

- [ ] Тестування та вдосконалення:

- [ ] Протестуй реєстрацію та логін, виправ помилки.

- [ ] Додай обробку помилок на фронтенді (наприклад, повідомлення про неправильний пароль чи вже існуючий email).

<!-- http://localhost:3000/users.html
http://localhost:3000/index.html
C:\Users\OlenM\OneDrive\Документи\GitHub\js\axios\exercise-7> npm start -->

