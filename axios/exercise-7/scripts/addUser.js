// Цей скрипт дозволяє додати нового користувача до бази даних.

const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');

const name = 'Niko';
const email = 'niko@example.com';
const password = 'password123';

bcrypt.hash(password, 10, (err, hashedPassword) => {
  if (err) {
    console.error('Помилка при хешуванні пароля:', err.message);
    return;
  }

  userModel.addUser(name, email, hashedPassword, (err, userId) => {
    if (err) {
      console.error('Помилка при додаванні користувача:', err.message);
    } else {
      console.log(`Користувач доданий з ID: ${userId}`);
    }
  });
});

