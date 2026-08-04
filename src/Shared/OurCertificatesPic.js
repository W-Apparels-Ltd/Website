import React from "react";

const OurCertificatesPic = ({ item }) => {
  return (
    <div className="flex h-[100px] items-center justify-center px-4">
      <img
        src={item.img}
        alt={item.name || ""}
        className="block max-h-[120px] max-w-[120px] object-contain object-center"
      />
    </div>
  );
};

export default OurCertificatesPic;
