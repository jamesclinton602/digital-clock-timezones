// Define time zones
const timeZones = {
    'ny-clock': 'America/New_York',
    'london-clock': 'Europe/London',
    'tokyo-clock': 'Asia/Tokyo',
    'sydney-clock': 'Australia/Sydney',
    'dubai-clock': 'Asia/Dubai',
    'la-clock': 'America/Los_Angeles'
};

/**
 * Format time with leading zeros
 */
function formatTime(hours, minutes, seconds) {
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

/**
 * Get current time in specified timezone
 */
function getTimeInTimezone(timezone) {
    const now = new Date();
    const timeString = now.toLocaleString('en-US', { timeZone: timezone });
    const time = new Date(timeString);
    
    return {
        hours: time.getHours(),
        minutes: time.getMinutes(),
        seconds: time.getSeconds()
    };
}

/**
 * Update all clocks
 */
function updateClocks() {
    for (const [clockId, timezone] of Object.entries(timeZones)) {
        const time = getTimeInTimezone(timezone);
        const formattedTime = formatTime(time.hours, time.minutes, time.seconds);
        
        const clockElement = document.getElementById(clockId);
        if (clockElement) {
            clockElement.textContent = formattedTime;
        }
    }
}

/**
 * Initialize clocks and update every second
 */
function initializeClock() {
    updateClocks(); // Initial update
    setInterval(updateClocks, 1000); // Update every second
}

// Start the clock when DOM is ready
document.addEventListener('DOMContentLoaded', initializeClock);
