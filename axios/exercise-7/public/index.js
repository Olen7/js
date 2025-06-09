import {showModal} from './showModal.js'

document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
    };
console.log(data);
    axios.post('/register', data)
      .then(response => {
        console.log('Користувача зареєстровано:', response.data);
        this.reset()
        window.location.href = '/dashboard.html';
      })
      .catch(error => {
        console.error('Помилка при реєстрації:', error);
      });
      showModal('✅ Реєстрація успішна!');
  });
document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = {
    email: formData.get('email'),
    password: formData.get('password')
  }

  axios.post('/login', data)
    .then(response => {
      if (response.data.message === 'Вхід успішний') {
        // ✅ Зберігаємо ім’я, яке залежить від email
        console.log('Отримано ім’я:', data.email);
        localStorage.setItem('userEmail', data.email);
        window.location.href = '/dashboard.html';
      }
    })
    .catch(error => {
      const msg = error.response?.data?.error || '❌ Помилка входу';
      showModal(msg, false);
    });
});
