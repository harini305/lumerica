import { events } from '@/data/events';
import content from '@/data/event-content.json';
import { baliInstant, formatSessions } from '@/lib/dates';

// upcoming: a dated event that has not finished yet
// recurring: a verified weekly event
// past: finished, or explicitly archived
export function eventStatus(event, now = new Date()) {
  if (event.archived) return 'past';
  if (event.recurring) return 'recurring';
  const last = event.sessions.at(-1);
  return baliInstant(last.end) > now ? 'upcoming' : 'past';
}

// Tickets can be bought until the last session starts.
export function bookingClosesAt(event) {
  if (!event.sessions) return null;
  return baliInstant(event.sessions.at(-1).start).toISOString();
}

export function dateLabel(event) {
  if (event.recurring) return event.recurring.label;
  if (event.archived) return event.scheduleLabel;
  return formatSessions(event.sessions);
}

export function sortKey(event) {
  const first = event.sessions?.[0].start || event.sortDate;
  return first ? baliInstant(first).getTime() : 0;
}

export function getEvent(slug) {
  return events.find((e) => e.slug === slug) || null;
}

export function getEventContent(slug) {
  return content[slug] || [];
}

export function groupEvents(now = new Date()) {
  const upcoming = [];
  const recurring = [];
  const past = [];
  for (const e of events) {
    const status = eventStatus(e, now);
    (status === 'upcoming' ? upcoming : status === 'recurring' ? recurring : past).push(e);
  }
  upcoming.sort((a, b) => sortKey(a) - sortKey(b));
  past.sort((a, b) => sortKey(b) - sortKey(a));
  return { upcoming, recurring, past };
}

export { events };
