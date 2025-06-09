import { formatDateUkrainian } from "./js/formatted-date/formatDateUkrainian.js";
import { getDayPeriod} from "./js/sun-period/getDayPeriod.js";
import { fetchWeatherData } from "./js/api/fetchWeatherData.js";
import { getMoonPhaseIconPath } from "./js/moon/getMoonPhaseIconPath.js";
import {getMoonPhaseIndexFromDateString} from "./js/moon/getMoonPhaseIndex.js"
import {getWeatherDescription} from "./js/weather-utils/getWeatherDescription.js"

const weatherCard = document.querySelector(".weather-card");
fetchWeatherData().then(({ data, error }) => {
  if (error || !data) {
    weatherCard.innerHTML = `
      <div class="weather-error">
        <div class="error-icon">⚠️</div>
        <p class="error-title">Не вдалося завантажити погоду</p>
        <p class="error-subtitle">Перевірте зʼєднання або спробуйте пізніше</p>
      </div>
    `;
    console.error("Помилка погоди:", error);
    return;
  }
  const {
    temperature,
    apparentTemperature,
    sunrise,
    sunset,
    temperature_2m_max,
    temperature_2m_min,
    time,
    body,
    weatherCode,
  } = data;

  const indexMoon = getMoonPhaseIndexFromDateString(time)
  const moonIconBasePath = getMoonPhaseIconPath(indexMoon);
  const weatherCodeDescriptions = getWeatherDescription(weatherCode)
  
  console.log(indexMoon);
  // const result = getDayPeriod(sunrise, sunset)
  weatherCard.insertAdjacentHTML(
    "beforeend",
    `
    <div class="weather-location">ПРАГА, ЧЕХИЯ</div>
<div class="weather-main">
  <div class="weather-temp">${temperature}°</div>
  <div class="weather-info">
    <div class="weather-status">${weatherCodeDescriptions}</div>
    <div class="weather-feels">Відчувається як ${apparentTemperature}°</div>
  </div>
  <div class="wi-icon"><img src="./svg/day/clear-day.svg" alt=""></div>
</div>
<div class="weather-details">
  День ${temperature_2m_max[0]}° <span class="dot">•</span> Ніч ${
      temperature_2m_min[0]
    }°
</div>
<div class="weather-sun">
  <p>Схід сонця: ${sunrise}</p>
  <p>Захід сонця: ${sunset}</p>
</div>

<div class="weather-date">
  <p>Сьогодні: ${formatDateUkrainian(time)} </p>
</div>
 
    `
  );
  weatherCard.insertAdjacentHTML("beforebegin",`
    <div class="weather-moon">
    <img class="moon-icon" src="${moonIconBasePath}" alt="Фаза Місяця">
  </div>
    `)
});

const weatherCodeDescriptions = {
  0: "Ясно",
  1: "Переважно ясно",
  2: "Частково хмарно",
  3: "Хмарно",
  45: "Туман",
  48: "Іній з туманом",
  51: "Легка мряка",
  53: "Помірна мряка",
  55: "Сильна мряка",
  56: "Легка мряка з морозом",
  57: "Сильна мряка з морозом",
  61: "Легкий дощ",
  63: "Помірний дощ",
  65: "Сильний дощ",
  66: "Легкий дощ з морозом",
  67: "Сильний дощ з морозом",
  71: "Легкий сніг",
  73: "Помірний сніг",
  75: "Сильний сніг",
  80: "Легкі зливи",
  81: "Помірні зливи",
  82: "Сильні зливи",
  85: "Легкий снігопад",
  86: "Сильний снігопад",
  96: "Гроза з легким градом",
  99: "Гроза з сильним градом",
};

