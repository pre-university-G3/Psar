import { Outlet } from "react-router";
import NavbarComponent from "../navbar/NavbarComponent";
import FooterComponent from "../footer/FooterComponent";

export default function RootLayout() {
    return (
        <>
            <NavbarComponent/>
            <Outlet/> 
            <FooterComponent/>
        </>
    ) 
}