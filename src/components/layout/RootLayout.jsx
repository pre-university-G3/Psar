import { Outlet } from "react-router";
import NavbarComponent from "../navbar/NavbarComponent";

export default function RootLayout() {
    return (
        <>
            <NavbarComponent/>
            <Outlet/> 
        </>
    ) 
}