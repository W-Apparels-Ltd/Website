import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const BLOCKED_PRODUCT_IDS = new Set([
  "651bdc092023da937f74738f",
  "651bdc7e2023da937f747390",
  "6a6dcfb3241aa6f2ec8e01e2",
]);

const normalizeImages = (images) =>
  Array.isArray(images)
    ? images
        .filter((imageUrl) => typeof imageUrl === "string")
        .map((imageUrl) => imageUrl.trim())
        .filter(Boolean)
    : [];

const ProductItem = ({ item, product }) => {
  const productData = item || product || {};
  const imageList = useMemo(
    () => normalizeImages(productData.img),
    [productData.img],
  );
  const displayImages = useMemo(
    () => Array.from(new Set([imageList[1], imageList[0]].filter(Boolean))),
    [imageList],
  );
  const [imageIndex, setImageIndex] = useState(0);
  const [hideCard, setHideCard] = useState(false);

  useEffect(() => {
    setImageIndex(0);
    setHideCard(false);
  }, [productData._id]);

  const productId = String(productData._id || "");

  if (
    !productId ||
    BLOCKED_PRODUCT_IDS.has(productId) ||
    displayImages.length === 0 ||
    hideCard
  ) {
    return null;
  }

  const handleImageError = () => {
    const nextImageIndex = imageIndex + 1;

    if (nextImageIndex < displayImages.length) {
      setImageIndex(nextImageIndex);
      return;
    }

    setHideCard(true);
  };

  return (
    <div className="card m-5 bg-base-100 shadow-xl">
      <figure>
        <img
          className="h-[250px] object-contain p-5"
          src={displayImages[imageIndex]}
          alt={productData.label || "Product"}
          loading="lazy"
          onError={handleImageError}
        />
      </figure>

      <div className="m-5 text-center">
        <h2 className="font-bold">{productData.label}</h2>
        <p className="mb-2">Size: {productData.size}</p>

        <div>
          <Link
            to={`/productgallery/${encodeURIComponent(productId)}`}
            className="btn btn-primary btn-sm"
          >
            Inquire Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
