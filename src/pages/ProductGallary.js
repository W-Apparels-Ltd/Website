import React, { useEffect, useState } from "react";
import bg from "../images/factory_purpose/1.jpg";
import ProductItem from "../Shared/ProductItem";

const PRODUCTS_API_URL = "https://wapparels-server.vercel.app/products";

const BLOCKED_PRODUCT_IDS = new Set([
  "651bdc092023da937f74738f", // Denim Jacket
  "651bdc7e2023da937f747390", // Swimwear
  "6a6dcfb3241aa6f2ec8e01e2", // Security Test
]);

const ProductGallary = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    let isMounted = true;

    fetch(PRODUCTS_API_URL, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      cache: "no-store",
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Products request failed with status ${response.status}`,
          );
        }

        return response.json();
      })
      .then((data) => {
        if (!isMounted) {
          return;
        }

        const visibleProducts = Array.isArray(data)
          ? data.filter(
              (product) =>
                product &&
                product._id &&
                !BLOCKED_PRODUCT_IDS.has(String(product._id)),
            )
          : [];

        setProducts(visibleProducts);
      })
      .catch((error) => {
        if (!isMounted || error?.name === "AbortError") {
          return;
        }

        console.error("Unable to load product gallery:", error);
        setProducts([]);
      });

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(135, 124, 201, 0.52), rgba(24, 22, 117, 0.73)), url(${bg})`,
      }}
      className="mx-auto w-full bg-cover bg-fixed bg-center bg-no-repeat shadow-lg"
    >
      <div>
        <div className="p-20 text-center">
          <h1 className="mt-5 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
            Welcome to Product Gallery
          </h1>
        </div>
      </div>

      <div className="mt-5 rounded-xl lg:mt-20">
        <div className="bg-base-200">
          <div className="grid gap-5 p-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {products.map((item) => (
              <ProductItem key={item._id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGallary;
