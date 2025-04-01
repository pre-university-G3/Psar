import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import RootLayout from "./components/layout/RootLayout";
import NavbarComponent from "./components/button/navbar/NavbarComponent";
import ShoppingCart from "./page/shoppingcart/ShoppingCart";

function App() {
 
  return (
    <>
    <NavbarComponent />
    <ShoppingCart/>
    </>
  );
}

export default App;
