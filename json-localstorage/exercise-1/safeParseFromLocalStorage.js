function safeParseFromLocalStorage(key, defaultValue = null) {
    const raw = localStorage.getItem(key); 
    if (raw === null) {
      console.warn(`Ключ "${key}" не знайдено в localStorage.`);
      return defaultValue;
    }
  
    try {
      const parsed = JSON.parse(raw);
  
      if (typeof parsed !== 'object' || parsed === null) {
        console.warn(`Ключ "${key}" має неправильний тип (не об'єкт/масив):`, parsed);
        return defaultValue;
      }
  
      return parsed;
    } catch (e) {
      console.error(`Помилка JSON.parse для ключа "${key}":`, e);
      return defaultValue;
    }
  }
  
  export default safeParseFromLocalStorage;