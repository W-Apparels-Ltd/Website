import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './pages/Home';

function App() {
  const router=createBrowserRouter([{
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      }
    ]
  }])
  return (
    <div  className='	mx-auto'>
      <RouterProvider router={router}></RouterProvider>
     </div>
  );
}

export default App;
