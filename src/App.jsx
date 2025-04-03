import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css';
import Home from './page/homepage/Home';



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <h2>About Us</h2>,
    },
    
     
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
