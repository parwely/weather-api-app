/**
 * Formats a given date into a human-readable string.
 *
 * @param {Date} date - The date object to format.
 * @returns {string} - The formatted date string in the format "Weekday, Month Day".
 */
export function formatDate(date) {
    return date.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    });
}

/**
 * Formats a given timestamp into a time string adjusted for a specific timezone.
 *
 * @param {number} timestamp - The timestamp in seconds since the Unix epoch.
 * @param {number} timezoneOffsetSeconds - The timezone offset in seconds.
 * @returns {string} - The formatted time string in 24-hour format (HH:mm).
 */
export function formatTime(timestamp, timezoneOffsetSeconds) {
    // Apply the location's timezone offset
    const locationTime = new Date((timestamp + timezoneOffsetSeconds) * 1000);
    // Format the time
    return locationTime.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'UTC', // Important for correct times relative to local timezone
    });
}