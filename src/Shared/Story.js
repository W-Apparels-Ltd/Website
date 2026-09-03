import React from "react";
import story from "../data/story";

const Story = () => {
  const {
    id,
    title,
    description,
    background,
    images,
    corporateProfile,
  } = story;

  return (
    <div id={id}>
      <div
        style={{
          backgroundImage: `${background.overlay}, url(${background.image})`,
        }}
        className="hero min-h-screen w-full bg-cover bg-fixed bg-center bg-no-repeat px-5 py-5 mx-auto lg:px-20 lg:py-0"
      >
        <div className="flex flex-col text-white font-Nunito lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col items-center">
            <img
              src={images.factory.src}
              alt={images.factory.alt}
              className="mask mask-hexagon relative h-44 w-44 object-cover shadow-2xl transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 lg:-bottom-[40px] lg:-right-[130px] lg:h-60 lg:w-60"
            />

            <div className="flex lg:hidden">
              <img
                src={images.facility.src}
                alt={images.facility.alt}
                className="mask mask-hexagon relative -left-[15px] -top-[30px] h-40 w-40 object-cover shadow-2xl transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 md:h-48 md:w-48"
              />

              <img
                src={images.productionFloor.src}
                alt={images.productionFloor.alt}
                className="mask mask-hexagon relative -right-[15px] -top-[30px] h-40 w-40 object-cover shadow-2xl transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 md:h-48 md:w-48"
              />
            </div>

            <div className="hidden lg:block">
              <img
                src={images.facility.src}
                alt={images.facility.alt}
                className="mask mask-hexagon h-44 w-44 object-cover shadow-2xl transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 lg:h-60 lg:w-60"
              />

              <img
                src={images.productionFloor.src}
                alt={images.productionFloor.alt}
                className="mask mask-hexagon relative my-5 h-44 w-44 object-cover shadow-2xl transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 lg:-right-[130px] lg:-top-[40px] lg:my-0 lg:h-60 lg:w-60"
              />
            </div>
          </div>

          <div className="lg:w-3/5">
            <h1 className="text-2xl font-bold md:text-3xl lg:text-5xl">
              {title}
            </h1>

            <p className="py-6 text-3xl text-justify">
              {description}
            </p>

            <div className="flex justify-end">
              <a
                href={corporateProfile.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={corporateProfile.ariaLabel}
                className="group relative flex select-none items-center gap-3 overflow-hidden rounded-lg bg-[#000066] px-7 py-3 pr-[72px] text-center align-middle text-sm font-bold uppercase text-white shadow-md shadow-light-blue-500/20 transition-all hover:shadow-lg active:opacity-[0.85]"
                data-ripple-light="true"
              >
                {corporateProfile.label}

                <span className="absolute right-0 grid h-full w-12 place-items-center bg-[#00004d] transition-colors group-hover:bg-[#000066]">
                  <img
                    src={corporateProfile.arrowIcon}
                    alt=""
                    aria-hidden="true"
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;