/*<!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<defs>
<linearGradient id="a" x1="26.76" x2="41.62" y1="20.91" y2="46.65" gradientUnits="userSpaceOnUse">
<stop offset="0" stop-color="#86c3db"/>
<stop offset=".45" stop-color="#86c3db"/>
<stop offset="1" stop-color="#5eafcf"/>
</linearGradient>
</defs>
<circle cx="32" cy="32" r="16.5" fill="none" stroke="#e5e7eb" stroke-dasharray="1.99 5.98" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" transform="rotate(-45 32.002 31.994)"/><path fill="url(#a)" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M39.12 16a18.38 18.38 0 00-2.38-.86l.08.06h0c11.54 12.1 2.63 32.1-14.07 31.62h-.1A18.21 18.21 0 0024.88 48a17.5 17.5 0 1014.24-32z"/></svg> -->*/
// const weatherCodeDescriptions = {
//   0: "Ясно",
//   1: "Переважно ясно",
//   2: "Частково хмарно",
//   3: "Хмарно",
//   45: "Туман",
//   48: "Іній з туманом",
//   51: "Легка мряка",
//   53: "Помірна мряка",
//   55: "Сильна мряка",
//   56: "Легка мряка з морозом",
//   57: "Сильна мряка з морозом",
//   61: "Легкий дощ",
//   63: "Помірний дощ",
//   65: "Сильний дощ",
//   66: "Легкий дощ з морозом",
//   67: "Сильний дощ з морозом",
//   71: "Легкий сніг",
//   73: "Помірний сніг",
//   75: "Сильний сніг",
//   77: "Сніжна крупа",
//   80: "Легкі зливи",
//   81: "Помірні зливи",
//   82: "Сильні зливи",
//   85: "Легкий снігопад",
//   86: "Сильний снігопад",
//   95: "Гроза",
//   96: "Гроза з легким градом",
//   99: "Гроза з сильним градом",
// };
/*
from collections import defaultdict
import pandas as pd

# Вихідні продукти, згруповані по стравам (назва, кількість, одиниця, категорія)
products = [
    # Рагу
    ("Яловичина", 1, "кг", "Мʼясо"),
    ("Червона квасоля", 400, "г", "Бобові"),
    ("Батат", 3, "шт", "Овочі"),
    ("Картопля", 7, "шт", "Овочі"),
    ("Морква", 3, "шт", "Овочі"),
    ("Селера", 2, "стебла", "Овочі"),
    ("Цибуля", 2, "шт", "Овочі"),
    ("Зелень: укроп", 1, "пучок", "Зелень"),
    ("Зелень: петрушка", 1, "пучок", "Зелень"),
    ("Зелень: кінза", 1, "пучок", "Зелень"),
    ("Томати у власному соку", 1, "банка", "Консервація"),
    ("Паприка", 1, "шт", "Овочі"),
    ("Куркума", 1, "пачка", "Спеції"),
    ("Імбир", 1, "корінь", "Спеції"),
    ("Лавровий лист", 1, "пачка", "Спеції"),

    # Ветчина з філе
    ("Філе куряче", 1, "кг", "Мʼясо"),
    ("Часник", 1, "голівка", "Овочі"),
    ("Сіль", 1, "пачка", "Спеції"),
    ("Перець чорний", 1, "пачка", "Спеції"),
    ("Розмарин", 1, "пачка", "Спеції"),

    # Банановий хліб
    ("Банани", 4, "шт", "Фрукти"),
    ("Яйця", 4, "шт", "Молочні/яйця"),
    ("Мигдальна мука", 100, "г", "Бакалія"),
    ("Кориця", 1, "пачка", "Спеції"),
    ("Ваніль", 1, "пачка", "Спеції"),
    ("Горіхи", 100, "г", "Бакалія"),

    # Сирники
    ("Сир 5%", 250, "г", "Молочні/яйця"),
    ("Яйце", 1, "шт", "Молочні/яйця"),
    ("Кокосова мука", 50, "г", "Бакалія"),
    ("Стевія", 1, "пачка", "Бакалія"),

    # Салат 4.1
    ("Руккола", 1, "пучок", "Зелень"),
    ("Шпинат", 1, "пучок", "Зелень"),
    ("Авокадо", 1, "шт", "Фрукти"),
    ("Яйце", 2, "шт", "Молочні/яйця"),
    ("Кунжут", 1, "пачка", "Бакалія"),
    ("Оливкова олія", 1, "пляшка", "Олія"),
    ("Лимон", 1, "шт", "Фрукти"),

    # Салат 4.2
    ("Буряк", 2, "шт", "Овочі"),
    ("Волоські горіхи", 100, "г", "Бакалія"),
    ("Сир твердий або козячий", 150, "г", "Молочні/яйця"),
    ("Гірчиця", 1, "банка", "Бакалія"),
    ("Бальзамічний оцет", 1, "пляшка", "Бакалія"),

    # Супи-пюре
    ("Броколі", 1, "шт", "Овочі"),
    ("Гарбуз", 1, "кг", "Овочі"),

    # Сніданки
    ("Шинка (або залишки філе)", 200, "г", "Мʼясо"),
    ("Сир твердий", 100, "г", "Молочні/яйця"),

    # Чіа-пудинг
    ("Насіння чіа", 100, "г", "Бакалія"),
    ("Кокосове молоко", 1, "банка", "Молочні рослинні"),
    ("Ягоди (малина, чорниця)", 200, "г", "Фрукти"),
]

# Агрегуємо за назвою
aggregate = defaultdict(lambda: [0, "", ""])
for name, qty, unit, category in products:
    aggregate[name][0] += qty
    aggregate[name][1] = unit
    aggregate[name][2] = category

# Конвертуємо в таблицю
df = pd.DataFrame([{"Назва": name, "Кількість": qty, "Одиниця": unit, "Категорія": category}
                   for name, (qty, unit, category) in aggregate.items()])

# Відсортуємо для зручності
df = df.sort_values(by=["Категорія", "Назва"])
import ace_tools as tools; tools.display_dataframe_to_user(name="Список закупів", dataframe=df)
*/
