import React, { useEffect, useState } from "react";
import bg from "../images/factory_purpose/1.jpg";
import ProductItem from "../Shared/ProductItem";

const PRODUCTS_API_URL = "https://wapparels-server.vercel.app/products";
const IMAGE_VALIDATION_TIMEOUT_MS = 10000;

const BLOCKED_PRODUCT_IDS = new Set([
  "651bdc092023da937f74738f", // Denim Jacket
  "651bdc7e2023da937f747390", // Swimwear
  "6a6dcfb3241aa6f2ec8e01e2", // Security Test
]);

const BLOCKED_PRODUCT_LABELS = new Set([
  "denim jacket",
  "swimwear",
]);

const KNOWN_BROKEN_IMAGE_URLS = new Set([
  "https://i.ibb.co/FhqVNzK/Whats-App-Image-2023-11-16-at-11-10-03-86fa2069-removebg-preview.png",
  "https://i.ibb.co/D4sDqZy/Whats-App-Image-2023-11-16-at-11-17-35-8b4c3361-removebg-preview.png",
]);

const INVALID_IMAGE_CACHE_KEY = "wapparels-invalid-product-images";

const normalizeProductLabel = (label) =>
  typeof label === "string" ? label.trim().toLowerCase() : "";

const isBlockedProduct = (product) => {
  if (!product) {
    return true;
  }

  const productId = String(product._id || "");
  const productLabel = normalizeProductLabel(product.label);

  return (
    BLOCKED_PRODUCT_IDS.has(productId) ||
    BLOCKED_PRODUCT_LABELS.has(productLabel)
  );
};

const readInvalidImageCache = () => {
  try {
    const cachedValue = window.sessionStorage.getItem(INVALID_IMAGE_CACHE_KEY);
    const parsedValue = cachedValue ? JSON.parse(cachedValue) : [];

    return new Set(Array.isArray(parsedValue) ? parsedValue : []);
  } catch {
    return new Set();
  }
};

const writeInvalidImageCache = (invalidImageUrls) => {
  try {
    window.sessionStorage.setItem(
      INVALID_IMAGE_CACHE_KEY,
      JSON.stringify(Array.from(invalidImageUrls)),
    );
  } catch {
    // Ignore storage failures in private or restricted browser modes.
  }
};

const validateImageUrl = (imageUrl, invalidImageUrls) =>
  new Promise((resolve) => {
    const normalizedUrl =
      typeof imageUrl === "string" ? imageUrl.trim() : "";

    if (
      !normalizedUrl ||
      KNOWN_BROKEN_IMAGE_URLS.has(normalizedUrl) ||
      invalidImageUrls.has(normalizedUrl)
    ) {
      resolve(false);
      return;
    }

    const image = new Image();
    let completed = false;

    const finish = (isValid) => {
      if (completed) {
        return;
      }

      completed = true;
      window.clearTimeout(timeoutId);
      image.onload = null;
      image.onerror = null;

      if (!isValid) {
        invalidImageUrls.add(normalizedUrl);
        writeInvalidImageCache(invalidImageUrls);
      }

      resolve(isValid);
    };

    const timeoutId = window.setTimeout(
      () => finish(false),
      IMAGE_VALIDATION_TIMEOUT_MS,
    );

    image.onload = () => {
      finish(image.naturalWidth > 0 && image.naturalHeight > 0);
    };

    image.onerror = () => finish(false);
    image.src = normalizedUrl;
  });

const isProductValid = async (product, invalidImageUrls) => {
  if (isBlockedProduct(product)) {
    return false;
  }

  if (!Array.isArray(product.img) || product.img.length === 0) {
    return false;
  }

  const imageValidationResults = await Promise.all(
    product.img.map((imageUrl) =>
      validateImageUrl(imageUrl, invalidImageUrls),
    ),
  );

  return imageValidationResults.every(Boolean);
};

const ProductGallary = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    let isActive = true;

    const loadProducts = async () => {
      setIsLoading(true);
      setLoadError("");

      try {
        const response = await fetch(PRODUCTS_API_URL, {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Products request failed with ${response.status}`);
        }

        const responseData = await response.json();

        if (!Array.isArray(responseData)) {
          throw new Error("Products API returned an invalid response.");
        }

        // Remove blocked products before image validation so their broken
        // image URLs are never requested by this component.
        const allowedProducts = responseData.filter(
          (product) => !isBlockedProduct(product),
        );

        const invalidImageUrls = readInvalidImageCache();

        KNOWN_BROKEN_IMAGE_URLS.forEach((imageUrl) => {
          invalidImageUrls.add(imageUrl);
        });

        writeInvalidImageCache(invalidImageUrls);

        const validationResults = await Promise.all(
          allowedProducts.map(async (product) => ({
            product,
            isValid: await isProductValid(product, invalidImageUrls),
          })),
        );

        if (!isActive) {
          return;
        }

        setProducts(
          validationResults
            .filter(({ isValid }) => isValid)
            .map(({ product }) => product),
        );
      } catch (error) {
        if (!isActive || error?.name === "AbortError") {
          return;
        }

        console.error("Unable to load product gallery:", error);
        setProducts([]);
        setLoadError("Products could not be loaded. Please try again later.");
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    };

    loadProducts();

    return () => {
      isActive = false;
      controller.abort();
    };
  }, []);
  console.log(products);

  return (
    <section
      style={{ backgroundImage: `url(${bg})` }}
      className="relative mx-auto min-h-screen w-full bg-cover bg-center font-Nunito"
    >
      <div className="min-h-screen bg-black/75 px-4 py-12 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold">Product Gallery</h1>
          </div>

          {isLoading && (
            <div
              className="flex min-h-[240px] items-center justify-center"
              role="status"
              aria-live="polite"
            >
              <span
                className="loading loading-spinner loading-lg"
                aria-hidden="true"
              />
              <span className="ml-3">Loading products...</span>
            </div>
          )}

          {!isLoading && loadError && (
            <div
              className="mx-auto max-w-xl rounded bg-white p-5 text-center text-red-700"
              role="alert"
            >
              {loadError}
            </div>
          )}

          {!isLoading && !loadError && products.length === 0 && (
            <div className="py-16 text-center text-lg" role="status">
              No available products were found.
            </div>
          )}

          {!isLoading && !loadError && products.length > 0 && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <ProductItem key={product._id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductGallary;