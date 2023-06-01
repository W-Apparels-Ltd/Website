import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './pages/Home';
import Login from './pages/Login';
import MeetTheTeam from './pages/MeetTheTeam';

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
    ]
  }])
  return (
    <div className='	mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
