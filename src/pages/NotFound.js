import React from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-slate-100 px-4 py-16 font-Nunito">
      <section className="w-full max-w-2xl rounded-2xl bg-white p-6 text-center shadow-xl sm:p-10">
        <p className="text-7xl font-black leading-none text-primary sm:text-8xl">
          404
        </p>
        <h1 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-slate-600">
          The page may have been removed, renamed, or the address may be
          incorrect.
        </p>
        <p className="mx-auto mt-3 max-w-full overflow-hidden text-ellipsis whitespace-nowrap rounded-lg bg-slate-100 px-4 py-3 font-mono text-sm text-slate-600">
          {location.pathname}
        </p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/" className="btn btn-primary">
            Go to Home
          </Link>
          <Link to="/productgallery" className="btn btn-neutral">
            View Products
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
