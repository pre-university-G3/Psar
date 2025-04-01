import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { NavbarComponent } from "./components/button/navbar/NavbarComponent.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import { Aboutus } from "./page/aboutus/Aboutus.jsx";
import RootLayout from "./components/layout/RootLayout.jsx";
import Home from "./page/homepage/Home.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element = {<RootLayout/>}>
        <Route path="/homepage" element={<Home/>} />
        <Route path="/aboutus" element={<Aboutus/>} />
        <Route path="/payment" element= {<Payment/>}/>
        <Route path="/productlisting" element= {<ProductListing/>}/>
        <Route path="/shoppingcart" element= {<ShoppingCart/>}/>
        <Route path="/signin" element= {<SignIn/>}/>
        <Route path="/privacypolicy" element= {<PrivacyPolicy/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  </StrictMode>

);
