import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import Seo from "./Seo";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  SITE_NAME,
  SITE_URL,
  buildCanonicalUrl,
  normalizePath,
} from "./siteConfig";

const PUBLIC_ROUTE_METADATA = {
  "/": {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    pageType: "WebPage",
  },
  "/building": {
    title: `Factories & Facilities | ${SITE_NAME}`,
    description:
      "Explore W. Apparels Ltd. manufacturing facilities, sister concerns, production capabilities and responsible apparel manufacturing standards in Bangladesh.",
    pageType: "CollectionPage",
  },
  "/wapparelltd": {
    title: `W. Apparels Factory | ${SITE_NAME}`,
    description:
      "Learn about the main W. Apparels Ltd. factory in Dhaka, including knit and woven garment operations, workforce, production sections and capacity.",
    pageType: "AboutPage",
  },
  "/quality-apparels": {
    title: `Quality Apparels | ${SITE_NAME}`,
    description:
      "Discover Quality Apparels, a sister concern supporting the export-oriented apparel manufacturing operations of W. Apparels Ltd.",
    pageType: "AboutPage",
  },
  "/3na-fashion": {
    title: `3NA Fashion | ${SITE_NAME}`,
    description:
      "Explore 3NA Fashion, a W. Apparels Ltd. sister concern focused on export-oriented woven-wear manufacturing in Bangladesh.",
    pageType: "AboutPage",
  },
  "/productgallery": {
    title: `Product Gallery | ${SITE_NAME}`,
    description:
      "Browse representative knit and woven apparel products manufactured by W. Apparels Ltd. and send a direct product inquiry to the team.",
    pageType: "CollectionPage",
  },
  "/meettheteam": {
    title: `Leadership Team | ${SITE_NAME}`,
    description:
      "Meet the directors, leadership and corporate team behind W. Apparels Ltd. and its export-oriented apparel manufacturing operations.",
    pageType: "AboutPage",
  },
  "/career": {
    title: `Careers | ${SITE_NAME}`,
    description:
      "Explore career opportunities and workplace information at W. Apparels Ltd., an export-oriented garment manufacturer in Dhaka, Bangladesh.",
    pageType: "WebPage",
  },
};

const NOINDEX_ROUTES = new Set([
  "/login",
  "/addproduct",
  "/costing",
  "/careerform",
  "/teams",
  "/safetymeasures",
  "/medicalfacilities",
  "/childcare",
  "/firetraining",
  "/fireaidtraining",
  "/foodfacilities",
]);

const createWebPageSchema = ({ title, description, path, pageType }) => {
  const url = buildCanonicalUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": pageType || "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#organization`,
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "en",
  };
};

const createBreadcrumbSchema = ({ title, path }) => {
  if (path === "/") {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: title.replace(` | ${SITE_NAME}`, ""),
        item: buildCanonicalUrl(path),
      },
    ],
  };
};

const RouteSeo = () => {
  const location = useLocation();
  const normalizedPath = normalizePath(location.pathname).toLowerCase();
  const metadata = PUBLIC_ROUTE_METADATA[normalizedPath];
  const noIndex = NOINDEX_ROUTES.has(normalizedPath) || !metadata;

  const structuredData = useMemo(() => {
    if (!metadata || noIndex) {
      return null;
    }

    return [
      createWebPageSchema({ ...metadata, path: normalizedPath }),
      createBreadcrumbSchema({ title: metadata.title, path: normalizedPath }),
    ].filter(Boolean);
  }, [metadata, noIndex, normalizedPath]);

  if (noIndex) {
    return (
      <Seo
        title={`Private or unavailable page | ${SITE_NAME}`}
        description="This page is not intended to appear in public search results."
        path={normalizedPath}
        noIndex
      />
    );
  }

  return (
    <Seo
      title={metadata.title}
      description={metadata.description}
      path={normalizedPath}
      structuredData={structuredData}
    />
  );
};

export default RouteSeo;
