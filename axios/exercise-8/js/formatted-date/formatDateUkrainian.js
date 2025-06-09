export function formatDateUkrainian(dateStr) {
  const months = [
    "січня", "лютого", "березня", "квітня", "травня", "червня",
    "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"
  ];
  const [year, month, day] = dateStr.split("-");
  const monthName = months[Number(month) - 1];

  return `${Number(day)} ${monthName} ${year}`;
}
