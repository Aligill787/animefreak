/**
 * AnimeFreak Central Configuration
 * Easy configuration layer for deploying, monetizing, and integrating services.
 */

export const siteConfig = {
  name: import.meta.env.VITE_SITE_NAME || 'AnimeFreak',
  tagline: 'Stories beyond the screen.',
  url: import.meta.env.VITE_SITE_URL || 'https://animefreak.culture',
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL || 'contact@animefreak.culture',
  
  // Analytics & AdSense IDs (Ready for real production keys)
  gaId: import.meta.env.VITE_GA_ID || 'G-ANIME_FREAK_DEMO',
  adsenseId: import.meta.env.VITE_ADSENSE_ID || 'ca-pub-XXXXXXXXXXXXX',
  
  // Payment Integration Provider (Stripe, PayPal, Lemonsqueezy, etc.)
  paymentProvider: import.meta.env.VITE_PAYMENT_PROVIDER || 'stripe_placeholder',
  woocommerceCheckoutUrl: import.meta.env.VITE_WOOCOMMERCE_CHECKOUT_URL || '',
  
  // Social Links
  socials: {
    twitter: 'https://twitter.com/animefreak_pub',
    instagram: 'https://instagram.com/animefreak_mag',
    youtube: 'https://youtube.com/@animefreak_culture',
    tiktok: 'https://tiktok.com/@animefreak_universe',
  },

  // Publishing & Legal Information
  legalDisclaimer: 'AnimeFreak is an independent anime culture and creative publishing platform. AnimeFreak is not affiliated with or endorsed by any third-party anime studio, manga publisher, streaming platform or franchise unless explicitly stated.',
  copyrightYear: new Date().getFullYear(),
};
