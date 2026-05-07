// Mawaqit Configuration
// Paste your Google OAuth 2.0 Client ID here

const MAWAQIT_CONFIG = {
  GOOGLE_CLIENT_ID: '',
  FAJR_ANGLE: 18,
  MAGHRIB_ANGLE: 18,
  ISHA_ANGLE: 21,
  POST_FAJR_MINUTES: 15,
  ISTIWA_MINUTES_BEFORE: 5,
  PRAYER_DURATION_MINUTES: 30,
};

if (typeof window !== 'undefined') {
  window.MAWAQIT_CONFIG = MAWAQIT_CONFIG;
}
