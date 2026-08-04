import { redirect } from "react-router-dom";

export const PRODUCT_API_BASE_URL =
  process.env.REACT_APP_PRODUCT_API_BASE_URL ||
  "https://wapparels-server.vercel.app";

export const BLOCKED_PRODUCT_IDS = new Set([
  "651bdc092023da937f74738f",
  "651bdc7e2023da937f747390",
  "6a6dcfb3241aa6f2ec8e01e2",
]);

const PRODUCT_ID_PATTERN = /^[a-f0-9]{24}$/i;

export const isBlockedProductId = (productId) =>
  BLOCKED_PRODUCT_IDS.has(String(productId || ""));

export const isValidProductId = (productId) =>
  PRODUCT_ID_PATTERN.test(String(productId || "").trim());

export const filterVisibleProducts = (products) =>
  Array.isArray(products)
    ? products.filter(
        (product) =>
          product &&
          product._id &&
          !isBlockedProductId(product._id),
      )
    : [];

const readJsonResponse = async (response) => {
  const responseText = await response.text();

  if (!responseText) {
    return null;
  }

  try {
    return JSON.parse(responseText);
  } catch {
    throw new Response("The products service returned invalid data.", {
      status: 502,
      statusText: "Invalid products response",
    });
  }
};

export const fetchProducts = async ({ signal } = {}) => {
  const response = await fetch(`${PRODUCT_API_BASE_URL}/products`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
    signal,
  });

  if (!response.ok) {
    throw new Error(`Products request failed with status ${response.status}.`);
  }

  const data = await readJsonResponse(response);

  if (!Array.isArray(data)) {
    throw new Error("The products service returned an invalid product list.");
  }

  return filterVisibleProducts(data);
};

export const fetchProductById = async (productId, { signal } = {}) => {
  const normalizedProductId = String(productId || "").trim();

  if (
    !isValidProductId(normalizedProductId) ||
    isBlockedProductId(normalizedProductId)
  ) {
    throw new Response("Product not found.", {
      status: 404,
      statusText: "Product not found",
    });
  }

  let response;

  try {
    response = await fetch(
      `${PRODUCT_API_BASE_URL}/products/${encodeURIComponent(normalizedProductId)}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
        signal,
      },
    );
  } catch (error) {
    if (error?.name === "AbortError") {
      throw error;
    }

    throw new Response("The product service is currently unavailable.", {
      status: 503,
      statusText: "Product service unavailable",
    });
  }

  if (response.status === 404) {
    throw new Response("Product not found.", {
      status: 404,
      statusText: "Product not found",
    });
  }

  if (!response.ok) {
    throw new Response("The product could not be loaded.", {
      status: 502,
      statusText: "Product request failed",
    });
  }

  const product = await readJsonResponse(response);

  if (
    !product ||
    typeof product !== "object" ||
    Array.isArray(product) ||
    !product._id ||
    String(product._id) !== normalizedProductId ||
    isBlockedProductId(product._id)
  ) {
    throw new Response("Product not found.", {
      status: 404,
      statusText: "Product not found",
    });
  }

  return product;
};

export const productDetailsLoader = ({ params, request }) =>
  fetchProductById(params.id, { signal: request.signal });

export const legacyProductRedirectLoader = ({ params }) => {
  const productId = String(params.id || "").trim();

  if (!isValidProductId(productId)) {
    return redirect("/");
  }

  if (isBlockedProductId(productId)) {
    return redirect("/productgallery");
  }

  return redirect(`/productgallery/${encodeURIComponent(productId)}`);
};
