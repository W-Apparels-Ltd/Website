import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow from "../images/Untitled__1_-removebg-preview.png";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";
import { fetchProducts } from "../services/productApi";

const ProductSlider = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    let isActive = true;

    const loadProducts = async () => {
      try {
        const productList = await fetchProducts({
          signal: controller.signal,
        });

        if (isActive) {
          setProducts(productList);
        }
      } catch (error) {
        if (!isActive || error?.name === "AbortError") {
          return;
        }

        console.error("Unable to load product slider:", error);
        setProducts([]);
      }
    };

    loadProducts();

    return () => {
      isActive = false;
      controller.abort();
    };
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <div id="products" className="bg-[#e5e4e2] lg:px-20">
      <div className="pb-20 font-Nunito">
        <div className="p-10 text-center">
          <h1 className="text-2xl font-bold text-primary md:text-3xl lg:text-5xl">
            Apparel Products
          </h1>
        </div>

        {products.length > 0 && (
          <Carousel
            responsive={responsive}
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={2000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect
            infinite
            itemClass=""
            keyBoardControl
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            swipeable
          >
            {products.map((item) => (
              <ProductItem key={item._id} item={item} />
            ))}
          </Carousel>
        )}

        <div className="mt-10 flex justify-center">
          <Link
            to="/productgallery"
            className="group relative flex select-none items-center gap-3 overflow-hidden rounded-lg bg-[#000066] py-3 px-7 pr-[72px] text-center align-middle text-sm font-bold uppercase text-white shadow-md shadow-light-blue-500/20 transition-all hover:shadow-lg hover:shadow-light-blue-500/40 active:opacity-[0.85]"
            data-ripple-light="true"
          >
            View Product Gallery
            <span className="absolute right-0 grid h-full w-12 place-items-center bg-[#00004d] transition-colors group-hover:bg-[#000066]">
              <img src={arrow} alt="" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
