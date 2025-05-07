export function formatDateVariants(isoString) {
    const date = new Date(isoString);
    if (isNaN(date)) {
      return { error: "Invalid ISO date string" };
    }
  
    const formats = {
      ukLong: new Intl.DateTimeFormat("uk-UA", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(date),
  
      ukShort: new Intl.DateTimeFormat("uk-UA").format(date),
  
      dot: new Intl.DateTimeFormat("uk-UA", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
        .format(date)
        .replace(/\//g, "."), // у Chrome українська дата — 13.04.2025, але Firefox може дати "13/04/2025"
  
      datetime: new Intl.DateTimeFormat("uk-UA", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }).format(date),
  
      iso: date.toISOString(),
    };
  
    return formats;
  }
  