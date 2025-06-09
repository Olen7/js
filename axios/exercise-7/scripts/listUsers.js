// Цей скрипт виводить список усіх зареєстрованих користувачів 
// у консоль у табличному форматі.

const userModel = require('../models/userModel');

userModel.getAllUsers((err, users) => {
  if (err) {
    console.error('Помилка при отриманні користувачів:', err.message);
  } else if (users.length === 0) {
    console.log('Немає зареєстрованих користувачів.');
  } else {
    console.table(users);
  }
});

