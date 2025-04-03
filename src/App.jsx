<<<<<<< HEAD
import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css';
import Home from './page/homepage/Home';

=======
// import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
// import RootLayout from "./components/layout/RootLayout";
import NavbarComponent from "./components/button/navbar/NavbarComponent";
import FooterComponent from "./components/footer/FooterComponent";
import ShoppingCart from "./page/shoppingcart/ShoppingCart";
>>>>>>> a2f42645f39eff1fec03d50f9f40ea46e82ddbde

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <h2>About Us</h2>,
    }
    
     
  ]);

  return (
<<<<<<< HEAD
    <RouterProvider router={router} />
=======
    <>
    <NavbarComponent />
    <ShoppingCart/>
    <FooterComponent/>
    </>
>>>>>>> a2f42645f39eff1fec03d50f9f40ea46e82ddbde
  );
}

export default App;
