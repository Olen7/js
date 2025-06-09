// Цей файл відповідає за підключення до бази даних SQLite 
// та створення таблиці users, якщо вона ще не існує.

const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'users.db'); // створюється в папці db
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Помилка при підключенні до бази даних:', err.message);
  } else {
    console.log('✅ Підключено до бази даних SQLite.');
  }
});

// Створення таблиці, якщо не існує
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL
    )
  `, (err) => {
    if (err) {
      console.error('Помилка при створенні таблиці users:', err.message);
    } else {
      console.log('✅ Таблиця users готова.');
    }
  });
});

module.exports = db;



