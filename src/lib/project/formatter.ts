type ParsedProjectDate = {
  date: Date;
  year: number;
  month: number;
  day?: number;
  hasDay: boolean;
};

/**
 * Supports both:
 * - YYYY-MM      → month/year only
 * - YYYY-MM-DD   → full date
 */
function parseProjectDate(value: string): ParsedProjectDate {
  const [year, month, day] = value.split("-").map(Number);

  const hasDay = day !== undefined;

  return {
    date: hasDay
      ? new Date(year, month - 1, day)
      : new Date(year, month - 1, 1),
    year,
    month,
    day,
    hasDay,
  };
}

/**
 * Formats a single project date.
 *
 * Examples:
 * - "2025-08-08" → "August 8, 2025"
 * - "2025-08"    → "August 2025"
 */
export function formatProjectDate(
  value: string,
  locale: string = "en",
): string {
  const { date, hasDay } = parseProjectDate(value);

  return new Intl.DateTimeFormat(locale, {
    month: "long",
    ...(hasDay && { day: "numeric" }),
    year: "numeric",
  }).format(date);
}

export function formatProjectDuration(
  startDate?: string,
  endDate?: string,
  locale: string = "en",
): string | null {
  // No date information
  // → null
  if (!startDate && !endDate) {
    return null;
  }

  // Only end date is available
  // → "August 8, 2025" or "August 2025"
  if (!startDate) {
    return formatProjectDate(endDate!, locale);
  }

  // Only start date is available
  // → "August 8, 2025" or "August 2025"
  if (!endDate) {
    return formatProjectDate(startDate, locale);
  }

  const start = parseProjectDate(startDate);
  const end = parseProjectDate(endDate);

  // Start and end represent the same date
  // → "August 8, 2025"
  if (start.date.getTime() === end.date.getTime()) {
    return formatProjectDate(startDate, locale);
  }

  // Both dates include the exact day and are in the same year
  // → "July 22 – December 31, 2025"
  if (start.hasDay && end.hasDay && start.year === end.year) {
    const startText = new Intl.DateTimeFormat(locale, {
      month: "long",
      day: "numeric",
    }).format(start.date);

    const endText = new Intl.DateTimeFormat(locale, {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(end.date);

    return `${startText} – ${endText}`;
  }

  // General date range.
  //
  // Examples:
  // - "2025-03" → "2025-08"
  //   → "March 2025 – August 2025"
  //
  // - "2025-12-15" → "2026-01-20"
  //   → "December 15, 2025 – January 20, 2026"
  //
  // - "2025-07-22" → "2025-12"
  //   → "July 22, 2025 – December 2025"
  return `${formatProjectDate(startDate, locale)} – ${formatProjectDate(
    endDate,
    locale,
  )}`;
}
