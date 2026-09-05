# Digital Clock - Multiple Time Zones

A beautiful web application that displays the current time in different time zones around the world.

## Features

- 🌍 **Multiple Time Zones**: View current time in 6 major cities
  - New York (UTC-5 / UTC-4)
  - London (UTC+0 / UTC+1)
  - Tokyo (UTC+9)
  - Sydney (UTC+10 / UTC+11)
  - Dubai (UTC+4)
  - Los Angeles (UTC-8 / UTC-7)

- 🎨 **Beautiful Design**: Modern UI with gradient background and card layout
- ⚡ **Real-time Updates**: Clock updates every second
- 📱 **Responsive**: Works on desktop, tablet, and mobile devices
- 🖥️ **No External Dependencies**: Pure HTML, CSS, and JavaScript

## How to Use

1. **Clone or download** this repository
2. **Open `index.html`** in your web browser
3. Watch the clocks update in real-time!

## File Structure

```
digital-clock-timezones/
├── index.html      # Main HTML file with clock structure
├── styles.css      # Styling for the clock interface
├── script.js       # JavaScript logic for time calculation
└── README.md       # This file
```

## How It Works

- The application uses JavaScript's `Intl.DateTimeFormat` API with `toLocaleString()` to convert the current time to different time zones
- Clocks update every second using `setInterval()`
- Each time zone's current time is calculated and displayed in HH:MM:SS format

## Customization

### Add More Time Zones

Edit `script.js` and add to the `timeZones` object:

```javascript
const timeZones = {
    'ny-clock': 'America/New_York',
    'new-city-clock': 'Your/Timezone', // Add your timezone here
    // ... other zones
};
```

Then add the corresponding HTML card in `index.html`:

```html
<div class="clock-card">
    <h2>Your City</h2>
    <p class="timezone">(Your UTC Offset)</p>
    <div class="digital-clock" id="new-city-clock">00:00:00</div>
</div>
```

### Available Time Zones

Use any valid IANA time zone identifier. Some common ones:

- `America/New_York`, `America/Chicago`, `America/Denver`, `America/Los_Angeles`
- `Europe/London`, `Europe/Paris`, `Europe/Berlin`, `Europe/Moscow`
- `Asia/Tokyo`, `Asia/Shanghai`, `Asia/Hong_Kong`, `Asia/Singapore`
- `Australia/Sydney`, `Australia/Melbourne`, `Australia/Brisbane`
- `Africa/Cairo`, `Africa/Johannesburg`
- `Asia/Dubai`, `Asia/Bangkok`, `Asia/Seoul`

## Browser Compatibility

Works in all modern browsers:
- Chrome/Edge (version 24+)
- Firefox (version 24+)
- Safari (version 10+)
- Opera (version 15+)

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Contributing

Feel free to fork this repository and submit pull requests for any improvements!
