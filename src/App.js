import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './pages/Home';
import Login from './pages/Login';

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
    ]
  }])
  return (
    <div className='	mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
