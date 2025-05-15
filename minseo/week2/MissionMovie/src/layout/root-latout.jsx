import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import SideVar from "../components/Sidebar.jsx";
const RootLayout=() =>{
    return(
        <>
            <Navbar/>
            <SideVar/>
            <Outlet/>
        </>
    );
};

export default RootLayout;