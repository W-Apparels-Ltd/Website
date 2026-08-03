import React from "react";

const OurCertificatesPic = ({ item }) => {
  return (
    <div className="flex h-[180px] items-center justify-center px-4">
      <img
        src={item.img}
        alt={item.name || ""}
        className="block max-h-[150px] max-w-[150px] object-contain object-center"
      />
    </div>
  );
};

export default OurCertificatesPic;
