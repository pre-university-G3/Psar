import { Outlet } from "react-router";
import { NavbarComponent } from "../button/navbar/NavbarComponent";

export default function RootLayout() {
    return (
        <>
        <NavbarComponent/>
        <Outlet/> 
        </>
    ) 
}