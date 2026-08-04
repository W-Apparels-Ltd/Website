import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MeetTheTeam from "./pages/MeetTheTeam";
import "react-toastify/dist/ReactToastify.css";
import AddProduct from "./pages/AddProduct";
import ProductDetails from "./pages/ProductDetails";
import Building from "./pages/Building";
import BuildingDetails from "./pages/BuildingDetails";
import Teams from "./pages/Teams";
import Career from "./pages/Career";
import CareerForm from "./pages/CareerForm";
import CostingForm from "./Costing/CostingForm";
import ProductGallary from "./pages/ProductGallary";
import SafetyMeasures from "./pages/SafetyMeasures";
import MedicalFacilities from "./pages/MedicalFacilities";
import ChildCare from "./pages/ChildCare";
import FireTraining from "./pages/FireTraining";
import FirstAidTraining from "./pages/FirstAidTraining";
import FoodFacilities from "./pages/FoodFacilities";

function App() {
  const blockedProductIds = new Set([
    "651bdc092023da937f74738f",
    "651bdc7e2023da937f747390",
    "6a6dcfb3241aa6f2ec8e01e2",
  ]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/login", element: <Login /> },
        { path: "/meettheteam", element: <MeetTheTeam /> },
        { path: "/addproduct", element: <AddProduct /> },
        { path: "/building", element: <Building /> },
        {
          path: "/wapparelltd",
          element: <BuildingDetails buildingId="wapparelltd" />,
        },
        {
          path: "/quality-apparels",
          element: <BuildingDetails buildingId="quality-apparels" />,
        },
        {
          path: "/3na-fashion",
          element: <BuildingDetails buildingId="3na-fashion" />,
        },
        { path: "/teams", element: <Teams /> },
        { path: "/career", element: <Career /> },
        { path: "/careerForm", element: <CareerForm /> },
        { path: "/costing", element: <CostingForm /> },
        { path: "/productgallery", element: <ProductGallary /> },
        { path: "/safetymeasures", element: <SafetyMeasures /> },
        { path: "/medicalfacilities", element: <MedicalFacilities /> },
        { path: "/childcare", element: <ChildCare /> },
        { path: "/firetraining", element: <FireTraining /> },
        { path: "/fireaidtraining", element: <FirstAidTraining /> },
        { path: "/foodfacilities", element: <FoodFacilities /> },
      ],
    },
    {
      path: "/:id",
      element: <ProductDetails />,
      loader: ({ params }) => {
        if (blockedProductIds.has(params.id)) {
          throw redirect("/productgallery");
        }

        return fetch(
          `https://wapparels-server.vercel.app/products/${params.id}`,
        );
      },
    },
  ]);

  return (
    <div className="mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
