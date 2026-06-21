import { DESIGN_TYPOGRAPHY } from "@/lib/design-tokens";

type GoogleFontConfig = {
  family: string;
  css2Family: string;
  fallback: string;
};

const DEFAULT_FONT_KEY = "inter";

const GOOGLE_UTF8_FONT_ALLOWLIST: Record<string, GoogleFontConfig> = {
  inter: {
    family: "Inter",
    css2Family: "Inter:wght@400;500;600;700",
    fallback: '"Segoe UI", "Noto Sans", Arial, sans-serif',
  },
  sora: {
    family: "Sora",
    css2Family: "Sora:wght@400;500;600;700",
    fallback: '"Segoe UI", "Noto Sans", Arial, sans-serif',
  },
  manrope: {
    family: "Manrope",
    css2Family: "Manrope:wght@400;500;600;700",
    fallback: '"Segoe UI", "Noto Sans", Arial, sans-serif',
  },
  outfit: {
    family: "Outfit",
    css2Family: "Outfit:wght@400;500;600;700",
    fallback: '"Segoe UI", "Noto Sans", Arial, sans-serif',
  },
  "space grotesk": {
    family: "Space Grotesk",
    css2Family: "Space+Grotesk:wght@400;500;600;700",
    fallback: '"Segoe UI", "Noto Sans", Arial, sans-serif',
  },
  "plus jakarta sans": {
    family: "Plus Jakarta Sans",
    css2Family: "Plus+Jakarta+Sans:wght@400;500;600;700",
    fallback: '"Segoe UI", "Noto Sans", Arial, sans-serif',
  },
  montserrat: {
    family: "Montserrat",
    css2Family: "Montserrat:wght@400;500;600;700",
    fallback: '"Segoe UI", "Noto Sans", Arial, sans-serif',
  },
  "noto sans": {
    family: "Noto Sans",
    css2Family: "Noto+Sans:wght@400;500;600;700",
    fallback: '"Segoe UI", Arial, sans-serif',
  },
  "noto sans jp": {
    family: "Noto Sans JP",
    css2Family: "Noto+Sans+JP:wght@400;500;700",
    fallback: '"Segoe UI", "Noto Sans", Arial, sans-serif',
  },
  "noto sans kr": {
    family: "Noto Sans KR",
    css2Family: "Noto+Sans+KR:wght@400;500;700",
    fallback: '"Segoe UI", "Noto Sans", Arial, sans-serif',
  },
  "ibm plex sans": {
    family: "IBM Plex Sans",
    css2Family: "IBM+Plex+Sans:wght@400;500;600;700",
    fallback: '"Segoe UI", "Noto Sans", Arial, sans-serif',
  },
  roboto: {
    family: "Roboto",
    css2Family: "Roboto:wght@400;500;700",
    fallback: '"Segoe UI", "Noto Sans", Arial, sans-serif',
  },
  rubik: {
    family: "Rubik",
    css2Family: "Rubik:wght@400;500;600;700",
    fallback: '"Segoe UI", "Noto Sans", Arial, sans-serif',
  },
};

export type SiteFont = {
  family: string;
  key: string;
  source: "design-token" | "fallback";
  stylesheetHref: string;
  cssStack: string;
};

function normalizeFontName(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

function getGoogleFontByName(name: string) {
  const normalized = normalizeFontName(name);
  return GOOGLE_UTF8_FONT_ALLOWLIST[normalized];
}

function getDefaultFont() {
  const config = GOOGLE_UTF8_FONT_ALLOWLIST[DEFAULT_FONT_KEY];
  return {
    family: config.family,
    key: DEFAULT_FONT_KEY,
    source: "fallback" as const,
    stylesheetHref: `https://fonts.googleapis.com/css2?family=${config.css2Family}&display=swap`,
    cssStack: `"${config.family}", ${config.fallback}`,
  };
}

export function getSiteFont(): SiteFont {
  const configuredFamily = DESIGN_TYPOGRAPHY.primaryFontFamily;
  const googleFont = getGoogleFontByName(configuredFamily);

  if (!googleFont) {
    return getDefaultFont();
  }

  return {
    family: googleFont.family,
    key: normalizeFontName(googleFont.family),
    source: "design-token",
    stylesheetHref: `https://fonts.googleapis.com/css2?family=${googleFont.css2Family}&display=swap`,
    cssStack: `"${googleFont.family}", ${googleFont.fallback}`,
  };
}

export const GOOGLE_FONT_NAMES = Object.values(GOOGLE_UTF8_FONT_ALLOWLIST).map((font) => font.family);