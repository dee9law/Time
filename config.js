// Mawaqit Configuration
// Paste your Google OAuth 2.0 Client ID below to enable Google Calendar export

const MAWAQIT_CONFIG = {
  // Get this from Google Cloud Console:
  // 1. https://console.cloud.google.com
  // 2. Create project → Enable Google Calendar API
  // 3. APIs & Services → Credentials → Create OAuth 2.0 Client ID
  // 4. Application type: Web Application
  // 5. Authorized JavaScript origins: add your GitHub Pages URL
  // 6. Copy the Client ID and paste it below (inside the quotes)

  GOOGLE_CLIENT_ID: '',

  // Prayer calculation angles (do not change unless you know the fiqh)
  FAJR_ANGLE: 18,      // Astronomical dawn
  MAGHRIB_ANGLE: 18,   // End of twilight
  ISHA_ANGLE: 21,      // Deep twilight end
  ASR_SHADOW_FACTOR: 1, // Shafi'i / Hanbali

  // Forbidden window durations
  POST_FAJR_MINUTES: 15,
  ISTIWA_MINUTES_BEFORE: 5,
  PRAYER_DURATION_MINUTES: 30,
};

// Export for use in app
if (typeof window !== 'undefined') {
  window.MAWAQIT_CONFIG = MAWAQIT_CONFIG;
}
