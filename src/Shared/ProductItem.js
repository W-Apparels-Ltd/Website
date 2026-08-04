import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ item, product }) => {
  const productData = item || product || {};
  const imageList = Array.isArray(productData.img) ? productData.img : [];
  const productImage = imageList[1] || imageList[0] || "";

  if (!productData._id) {
    return null;
  }

  return (
    <div className="card bg-base-100 shadow-xl m-5 ">
      <figure>
        <img
          className="object-contain h-[250px] p-5"
          src={productImage}
          alt={productData.label || "Product"}
        />
      </figure>
      <div className="m-5 text-center">
        <h2 className="font-bold">{productData.label}</h2>
        <p className="mb-2">Size: {productData.size}</p>
        <div>
          <Link to={`/${productData._id}`}>
            <button className="btn btn-primary btn-sm">Inquire Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
