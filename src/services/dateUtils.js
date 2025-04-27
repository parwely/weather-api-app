export function formatDate(date) {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    });
  }

  export function formatTime(timestamp, timezoneOffset) {
      // Apply the location's timezone offset
      const locationTime = new Date((timestamp + timezoneOffset) * 1000);
      // Format the time
      return locationTime.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'UTC', // Important for correct times relative to local timezone
      });
  }