// Цей файл містить функції для взаємодії з таблицею users, 
// такі як додавання нового користувача та отримання списку 
// всіх користувачів.

const db = require('../db/database');

// Додавання користувача
function addUser(name, email, hashedPassword, callback) {
  const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  db.run(sql, [name, email, hashedPassword], function (err) {
    if (err) {
      callback(err);
    } else {
      callback(null, this.lastID);
    }
  });
}

// Отримати всіх користувачів
function getAllUsers(callback) {
  const sql = 'SELECT * FROM users';
  db.all(sql, [], (err, rows) => {
    if (err) callback(err);
    else callback(null, rows);
  });
}

module.exports = {
  addUser,
  getAllUsers
};
