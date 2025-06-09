export function getMoonPhaseIndexFromDateString(dateStr) {
  const date = new Date(`${dateStr}T00:00:00Z`); // Формат для UTC
  const knownNewMoon = new Date(Date.UTC(2000, 0, 6, 18, 14)); // 🌑 Молодик
  const synodicMonth = 29.530588853;

  const diff = date.getTime() - knownNewMoon.getTime();
  const daysSinceNew = diff / (1000 * 60 * 60 * 24);
  const phase = (daysSinceNew % synodicMonth) / synodicMonth;

  return Number(phase.toFixed(4));
}




