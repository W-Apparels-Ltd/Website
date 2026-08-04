export const SITE_NAME = "W. Apparels Ltd.";
export const SITE_SHORT_NAME = "W. Apparels Ltd.";
export const SITE_URL = "https://www.wapparels.com";
export const DEFAULT_TITLE =
  "W. Apparels Ltd. | Knit & Woven Garment Manufacturer";
export const DEFAULT_DESCRIPTION =
  "W. Apparels Ltd. is a Bangladesh-based, export-oriented knit and woven garment manufacturer serving international apparel markets.";
export const ORGANIZATION_LOGO = `${SITE_URL}/logo512.png`;
export const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;
export const DEFAULT_IMAGE_WIDTH = 1200;
export const DEFAULT_IMAGE_HEIGHT = 630;
export const DEFAULT_IMAGE_TYPE = "image/png";

export const DEFAULT_ROBOTS =
  "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
export const NOINDEX_ROBOTS = "noindex, nofollow, noarchive";

export const normalizePath = (path = "/") => {
  const value = String(path || "/").trim();

  if (!value || value === "/") {
    return "/";
  }

  const withLeadingSlash = value.startsWith("/") ? value : `/${value}`;
  return withLeadingSlash.replace(/\/+$/, "") || "/";
};

export const buildCanonicalUrl = (path = "/") => {
  const normalizedPath = normalizePath(path);
  return normalizedPath === "/" ? `${SITE_URL}/` : `${SITE_URL}${normalizedPath}`;
};
