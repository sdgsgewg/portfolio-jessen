export function formatProjectDate(date: string, locale: string): string {
  const [year, month] = date.split("-").map(Number);

  const formatted = new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric",
  }).format(new Date(year, month - 1, 1));

  return formatted;
}

export function formatProjectDuration(
  startDate?: string,
  endDate?: string,
  locale: string = "en",
): string | null {
  if (!startDate) return null;

  const start = formatProjectDate(startDate, locale);

  if (!endDate) {
    return start;
  }

  const end = formatProjectDate(endDate, locale);

  return `${start} - ${end}`;
}
