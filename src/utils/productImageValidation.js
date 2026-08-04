const IMAGE_VALIDATION_TIMEOUT_MS = 10000;
const INVALID_IMAGE_CACHE_KEY = "wapparels-invalid-product-images";

const KNOWN_BROKEN_IMAGE_URLS = new Set([
  "https://i.ibb.co/FhqVNzK/Whats-App-Image-2023-11-16-at-11-10-03-86fa2069-removebg-preview.png",
  "https://i.ibb.co/D4sDqZy/Whats-App-Image-2023-11-16-at-11-17-35-8b4c3361-removebg-preview.png",
]);

let cachedInvalidImageUrls = null;

const getInvalidImageUrls = () => {
  if (cachedInvalidImageUrls) {
    return cachedInvalidImageUrls;
  }

  cachedInvalidImageUrls = new Set(KNOWN_BROKEN_IMAGE_URLS);

  if (typeof window === "undefined") {
    return cachedInvalidImageUrls;
  }

  try {
    const storedValue = window.sessionStorage.getItem(
      INVALID_IMAGE_CACHE_KEY,
    );
    const parsedValue = storedValue ? JSON.parse(storedValue) : [];

    if (Array.isArray(parsedValue)) {
      parsedValue.forEach((imageUrl) => {
        if (typeof imageUrl === "string" && imageUrl.trim()) {
          cachedInvalidImageUrls.add(imageUrl.trim());
        }
      });
    }
  } catch {
    // sessionStorage can be unavailable in restricted browser modes.
  }

  return cachedInvalidImageUrls;
};

const persistInvalidImageUrls = () => {
  if (typeof window === "undefined" || !cachedInvalidImageUrls) {
    return;
  }

  try {
    window.sessionStorage.setItem(
      INVALID_IMAGE_CACHE_KEY,
      JSON.stringify(Array.from(cachedInvalidImageUrls)),
    );
  } catch {
    // Image validation must continue even when storage is unavailable.
  }
};

const markImageInvalid = (imageUrl) => {
  getInvalidImageUrls().add(imageUrl);
  persistInvalidImageUrls();
};

export const normalizeProductImages = (images) =>
  Array.isArray(images)
    ? images
        .filter((imageUrl) => typeof imageUrl === "string")
        .map((imageUrl) => imageUrl.trim())
        .filter(Boolean)
    : [];

export const validateImageUrl = (imageUrl) =>
  new Promise((resolve) => {
    const normalizedImageUrl =
      typeof imageUrl === "string" ? imageUrl.trim() : "";

    if (
      !normalizedImageUrl ||
      getInvalidImageUrls().has(normalizedImageUrl)
    ) {
      resolve(false);
      return;
    }

    if (typeof Image === "undefined") {
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
        markImageInvalid(normalizedImageUrl);
      }

      resolve(isValid);
    };

    const timeoutId = window.setTimeout(
      () => finish(false),
      IMAGE_VALIDATION_TIMEOUT_MS,
    );

    image.onload = () =>
      finish(image.naturalWidth > 0 && image.naturalHeight > 0);
    image.onerror = () => finish(false);
    image.src = normalizedImageUrl;
  });

export const validateProductImages = async (product) => {
  const imageUrls = normalizeProductImages(product?.img);

  if (imageUrls.length === 0) {
    return false;
  }

  const uniqueImageUrls = Array.from(new Set(imageUrls));
  const validationResults = await Promise.all(
    uniqueImageUrls.map(validateImageUrl),
  );

  return validationResults.every(Boolean);
};

export const filterProductsWithValidImages = async (products) => {
  const productList = Array.isArray(products) ? products : [];
  const validationResults = await Promise.all(
    productList.map(async (product) => ({
      product,
      isValid: await validateProductImages(product),
    })),
  );

  return validationResults
    .filter(({ isValid }) => isValid)
    .map(({ product }) => product);
};
