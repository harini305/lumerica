// All event times are Bali local time (WITA, UTC+8, no daylight saving).
const OFFSET = '+08:00';
const TZ = 'Asia/Makassar';

export function baliInstant(local) {
  return new Date(local.length === 10 ? `${local}T00:00:00${OFFSET}` : `${local}:00${OFFSET}`);
}

const dayFmt = new Intl.DateTimeFormat('en-GB', { timeZone: TZ, weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
const shortFmt = new Intl.DateTimeFormat('en-GB', { timeZone: TZ, day: 'numeric', month: 'short' });
const dayMonthFmt = new Intl.DateTimeFormat('en-GB', { timeZone: TZ, day: 'numeric', month: 'long' });
const monthYearFmt = new Intl.DateTimeFormat('en-GB', { timeZone: TZ, month: 'long', year: 'numeric' });
const partsFmt = new Intl.DateTimeFormat('en-GB', { timeZone: TZ, day: 'numeric', month: 'short', year: 'numeric', weekday: 'short' });

export const formatDay = (local) => dayFmt.format(baliInstant(local));
export const formatShort = (local) => shortFmt.format(baliInstant(local));
export const formatMonthYear = (local) => monthYearFmt.format(baliInstant(local));

export function dateParts(local) {
  const parts = Object.fromEntries(partsFmt.formatToParts(baliInstant(local)).map((p) => [p.type, p.value]));
  return { day: parts.day, month: parts.month, year: parts.year, weekday: parts.weekday };
}

const sameDay = (a, b) => a.slice(0, 10) === b.slice(0, 10);

// "Monday 26 October 2026", "Wednesday 11 February 2026 & Wednesday 25 February 2026",
// or a range for multi-day trainings: "16 October – 20 October 2024".
export function formatSessions(sessions) {
  if (sessions.length === 1) {
    const { start, end } = sessions[0];
    if (sameDay(start, end)) return formatDay(start);
    return `${dayMonthFmt.format(baliInstant(start))} – ${dayFmt.format(baliInstant(end)).replace(/^\w+,? /, '')}`;
  }
  return sessions.map((s) => formatDay(s.start)).join(' & ');
}
