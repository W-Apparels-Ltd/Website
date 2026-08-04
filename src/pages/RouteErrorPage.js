import React from "react";
import { isRouteErrorResponse, useLocation, useRouteError } from "react-router-dom";
import Seo from "../seo/Seo";
import { SITE_NAME } from "../seo/siteConfig";

const RouteErrorPage = () => {
  const error = useRouteError();
  const location = useLocation();
  const status = isRouteErrorResponse(error) ? error.status : 500;
  const isNotFound = status === 404;

  if (process.env.NODE_ENV !== "production") {
    console.error("Route rendering failed:", error);
  }

  return (
    <>
      <Seo
        title={`${isNotFound ? "Page not found" : "Page error"} | ${SITE_NAME}`}
        description="This page is unavailable and should not appear in public search results."
        path={location.pathname}
        noIndex
      />
      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-16 font-Nunito text-white">
      <section className="w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 p-6 text-center shadow-2xl backdrop-blur sm:p-10">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
          Error {status}
        </p>
        <h1 className="mt-4 text-3xl font-bold sm:text-4xl">
          {isNotFound ? "Page not found" : "Something went wrong"}
        </h1>
        <p className="mt-4 leading-7 text-slate-300">
          {isNotFound
            ? "The requested page does not exist."
            : "The page could not be displayed safely. Reload it or return to the home page."}
        </p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => window.location.reload()}
          >
            Reload Page
          </button>
          <a href="/" className="btn btn-neutral">
            Go to Home
          </a>
        </div>
      </section>
    </main>
    </>
  );
};

export default RouteErrorPage;
