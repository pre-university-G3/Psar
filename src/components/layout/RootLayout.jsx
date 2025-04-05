import { Outlet } from "react-router";
import NavbarComponent from "../navbar/NavbarComponent";
import FooterComponent from "../footer/FooterComponent";
import { BrowserRouter, Routes, Route } from "react-router";


export default function RootLayout() {
    return (
        <>
            <NavbarComponent/>
            <Outlet/> 
            <FooterComponent/>
        </>
    ) 
}