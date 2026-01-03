/**
 * Formats a given date into a relative time string (e.g., "5 minutes ago", "2 hours ago")
 * @param date - The date to be formatted, can be a Date object, timestamp, or date string.
 * @returns Formatted date for older dates.
 * @example
 * ```ts
 * getRelativeTime(new Date(Date.now() - 5 * 60 * 1000)); // "5 minutes ago"
 * getRelativeTime(new Date(Date.now() - 2 * 60 * 60 * 1000)); // "2 hours ago"
 * getRelativeTime(new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)); // "3 days ago"
 * getRelativeTime(new Date('2022-01-01')); // "1/1/2022" (or similar formatted date)
 * ```
 */

export const getRelativeTime = (date: Date | string | number): string => {
  if(!date) return '';

  const now = Date.now();
  const inputTime = new Date(date).getTime();
  const diffMs = now - inputTime;

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) return "just now";
  if (minutes < 60) return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
  if (hours < 24) return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
  if (days < 7) return `${days} day${days !== 1 ? 's' : ''} ago`;

  return new Date(date).toLocaleDateString();
}
