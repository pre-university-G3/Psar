// import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
// import RootLayout from "./components/layout/RootLayout";
import NavbarComponent from "./components/button/navbar/NavbarComponent";
import FooterComponent from "./components/footer/FooterComponent";
import ShoppingCart from "./page/shoppingcart/ShoppingCart";

function App() {
 
  return (
    <>
    <NavbarComponent/>
    <ShoppingCart/> 
    <FooterComponent/>
    </>
  );
}

export default App;
