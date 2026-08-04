import "./App.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MeetTheTeam from "./pages/MeetTheTeam";
import "react-toastify/dist/ReactToastify.css";
import AddProduct from "./pages/AddProduct";
import ProductDetails from "./pages/ProductDetails";
import ProductDetailsError from "./pages/ProductDetailsError";
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
import {
  legacyProductRedirectLoader,
  productDetailsLoader,
} from "./services/productApi";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "meettheteam", element: <MeetTheTeam /> },
      { path: "addproduct", element: <AddProduct /> },
      { path: "building", element: <Building /> },
      {
        path: "wapparelltd",
        element: <BuildingDetails buildingId="wapparelltd" />,
      },
      {
        path: "quality-apparels",
        element: <BuildingDetails buildingId="quality-apparels" />,
      },
      {
        path: "3na-fashion",
        element: <BuildingDetails buildingId="3na-fashion" />,
      },
      { path: "teams", element: <Teams /> },
      { path: "career", element: <Career /> },
      { path: "careerForm", element: <CareerForm /> },
      { path: "costing", element: <CostingForm /> },
      { path: "productgallery", element: <ProductGallary /> },
      { path: "safetymeasures", element: <SafetyMeasures /> },
      { path: "medicalfacilities", element: <MedicalFacilities /> },
      { path: "childcare", element: <ChildCare /> },
      { path: "firetraining", element: <FireTraining /> },
      { path: "fireaidtraining", element: <FirstAidTraining /> },
      { path: "foodfacilities", element: <FoodFacilities /> },
    ],
  },
  {
    path: "/productgallery/:id",
    element: <ProductDetails />,
    loader: productDetailsLoader,
    errorElement: <ProductDetailsError />,
  },
  {
    path: "/:id",
    loader: legacyProductRedirectLoader,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

function App() {
  return (
    <div className="mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
