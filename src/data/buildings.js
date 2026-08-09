import wApparelsImage from "../images/factory_purpose/building.jpg";
import qualityApparelsImage from "../images/factory_purpose/888888.jpg";
import threeNaFashionImage from "../images/factory_purpose/333333-1.jpg";

const sharedStandards = [
  {
    title: "Quality focused",
    description:
      "Production activities are aligned with the group commitment to reliable quality and consistent customer service.",
  },
  {
    title: "Responsible manufacturing",
    description:
      "The group emphasizes sustainability, social responsibility and ethical business practices.",
  },
  {
    title: "Export oriented",
    description:
      "Operations support international apparel buyers and export markets across the USA, UK, Europe and Canada.",
  },
];

export const buildings = [
  {
    id: "wapparelltd",
    route: "/wapparelltd",
    number: "01",
    name: "W. Apparels Ltd.",
    shortDescription:
      "The main W. Apparels facility supporting knit and woven garment manufacturing for international markets.",
    overview:
      "W. Apparels Ltd. is a 100% export-oriented knit and woven garment manufacturer. Established in 1992, the company provides apparel manufacturing services with a focus on quality, reliability, sustainability and social responsibility.",
    image: wApparelsImage,

    homePageCardDetails: {
      workforce: 1750,
      monthlyCapacity: "650,000",
      veryShortDesc: "According to Group",
    },

    facts: [
      { label: "Established", value: "1992" },
      { label: "Business", value: "Knit and woven garments" },
      { label: "Monthly capacity", value: "Approx. 650,000 pieces" },
      {
        label: "Factory location",
        value: "295/JA/4, Rayer Bazar, Dhaka-1209",
      },
      { label: "Employees", value: "1,700" },
      { label: "Machines", value: "700" },
    ],

    sections: [
      { title: "Cutting Section", location: "Ground Floor" },
      {
        title: "Sewing Section",
        location: "First, Second and Third Floors",
      },
      {
        title: "Finishing Section",
        location: "First, Second and Third Floors",
      },
      { title: "Sample Section", location: "Fourth Floor" },
      { title: "Finished Goods Section", location: "Fourth Floor" },
      { title: "Display Section", location: "Fourth Floor" },
      { title: "Warehouse", location: "Ground Floor" },
      { title: "Store", location: "Ground Floor" },
    ],

    standards: sharedStandards,
  },

  {
    id: "quality-apparels",
    route: "/quality-apparels",
    number: "02",
    name: "Quality Apparels",
    shortDescription:
      "A sister concern of W. Apparels Ltd. serving the group’s export-oriented apparel operations.",
    overview:
      "Quality Apparels is listed in the official company profile as a sister concern of W. Apparels Ltd. The facility contributes to the group’s apparel manufacturing activities and follows the same focus on quality, reliability and responsible production.",
    image: qualityApparelsImage,

    homePageCardDetails: {
      workforce: 700,
      monthlyCapacity: "250,000",
      veryShortDesc: "According to Group",
    },

    facts: [
      {
        label: "Organization type",
        value: "W. Apparels sister concern",
      },
      {
        label: "Industry",
        value: "Apparel manufacturing",
      },
      {
        label: "Business orientation",
        value: "Export focused",
      },
      {
        label: "Group markets",
        value: "USA, UK, Europe and Canada",
      },
      {
        label: "Machines",
        value: "500",
      },
      {
        label: "Monthly capacity",
        value: "250,000 pieces",
      },
    ],

    sections: [],

    standards: sharedStandards,
  },

  {
    id: "3na-fashion",
    route: "/3na-fashion",
    number: "03",
    name: "3NA Fashion",
    shortDescription:
      "A woven-wear manufacturing concern with an annual production capacity of approximately 2.8 million pieces.",
    overview:
      "3NA Fashion is part of the W. Apparels group of sister concerns. The facility supports woven-wear manufacturing with an annual production capacity of approximately 2.8 million pieces.",
    image: threeNaFashionImage,

    homePageCardDetails: {
      workforce: 500,
      monthlyCapacity: "200,000",
      veryShortDesc: "According to Group",
    },

    facts: [
      {
        label: "Organization type",
        value: "W. Apparels sister concern",
      },
      {
        label: "Product focus",
        value: "Woven wear",
      },
      {
        label: "Business orientation",
        value: "Export focused",
      },
    ],

    sections: [],

    standards: sharedStandards,
  },
];

export function getBuildingById(id) {
  return buildings.find((building) => building.id === id);
}
