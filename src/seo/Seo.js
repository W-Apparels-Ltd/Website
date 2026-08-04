import { useEffect, useMemo } from "react";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_IMAGE,
  DEFAULT_IMAGE_HEIGHT,
  DEFAULT_IMAGE_TYPE,
  DEFAULT_IMAGE_WIDTH,
  DEFAULT_ROBOTS,
  DEFAULT_TITLE,
  NOINDEX_ROBOTS,
  SITE_NAME,
  buildCanonicalUrl,
} from "./siteConfig";

const MANAGED_ATTRIBUTE = "data-wapparels-seo";
const ROUTE_JSON_LD_ID = "wapparels-route-json-ld";

const ensureMetaTag = ({ name, property }) => {
  const selector = name
    ? `meta[name="${name}"]`
    : `meta[property="${property}"]`;
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    if (name) {
      element.setAttribute("name", name);
    } else {
      element.setAttribute("property", property);
    }
    document.head.appendChild(element);
  }

  element.setAttribute(MANAGED_ATTRIBUTE, "true");
  return element;
};

const setMetaContent = (selector, content) => {
  if (content === undefined || content === null || content === "") {
    return;
  }

  const element = ensureMetaTag(selector);
  element.setAttribute("content", String(content));
};

const ensureLink = ({ rel, hreflang }) => {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    if (hreflang) {
      element.setAttribute("hreflang", hreflang);
    }
    document.head.appendChild(element);
  }

  element.setAttribute(MANAGED_ATTRIBUTE, "true");
  return element;
};

const normalizeStructuredData = (structuredData) => {
  if (!structuredData) {
    return [];
  }

  return Array.isArray(structuredData)
    ? structuredData.filter(Boolean)
    : [structuredData];
};

const Seo = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  canonicalUrl,
  image = DEFAULT_IMAGE,
  imageAlt = `${SITE_NAME} logo`,
  imageWidth,
  imageHeight,
  imageType,
  type = "website",
  noIndex = false,
  structuredData,
}) => {
  const resolvedCanonicalUrl = useMemo(
    () => canonicalUrl || buildCanonicalUrl(path),
    [canonicalUrl, path],
  );

  const structuredDataItems = useMemo(
    () => normalizeStructuredData(structuredData),
    [structuredData],
  );

  const usesDefaultImage = image === DEFAULT_IMAGE;
  const resolvedImageWidth =
    imageWidth || (usesDefaultImage ? DEFAULT_IMAGE_WIDTH : undefined);
  const resolvedImageHeight =
    imageHeight || (usesDefaultImage ? DEFAULT_IMAGE_HEIGHT : undefined);
  const resolvedImageType =
    imageType || (usesDefaultImage ? DEFAULT_IMAGE_TYPE : undefined);

  useEffect(() => {
    document.documentElement.lang = "en";
    document.title = title;

    const canonical = ensureLink({ rel: "canonical" });
    canonical.setAttribute("href", resolvedCanonicalUrl);

    const englishAlternate = ensureLink({ rel: "alternate", hreflang: "en" });
    englishAlternate.setAttribute("href", resolvedCanonicalUrl);

    const defaultAlternate = ensureLink({
      rel: "alternate",
      hreflang: "x-default",
    });
    defaultAlternate.setAttribute("href", resolvedCanonicalUrl);

    const robotsContent = noIndex ? NOINDEX_ROBOTS : DEFAULT_ROBOTS;

    setMetaContent({ name: "description" }, description);
    setMetaContent({ name: "robots" }, robotsContent);
    setMetaContent({ name: "googlebot" }, robotsContent);

    setMetaContent({ property: "og:site_name" }, SITE_NAME);
    setMetaContent({ property: "og:locale" }, "en_US");
    setMetaContent({ property: "og:type" }, type);
    setMetaContent({ property: "og:title" }, title);
    setMetaContent({ property: "og:description" }, description);
    setMetaContent({ property: "og:url" }, resolvedCanonicalUrl);
    setMetaContent({ property: "og:image" }, image);
    setMetaContent({ property: "og:image:secure_url" }, image);
    setMetaContent({ property: "og:image:alt" }, imageAlt);
    setMetaContent({ property: "og:image:type" }, resolvedImageType);
    setMetaContent({ property: "og:image:width" }, resolvedImageWidth);
    setMetaContent({ property: "og:image:height" }, resolvedImageHeight);

    setMetaContent({ name: "twitter:card" }, "summary_large_image");
    setMetaContent({ name: "twitter:title" }, title);
    setMetaContent({ name: "twitter:description" }, description);
    setMetaContent({ name: "twitter:image" }, image);
    setMetaContent({ name: "twitter:image:alt" }, imageAlt);

    document.getElementById(ROUTE_JSON_LD_ID)?.remove();

    if (structuredDataItems.length > 0 && !noIndex) {
      const script = document.createElement("script");
      script.id = ROUTE_JSON_LD_ID;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(
        structuredDataItems.length === 1
          ? structuredDataItems[0]
          : {
              "@context": "https://schema.org",
              "@graph": structuredDataItems,
            },
      );
      document.head.appendChild(script);
    }

    return () => {
      document.getElementById(ROUTE_JSON_LD_ID)?.remove();
    };
  }, [
    description,
    image,
    imageAlt,
    noIndex,
    resolvedCanonicalUrl,
    resolvedImageHeight,
    resolvedImageType,
    resolvedImageWidth,
    structuredDataItems,
    title,
    type,
  ]);

  return null;
};

export default Seo;
