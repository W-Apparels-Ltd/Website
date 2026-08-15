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

const OurCertificates = () => {
  const allimg = [
    {
      _id: 1,
      img: client1,
    },
    {
      _id: 2,
      img: client2,
    },
    {
      _id: 3,
      img: client3,
    },
    {
      _id: 4,
      img: client4,
    },
    {
      _id: 5,
      img: client5,
    },
    {
      _id: 6,
      img: client6,
    },
    {
      _id: 7,
      img: client7,
    },
    {
      _id: 8,
      img: client8,
    },
  ];

  const firstRowCertificates = allimg.slice(0, 4);
  const secondRowCertificates = allimg.slice(4);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 7,
      partialVisibilityGutter: 40,
    },

    desktop: {
      breakpoint: { max: 1024, min: 701 },
      items: 7,
      partialVisibilityGutter: 40,
    },

    tablet: {
      breakpoint: { max: 700, min: 464 },
      items: 4,
      partialVisibilityGutter: 30,
    },

    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <div id="ourcertificates" className="bg-base-100 py-20 font-Nunito">
      <div>
        {/* Heading */}
        <div className="text-center lg:p-15">
          <h1 className="text-2xl font-bold text-primary md:text-3xl lg:text-4xl">
            Our Certificates
          </h1>
        </div>

        <div className="my-10">
          <Carousel
            responsive={responsive}
            infinite
            autoPlay
            autoPlaySpeed={1}
            transitionDuration={10000}
            customTransition="transform 10s linear"
            arrows={false}
            draggable={false}
            swipeable={false}
            keyBoardControl={false}
          >
            {allimg.map((item) => (
              <OurCertificatesPic key={item._id} item={item} />
            ))}
          </Carousel>
        </div>

        <div className="my-10">
          <Carousel
            responsive={responsive}
            infinite
            autoPlay
            autoPlaySpeed={1}
            transitionDuration={10000}
            customTransition="transform 10s linear"
            arrows={false}
            draggable={false}
            swipeable={false}
            keyBoardControl={false}
            rtl
          >
            {allimg.map((item) => (
              <OurCertificatesPic key={item._id} item={item} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default OurCertificates;
