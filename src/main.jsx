import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
// import Aboutus from "./page/aboutus/Aboutus.jsx";
import RootLayout from "./components/layout/RootLayout.jsx";
import Home from "./page/homepage/Home.jsx";
import ShoppingCart from "./page/shoppingcart/ShoppingCart.jsx";
import ProductListing from "./page/productlisting/ProductListing.jsx";
import ProductDetail from "./page/productdetail/ProductDetail.jsx";
import PrivacyPolicy from "./page/privacypolicy/PrivacyPolicy.jsx";
import SignIn from "./page/signin/SignIn.jsx";
import CreateAccount from "./page/createaccount/CreateAccount.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element = {<RootLayout/>}>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/aboutus" element={<Aboutus/>} /> */}
        <Route path="/shopping-cart" element={<ShoppingCart/>}/>
        <Route path="/product-listing" element={<ProductListing/>}/>
        <Route path="/product-detail" element={<ProductDetail/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/create-account" element={<CreateAccount/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  </StrictMode>
);
