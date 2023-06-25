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
        path:'/meettheteam',
        element:<MeetTheTeam></MeetTheTeam>
      },
      {
        path:'/addproduct',
        element:<AddProduct></AddProduct>
      },
      {
        path:'/:id',
        element:<ProductDetails></ProductDetails>,
        loader: ({params})=> fetch(`https://wapparels-server.vercel.app/products/${params.id}`)
      },
      {
        path:'/building',
        element:<Building></Building>
      },
      {
        path:'/teams',
        element:<Teams></Teams>
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
        path:'/costing',
        element:<CostingForm></CostingForm>
      },
      {
        path:'/productgallery',
        element:<ProductGallary></ProductGallary>
      },
      

    ],
  }])
  return (
    <div className='	mx-auto'>
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
