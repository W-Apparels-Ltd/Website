import factoryImage from "../images/factory_purpose/ourstory-300x225-1.jpg";
import backgroundImage from "../images/factory_purpose/1.jpg";
import productionFloorImage from "../images/Our1 (1).jpg";
import productionFacilityImage from "../images/our2 (1).jpg";
import arrowIcon from "../images/Untitled__1_-removebg-preview.png";

const story = {
  id: "aboutus",

  title: "Our Story",

  description:
    "Starting as W. Apparels in 1992 and further expanding into W. Apparels Ltd. in 2019, we are a garments based company maintaining a consistent contribution in readymade garments export. Our team comprises of well experienced promoters, quality control agents, machinists, commercial supervisors and production labor. Our goals are to maintain better foreign relations and establish a research intensive environment for garments products, maintaining consistent customer satisfaction and using updated machinery. Under the alliance of Bangladesh Garments Manufacturers and Exporters’ Association (BGMEA), we envision a sustainable future of RMG products using technology and a smooth international market.",

  background: {
    image: backgroundImage,
    overlay:
      "linear-gradient(to bottom, rgba(135, 124, 201, 0.52), rgba(24, 22, 117, 0.73))",
  },

  images: {
    factory: {
      src: factoryImage,
      alt: "W. Apparels factory",
    },

    facility: {
      src: productionFacilityImage,
      alt: "W. Apparels production facility",
    },

    productionFloor: {
      src: productionFloorImage,
      alt: "W. Apparels production floor",
    },
  },

  corporateProfile: {
    label: "View Corporate Profile",
    url: "/Business Profile Of W. Apparels Ltd..pdf",
    ariaLabel: "View W. Apparels corporate profile PDF in a new tab",
    arrowIcon,
  },
};

export default story;