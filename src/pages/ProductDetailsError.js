import React from "react";
import {
  Link,
  isRouteErrorResponse,
  useRouteError,
  useLocation,
} from "react-router-dom";
import bg from "../images/factory_purpose/1.jpg";
import Nav from "./Nav";
import Seo from "../seo/Seo";
import { SITE_NAME } from "../seo/siteConfig";

const ProductDetailsError = () => {
  const error = useRouteError();
  const location = useLocation();
  const isNotFound = isRouteErrorResponse(error) && error.status === 404;

  return (
    <>
      <Seo
        title={`${isNotFound ? "Product unavailable" : "Unable to load product"} | ${SITE_NAME}`}
        description="This product page is unavailable and should not appear in public search results."
        path={location.pathname}
        noIndex
      />
      <Nav />
      <main
        style={{ backgroundImage: `url(${bg})` }}
        className="min-h-screen bg-cover bg-center font-Nunito"
      >
        <div className="flex min-h-screen items-center justify-center bg-black/75 px-4 py-24">
          <section className="w-full max-w-lg rounded-xl bg-base-100 p-8 text-center text-base-content shadow-2xl">
            <p className="text-sm font-bold uppercase tracking-wider text-primary">
              {isNotFound ? "Product unavailable" : "Unable to load product"}
            </p>
            <h1 className="mt-3 text-3xl font-bold">
              {isNotFound
                ? "This product is no longer available."
                : "The product page could not be loaded."}
            </h1>
            <p className="mt-4 text-sm text-gray-600">
              {isNotFound
                ? "It may have been removed, hidden, or the address may be incorrect."
                : "Please return to the gallery and try again."}
            </p>
            <Link to="/productgallery" className="btn btn-primary mt-6">
              Back to Product Gallery
            </Link>
          </section>
        </div>
      </main>
    </>
  );
};

export default ProductDetailsError;
