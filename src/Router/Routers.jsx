
import { createBrowserRouter } from 'react-router-dom';
import App from '../App'; 
import About from '../pages/About'; 
import Register from '../pages/Register'; 
import ErrorPage from '../Components/ErrorPage'; 

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    errorElement: <ErrorPage />, 
    children: [
      {
        path: 'about',
        element: <About />, 
      },
      {
        path: 'register',
        element: <Register />, 
      },
    ],
  },
]);

export default router;
