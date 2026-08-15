import React from "react";

const OurCertificatesPic = ({ item }) => {
  return (
    <div className="flex h-[180px] items-center justify-center px-4 md:h-[220px]">
      <img
        src={item.img}
        alt={item.name || ""}
        className="
          block
          max-h-[180px]
          max-w-[180px]
          object-contain
          object-center
          md:max-h-[210px]
          md:max-w-[210px]
        "
      />
    </div>
  );
};

export default OurCertificatesPic;