export type CookieConsent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
};

export type StoredConsent = {
  consent: CookieConsent;
  timestamp: number;
  version: 1;
};

export const CONSENT_STORAGE_KEY = "watm-cookie-consent-v1";

export const DEFAULT_CONSENT: CookieConsent = {
  necessary: true,
  analytics: false,
  marketing: false,
  preferences: false,
};

type GoogleConsentState = {
  analytics_storage: "granted" | "denied";
  ad_storage: "granted" | "denied";
  ad_user_data: "granted" | "denied";
  ad_personalization: "granted" | "denied";
  functionality_storage: "granted";
  security_storage: "granted";
  personalization_storage: "granted" | "denied";
};

type GoogleWindow = Window & {
  dataLayer?: IArguments[];
  gtag?: (...args: unknown[]) => void;
};

export function updateGoogleConsent(consent: CookieConsent): void {
  if (typeof window === "undefined") return;

  const googleWindow = window as GoogleWindow;

  googleWindow.dataLayer = googleWindow.dataLayer || [];

  if (!googleWindow.gtag) {
    googleWindow.gtag = function () {
      googleWindow.dataLayer!.push(arguments);
    };
  }

  const state: GoogleConsentState = {
    analytics_storage: consent.analytics ? "granted" : "denied",
    ad_storage: consent.marketing ? "granted" : "denied",
    ad_user_data: consent.marketing ? "granted" : "denied",
    ad_personalization: consent.marketing ? "granted" : "denied",
    functionality_storage: "granted",
    security_storage: "granted",
    personalization_storage: consent.preferences ? "granted" : "denied",
  };

  googleWindow.gtag("consent", "update", state);
}

export function readConsent(): StoredConsent | null {
  if (typeof window === "undefined") return null;

  try {
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY);

    if (!stored) return null;

    const parsed = JSON.parse(stored) as StoredConsent;

    if (
      parsed.version !== 1 ||
      typeof parsed.timestamp !== "number" ||
      typeof parsed.consent?.analytics !== "boolean" ||
      typeof parsed.consent?.marketing !== "boolean" ||
      typeof parsed.consent?.preferences !== "boolean"
    ) {
      return null;
    }

    return {
      version: 1,
      timestamp: parsed.timestamp,
      consent: {
        necessary: true,
        analytics: parsed.consent.analytics,
        marketing: parsed.consent.marketing,
        preferences: parsed.consent.preferences,
      },
    };
  } catch {
    return null;
  }
}

export function saveConsent(consent: CookieConsent): StoredConsent {
  const stored: StoredConsent = {
    consent: {
      necessary: true,
      analytics: consent.analytics,
      marketing: consent.marketing,
      preferences: consent.preferences,
    },
    timestamp: Date.now(),
    version: 1,
  };

  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(stored));
    } catch (error) {
      console.error("Could not save cookie consent:", error);
    }

    updateGoogleConsent(stored.consent);
  }

  return stored;
}
