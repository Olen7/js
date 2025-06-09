const latitude = 50.0428;
const longitude = 14.5012;
const baseURL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=sunset,sunrise,temperature_2m_min,temperature_2m_max&hourly=temperature_2m,weather_code&current=temperature_2m,apparent_temperature,is_day,weather_code&timezone=auto`;
export async function fetchWeatherData() {
  try {
    const response = await axios.get(baseURL);
    const body = response.data;
    const temperature = response.data.current.temperature_2m;
    const sunrise = response.data.daily.sunrise[0].split("T")[1];
    const sunset = response.data.daily.sunset[0].split("T")[1];
    const temperature_2m_max = response.data.daily.temperature_2m_max;
    const temperature_2m_min = response.data.daily.temperature_2m_min;
    const time = response.data.daily.time[0];
    const weatherCode = response.data.hourly.weather_code[0]

    const apparentTemperature = response.data.current.apparent_temperature;
    return {
      data: {
        body, // повна відповідь
        temperature,
        apparentTemperature,
        sunrise,
        sunset,
        temperature_2m_max,
        temperature_2m_min,
        time,
        weatherCode,
      },
    };
  } catch (error) {
    return { error };
  }
}
