// Цей файл створює простий сервер за допомогою Express, 
// який обробляє маршрути для реєстрації та входу користувачів.

const express = require('express');
const bcrypt = require('bcrypt');
const userModel = require('./models/userModel');
const path = require('path');
const app = express();
const db = require('./db/database'); // на початку файлу або перед цим маршрутом
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
// Маршрут для реєстрації
app.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      res.status(500).json({ error: 'Помилка при хешуванні пароля' });
    } else {
      userModel.addUser(name, email, hashedPassword, (err, userId) => {
        if (err) {
          res.status(500).json({ error: 'Помилка при додаванні користувача' });
        } else {
          res.status(201).json({ message: 'Користувач зареєстрований', userId });
        }
      });
    }
  });
});

// Маршрут для входу
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM users WHERE email = ?';
  const db = require('./db/database');

  db.get(sql, [email], (err, user) => {
    if (err) {
      return res.status(500).json({ error: 'Помилка при отриманні користувача' });
    }
    if (!user) {
      return res.status(404).json({ error: 'Користувача не знайдено' });
    }

    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Помилка при перевірці пароля' });
      }
      if (result) {
        // 👇 Тут відправляємо name, який відповідає email
        return res.status(200).json({ message: 'Вхід успішний', name: user.name });
      } else {
        return res.status(401).json({ error: 'Невірний пароль' });
      }
    });
  });
});

app.get('/users', (req, res) => {
  userModel.getAllUsers((err, users) => {
    if (err) {
      res.status(500).json({ error: 'Помилка при отриманні користувачів' });
    } else {
      res.json(users);
    }
  });
});


app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;
  console.log('▶ Запит на видалення ID:', userId);

  db.run('DELETE FROM users WHERE id = ?', [userId], function(err) {
    if (err) {
      console.error('❌ Помилка SQLite:', err.message);
      return res.status(500).json({ error: 'Помилка при видаленні користувача' });
    }

    if (this.changes === 0) {
      return res.status(404).json({ error: 'Користувача не знайдено' });
    }

    res.status(200).json({ message: '✅ Користувача видалено' });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущено на http://localhost:${PORT}`);
});