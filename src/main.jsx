import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { NavbarComponent } from "./components/button/navbar/NavbarComponent.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import { Aboutus } from "./page/aboutus/Aboutus.jsx";
import RootLayout from "./components/layout/RootLayout.jsx";
<<<<<<< HEAD
import Home from "./page/aboutus/homepage/Home.jsx";
=======
import Home from "./page/homepage/Home.jsx";
>>>>>>> da1550b23a6d4093f7bc9c02496d1cd5cda6e435


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element = {<RootLayout/>}>
        <Route path="/homepage" element={<Home/>} />
        <Route path="/aboutus" element={<Aboutus/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  </StrictMode>

);
