import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import { Aboutus } from "./page/aboutus/Aboutus.jsx";
import RootLayout from "./components/layout/RootLayout.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element = {<RootLayout/>}>
        <Route path="/" element={<App/>} />
        <Route path="/aboutus" element={<Aboutus/>} />
        <Route path="/ShoppingCart" element={<shoppingCart/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  </StrictMode>

);
