import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { normalizeProductImages } from "../utils/productImageValidation";

const ProductItem = ({ item, product }) => {
  const productData = item || product || {};
  const imageList = normalizeProductImages(productData.img);
  const productImage = imageList[1] || imageList[0] || "";
  const [hasImageError, setHasImageError] = useState(false);

  useEffect(() => {
    setHasImageError(false);
  }, [productData._id, productImage]);

  if (!productData._id || !productImage || hasImageError) {
    return null;
  }

  return (
    <article className="card m-5 bg-base-100 shadow-xl">
      <figure>
        <img
          className="h-[250px] object-contain p-5"
          src={productImage}
          alt={productData.label || "Product"}
          loading="lazy"
          onError={() => setHasImageError(true)}
        />
      </figure>
      <div className="m-5 text-center">
        <h2 className="font-bold">{productData.label}</h2>
        {productData.size && <p className="mb-2">Size: {productData.size}</p>}
        <div>
          <Link
            className="btn btn-primary btn-sm"
            to={`/productgallery/${encodeURIComponent(productData._id)}`}
          >
            Inquire Now
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProductItem;
