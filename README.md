# Mawaqit · مواقيت

A free, zero-backend web app for astronomically precise Islamic prayer times. Hosted on GitHub Pages. No install, no account.

## Features

- **GPS Location** — Browser detects lat/lng. Leaflet map with draggable pin for manual adjustment.
- **Astronomical Math** — Real solar angle calculations using [Adhan.js](https://github.com/batoulapps/adhan-js) (Jean Meeus algorithms). Not lookup tables.
- **Custom Angles** — Fajr −18°, Maghrib −18°, Isha −21° per specification.
- **Forbidden Windows** — Ibn Baz & Ibn Uthaymeen rulings computed and shown in real-time:
  - Post-Fajr until sunrise + 15 min
  - Istiwa' (5 min before solar noon)
  - Post-Asr until Maghrib
- **Live Status** — Real-time badges showing allowed / forbidden / past-preferred per prayer.
- **Range View** — 1 Day / 1 Week / 1 Month compact tables.
- **Google Calendar Export** — One-click batch export of all prayer events.

## Tech Stack

| Layer | Technology | Cost |
|-------|-----------|------|
| Hosting | GitHub Pages | Free |
| Map | Leaflet.js + OpenStreetMap | Free |
| Prayer Math | Adhan.js (CDN) | Free |
| Location | Browser Geolocation API | Free |
| Calendar | Google Calendar API + OAuth 2.0 | Free tier |

## Setup (5 minutes)

### 1. Fork / Upload to GitHub

Upload `index.html`, `config.js`, and this `README.md` to a new repository.

### 2. Enable GitHub Pages

Go to **Settings → Pages** in your repo and set source to the main branch.

### 3. Configure Google Calendar (Optional)

To enable the "Add to Google Calendar" button:

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project
3. **APIs & Services → Library** → Search "Google Calendar API" → Enable
4. **APIs & Services → Credentials → Create Credentials → OAuth 2.0 Client ID**
5. Application type: **Web Application**
6. **Authorized JavaScript origins**: Add your GitHub Pages URL (e.g., `https://yourusername.github.io/mawaqit`)
7. Copy the **Client ID** (looks like `123456789-abc123.apps.googleusercontent.com`)
8. Open `config.js` and paste it into `GOOGLE_CLIENT_ID`
9. Commit and push — done!

### 4. Visit Your Site

Open `https://yourusername.github.io/mawaqit` in any browser.

## File Structure

```
mawaqit/
├── index.html      # Single-page app (location, today, range, export)
├── config.js       # Google OAuth Client ID (only file to edit)
└── README.md       # This file
```

## Prayer Calculation Details

| Prayer | Solar Trigger | Angle | Astronomical Definition |
|--------|--------------|-------|------------------------|
| Fajr | Astronomical Dawn | −18° | True dawn (Fajr Sadiq) — sun 18° below eastern horizon |
| Sunrise | Sun's upper limb | −0.833° | Standard refraction correction + solar radius |
| Dhuhr | Solar noon | — | Local Apparent Solar Noon (equation of time + longitude offset) |
| Asr | Shadow factor | 1:1 | Shadow = object length + noon shadow (Shafi'i/Hanbali) |
| Maghrib | Sun depression | −18° | End of red twilight, true onset of Maghrib |
| Isha | Deep twilight end | −21° | Full darkness achieved |

## Forbidden Windows (Ibn Baz & Ibn Uthaymeen)

1. **Post-Fajr**: From Fajr adhan until sun rises + 15 minutes (sun clears horizon)
2. **Istiwa'**: 5 minutes before solar noon until sun begins to decline
3. **Post-Asr**: From Asr adhan until Maghrib (applies to nafl prayers only)

## License

MIT — Free for all. Built for the Ummah.
