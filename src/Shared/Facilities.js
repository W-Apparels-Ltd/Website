import React from "react";
import product1 from "../images/factory_purpose/trainnig.jpg";
import product2 from "../images/factory_purpose/medical (1).jpg";
import product3 from "../images/factory_purpose/cc.jpg";
import product4 from "../images/factory_purpose/66666-1.png";
import product5 from "../images/factory_purpose/777777.jpg";
import product6 from "../images/factory_purpose/medical (2).jpg";

const Facilities = () => {
  return (
    <div
      id="facilities"
      className="min-h-screen bg-base-100 pb-10 font-Nunito lg:px-20"
    >
      <div className="pb-20">
        <div className="pb-10 text-center">
          <h1 className="text-2xl font-bold text-primary md:text-3xl lg:text-4xl">
            Facilities
          </h1>
        </div>

        <div className="grid gap-8 px-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="card w-50 bg-base-100 shadow-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            <figure>
              <img className="w-full" src={product1} alt="Safety Measures" />
            </figure>
            <div className="my-3">
              <h2 className="card-title justify-center text-md font-bold">
                Safety Measures
              </h2>
            </div>
          </div>

          <div className="card w-50 bg-base-100 shadow-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            <figure>
              <img className="w-full" src={product2} alt="Medical Facilities" />
            </figure>
            <div className="my-3">
              <h2 className="card-title justify-center text-md font-bold">
                Medical Facilities
              </h2>
            </div>
          </div>

          <div className="card w-50 bg-base-100 shadow-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            <figure>
              <img className="w-full" src={product3} alt="Child Care" />
            </figure>
            <div className="my-3">
              <h2 className="card-title justify-center text-md font-bold">
                Child Care
              </h2>
            </div>
          </div>

          <div className="card w-50 bg-base-100 shadow-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            <figure>
              <img className="w-full" src={product4} alt="Fire Training" />
            </figure>
            <div className="my-3">
              <h2 className="card-title justify-center text-md font-bold">
                Fire Training
              </h2>
            </div>
          </div>

          <div className="card w-50 bg-base-100 shadow-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            <figure>
              <img className="w-full" src={product5} alt="First Aid Training" />
            </figure>
            <div className="my-3">
              <h2 className="card-title justify-center text-md font-bold">
                First Aid Training
              </h2>
            </div>
          </div>

          <div className="card w-50 bg-base-100 shadow-xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            <figure>
              <img className="w-full" src={product6} alt="Food Facilities" />
            </figure>
            <div className="my-3">
              <h2 className="card-title justify-center text-md font-bold">
                Food Facilities
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;