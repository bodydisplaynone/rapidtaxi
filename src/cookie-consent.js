// ── RapidTaxi Cookie Consent + Google Consent Mode v2 ──

const CONSENT_KEY = 'rapidtaxi_consent';

// 1. Always initialise Consent Mode in denied state BEFORE any ad scripts load.
//    Replace 'G-XXXXXXXXXX' with your real Google tag ID when you set up Ads.
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('consent', 'default', {
  ad_storage:            'denied',
  ad_user_data:          'denied',
  ad_personalization:    'denied',
  analytics_storage:     'denied',
  wait_for_update:       500,
});
gtag('js', new Date());
// gtag('config', 'G-XXXXXXXXXX'); // ← uncomment and fill in when Ads are live

// 2. Helpers
function getConsent() {
  try { return localStorage.getItem(CONSENT_KEY); } catch { return null; }
}
function saveConsent(val) {
  try { localStorage.setItem(CONSENT_KEY, val); } catch {}
}

function grantConsent() {
  gtag('consent', 'update', {
    ad_storage:            'granted',
    ad_user_data:          'granted',
    ad_personalization:    'granted',
    analytics_storage:     'granted',
  });
}

function hideBanner() {
  const b = document.getElementById('cookie-banner');
  if (b) { b.style.opacity = '0'; setTimeout(() => b.remove(), 300); }
}

function showBanner() {
  const b = document.getElementById('cookie-banner');
  if (b) { requestAnimationFrame(() => b.classList.add('visible')); }
}

// 3. On load — check saved preference
document.addEventListener('DOMContentLoaded', () => {
  const saved = getConsent();
  if (saved === 'accepted') {
    grantConsent();
    return; // no banner
  }
  if (saved === 'rejected') {
    return; // no banner, stay denied
  }
  // No decision yet → show banner
  showBanner();

  document.getElementById('cookie-accept')?.addEventListener('click', () => {
    saveConsent('accepted');
    grantConsent();
    hideBanner();
  });

  document.getElementById('cookie-reject')?.addEventListener('click', () => {
    saveConsent('rejected');
    hideBanner();
  });
});
