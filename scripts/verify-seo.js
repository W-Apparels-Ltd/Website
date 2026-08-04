const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const errors = [];
const warnings = [];
const COMPANY_NAME = "W. Apparels Ltd.";
const SITE_URL = "https://www.wapparels.com";

const read = (relativePath) =>
  fs.readFileSync(path.join(root, relativePath), "utf8");

const requireFile = (relativePath) => {
  const absolutePath = path.join(root, relativePath);
  if (!fs.existsSync(absolutePath)) {
    errors.push(`Missing required file: ${relativePath}`);
  }
  return absolutePath;
};

const readPngDimensions = (relativePath) => {
  const absolutePath = requireFile(relativePath);
  if (!fs.existsSync(absolutePath)) return null;

  const buffer = fs.readFileSync(absolutePath);
  const signature = buffer.subarray(0, 8).toString("hex");
  if (signature !== "89504e470d0a1a0a" || buffer.length < 24) {
    errors.push(`${relativePath} is not a valid PNG file.`);
    return null;
  }

  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20),
  };
};

[
  "public/index.html",
  "public/robots.txt",
  "public/sitemap.xml",
  "public/404.html",
  "public/favicon.ico",
  "public/favicon-48x48.png",
  "public/favicon-96x96.png",
  "public/apple-touch-icon.png",
  "public/logo512.png",
  "public/og-image.png",
  "src/seo/Seo.js",
  "src/seo/RouteSeo.js",
  "src/seo/siteConfig.js",
].forEach(requireFile);

const indexHtml = read("public/index.html");
if (!indexHtml.includes(`<meta name="application-name" content="${COMPANY_NAME}"`)) {
  errors.push("Application name does not use the exact company name.");
}
if (!indexHtml.includes(`"name": "${COMPANY_NAME}"`)) {
  errors.push("Organization/WebSite structured data is missing the exact company name.");
}
if (!indexHtml.includes(`${SITE_URL}/logo512.png`)) {
  errors.push("Organization logo URL is missing from structured data.");
}
if (/<meta\s+name=["']keywords["']/i.test(indexHtml)) {
  warnings.push("Remove meta keywords; Google does not use them for ranking.");
}
if (/rel=["']canonical["']/i.test(indexHtml)) {
  errors.push("Static canonical found in index.html; SPA routes must set their own canonical URL.");
}

const siteConfig = read("src/seo/siteConfig.js");
if (!siteConfig.includes(`SITE_NAME = "${COMPANY_NAME}"`)) {
  errors.push("SITE_NAME does not use the exact company name.");
}
if (!siteConfig.includes(`SITE_URL = "${SITE_URL}"`)) {
  errors.push("SITE_URL is not configured as the preferred www hostname.");
}

const robots = read("public/robots.txt");
if (!robots.includes(`Sitemap: ${SITE_URL}/sitemap.xml`)) {
  errors.push("robots.txt does not reference the canonical sitemap URL.");
}

const sitemap = read("public/sitemap.xml");
const privateRoutes = ["/login", "/addproduct", "/costing", "/careerForm"];
privateRoutes.forEach((route) => {
  if (sitemap.includes(`${SITE_URL}${route}`)) {
    errors.push(`Private route must not appear in sitemap: ${route}`);
  }
});
if (!sitemap.includes(`<loc>${SITE_URL}/</loc>`)) {
  errors.push("Homepage is missing from sitemap.xml.");
}

let firebaseConfig;
try {
  firebaseConfig = JSON.parse(read("firebase.json"));
} catch (error) {
  errors.push(`firebase.json is invalid JSON: ${error.message}`);
}

if (firebaseConfig) {
  const rewrites = firebaseConfig.hosting?.rewrites || [];
  if (rewrites.some((rule) => rule.source === "**" || rule.source === "/**")) {
    errors.push("Catch-all SPA rewrite prevents Firebase from returning a real 404 response.");
  }
  if (!rewrites.some((rule) => String(rule.source).includes("/productgallery"))) {
    errors.push("Product detail routes are not covered by Firebase rewrites.");
  }

  const headers = firebaseConfig.hosting?.headers || [];
  const privateRouteHeader = headers.find((rule) =>
    String(rule.source).includes("addproduct"),
  );
  const hasNoIndexHeader = privateRouteHeader?.headers?.some(
    (header) =>
      header.key === "X-Robots-Tag" &&
      String(header.value).toLowerCase().includes("noindex"),
  );
  if (!hasNoIndexHeader) {
    errors.push("Private routes are missing an X-Robots-Tag noindex header.");
  }
}

const expectedPngDimensions = {
  "public/favicon-48x48.png": [48, 48],
  "public/favicon-96x96.png": [96, 96],
  "public/apple-touch-icon.png": [180, 180],
  "public/brand-icon-192.png": [192, 192],
  "public/brand-icon-512.png": [512, 512],
  "public/logo512.png": [512, 512],
  "public/og-image.png": [1200, 630],
};

Object.entries(expectedPngDimensions).forEach(([relativePath, expected]) => {
  const dimensions = readPngDimensions(relativePath);
  if (!dimensions) return;

  if (dimensions.width !== expected[0] || dimensions.height !== expected[1]) {
    errors.push(
      `${relativePath} must be ${expected[0]}x${expected[1]}, found ${dimensions.width}x${dimensions.height}.`,
    );
  }
});

if (errors.length > 0) {
  console.error("SEO verification failed:\n");
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log("SEO verification passed.");
console.log(`Brand: ${COMPANY_NAME}`);
console.log(`Canonical host: ${SITE_URL}`);
console.log("Favicon, organization logo, social image, sitemap and Firebase 404 checks passed.");

warnings.forEach((warning) => console.warn(`Warning: ${warning}`));
