export function getDayPeriod(sunrise, sunset) {
  const now = new Date();

  // Отримуємо сьогоднішню дату у форматі YYYY-MM-DD
  const today = now.toISOString().split("T")[0];

  // Створюємо об'єкти Date для сходу й заходу сонця
  const sunriseTime = new Date(`${today}T${sunrise}`);
  const sunsetTime = new Date(`${today}T${sunset}`);

  // Порівнюємо з поточним часом
  if (now >= sunriseTime && now < sunsetTime) {
    return "день";
  } else {
    return "ніч";
  }
}
