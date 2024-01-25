import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './pages/Home';
import Login from './pages/Login';
import MeetTheTeam from './pages/MeetTheTeam';
import 'react-toastify/dist/ReactToastify.css';
import AddProduct from './pages/AddProduct';
import ProductDetails from './pages/ProductDetails';
import Building from './pages/Building';
import Teams from './pages/Teams';
import Career from './pages/Career';
import CareerForm from './pages/CareerForm';
import Costing from './Shared/Costing';
import CostingForm from './Costing/CostingForm';
import PrintFast from './Costing/PrintFast';
import ProductGallary from './pages/ProductGallary';
import SafetyMeasures from './pages/SafetyMeasures';
import MedicalFacilities from './pages/MedicalFacilities';
import ChildCare from './pages/ChildCare';
import FireTraining from './pages/FireTraining';
import FirstAidTraining from './pages/FirstAidTraining';
import FoodFacilities from './pages/FoodFacilities';
import CareerForm1 from './pages/CareerForm1';
import CareerForm2 from './pages/CareerForm2';


function App() {
  const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      
      {
        path:'/addproduct',
        element:<AddProduct></AddProduct>
      },
      
      {
        path:'/teams',
        element:<Teams></Teams>
      },
      
      
      {
        path:'/costing',
        element:<CostingForm></CostingForm>
      },
      
      
      

    ],
  },
  {
    path:'/:id',
    element:<ProductDetails></ProductDetails>,
    loader: ({params})=> fetch(`https://wapparels-server.vercel.app/products/${params.id}`)
  },
  {
    path:'/meettheteam',
    element:<MeetTheTeam></MeetTheTeam>
  },
  {
    path:'/building',
    element:<Building></Building>
  },
  {
    path:'/productgallery',
    element:<ProductGallary></ProductGallary>
  },
  {
    path:'/career',
    element:<Career></Career>
  },
  {
    path:'/careerForm',
    element:<CareerForm></CareerForm>
  },
  {
    path:'/careerForm1',
    element:<CareerForm1></CareerForm1>
  },
  {
    path:'/careerForm2',
    element:<CareerForm2></CareerForm2>
  },
  {
    path:'/safetymeasures',
    element:<SafetyMeasures></SafetyMeasures>
  },
  {
    path:'/medicalfacilities',
    element:<MedicalFacilities></MedicalFacilities>
  },
  {
    path:'/childcare',
    element:<ChildCare></ChildCare>
  },
  {
    path:'/firetraining',
    element:<FireTraining></FireTraining>
  },
  {
    path:'/firstaidtraining',
    element:<FirstAidTraining></FirstAidTraining>
  },
  {
    path:'/foodfacilities',
    element:<FoodFacilities></FoodFacilities>
  },
])
  return (
    <div className='	mx-auto'>
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
