import React from "react";

const OurCertificatesPic = ({ item }) => {
  return (
    <div className="flex items-center justify-center h-24 w-48 md:h-28 md:w-56 lg:h-32 lg:w-64">
      <img
        src={item.img}
        alt={item.name || ""}
        className="max-h-full max-w-full object-contain"
      />
    </div>
  );
};

export default OurCertificatesPic;