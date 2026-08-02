import './App.css';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './pages/Home';
import Login from './pages/Login';
import MeetTheTeam from './pages/MeetTheTeam';
import 'react-toastify/dist/ReactToastify.css';
import AddProduct from './pages/AddProduct';
import ProductDetails from './pages/ProductDetails';
import Building from './pages/Building';
import BuildingDetails from './pages/BuildingDetails';
import Teams from './pages/Teams';
import Career from './pages/Career';
import CareerForm from './pages/CareerForm';
import CostingForm from './Costing/CostingForm';
import ProductGallary from './pages/ProductGallary';
import SafetyMeasures from './pages/SafetyMeasures';
import MedicalFacilities from './pages/MedicalFacilities';
import ChildCare from './pages/ChildCare';
import FireTraining from './pages/FireTraining';
import FirstAidTraining from './pages/FirstAidTraining';
import FoodFacilities from './pages/FoodFacilities';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/login', element: <Login /> },
        { path: '/meettheteam', element: <MeetTheTeam /> },
        { path: '/addproduct', element: <AddProduct /> },
        { path: '/building', element: <Building /> },
        { path: '/BUILDING1', element: <BuildingDetails buildingId="building1" /> },
        { path: '/BUILDING2', element: <BuildingDetails buildingId="building2" /> },
        { path: '/BUILDING3', element: <BuildingDetails buildingId="building3" /> },
        { path: '/building1', element: <Navigate to="/BUILDING1" replace /> },
        { path: '/building2', element: <Navigate to="/BUILDING2" replace /> },
        { path: '/building3', element: <Navigate to="/BUILDING3" replace /> },
        { path: '/teams', element: <Teams /> },
        { path: '/career', element: <Career /> },
        { path: '/careerForm', element: <CareerForm /> },
        { path: '/costing', element: <CostingForm /> },
        { path: '/productgallery', element: <ProductGallary /> },
        { path: '/safetymeasures', element: <SafetyMeasures /> },
        { path: '/medicalfacilities', element: <MedicalFacilities /> },
        { path: '/childcare', element: <ChildCare /> },
        { path: '/firetraining', element: <FireTraining /> },
        { path: '/fireaidtraining', element: <FirstAidTraining /> },
        { path: '/foodfacilities', element: <FoodFacilities /> },
      ],
    },
    {
      path: '/:id',
      element: <ProductDetails />,
      loader: ({ params }) => fetch(`https://wapparels-server.vercel.app/products/${params.id}`),
    },
  ]);

  return (
    <div className="mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
