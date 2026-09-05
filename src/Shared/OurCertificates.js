import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import client1 from "../images/Certificates/1.jpg";
import client2 from "../images/Certificates/2.jpg";
import client3 from "../images/Certificates/3.jpg";
import client4 from "../images/Certificates/4.jpg";
import client5 from "../images/Certificates/5.jpg";
import client6 from "../images/Certificates/6.jpeg";
import client7 from "../images/Certificates/7.png";
import client8 from "../images/Certificates/8.png";

import OurCertificatesPic from "./OurCertificatesPic";

const allimg = [
  { _id: 1, img: client1, name: "Certificate 1" },
  { _id: 2, img: client2, name: "Certificate 2" },
  { _id: 3, img: client3, name: "Certificate 3" },
  { _id: 4, img: client4, name: "Certificate 4" },
  { _id: 5, img: client5, name: "Certificate 5" },
  { _id: 6, img: client6, name: "Certificate 6" },
  { _id: 7, img: client7, name: "Certificate 7" },
  { _id: 8, img: client8, name: "Certificate 8" },
];

const responsive = {
  extraLargeDesktop: {
    breakpoint: { max: 4000, min: 1600 },
    items: 6,
  },

  largeDesktop: {
    breakpoint: { max: 1600, min: 1280 },
    items: 5,
  },

  desktop: {
    breakpoint: { max: 1280, min: 1024 },
    items: 4,
  },

  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },

  smallTablet: {
    breakpoint: { max: 768, min: 520 },
    items: 2,
  },

  mobile: {
    breakpoint: { max: 520, min: 0 },
    items: 1,
  },
};

const OurCertificates = () => {
  return (
    <section
      id="ourcertificates"
      className="overflow-hidden bg-base-100 py-10 font-Nunito sm:py-12 md:py-14 lg:py-16 xl:py-20"
    >
      <div className="mx-auto w-full">
        <div className="mb-6 px-4 text-center sm:mb-8 md:mb-10 lg:mb-12">
          <h1 className="text-2xl font-bold text-primary sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[44px]">
            Our Certificates
          </h1>
        </div>

        <div className="w-full">
          <Carousel
            responsive={responsive}
            infinite
            autoPlay
            autoPlaySpeed={1}
            transitionDuration={10000}
            customTransition="transform 10s linear"
            arrows={false}
            draggable
            swipeable
            keyBoardControl
            pauseOnHover
            minimumTouchDrag={50}
            itemClass="px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10"
          >
            {allimg.map((item) => (
              <OurCertificatesPic key={item._id} item={item} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default OurCertificates;