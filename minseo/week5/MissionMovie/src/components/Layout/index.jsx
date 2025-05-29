import {Outlet} from "react-router-dom";
import Navbar from "../Navbar/index.jsx";
import Sidebar from "../Sidebar/index.jsx";
import{LayoutContainer, BodyContainer, MainContent} from "./styles.js";

const Layout=() =>{
    return(
            <LayoutContainer>
                <Navbar/>
                <BodyContainer>
                    <Sidebar/>
                    <MainContent>
                        <Outlet/>
                    </MainContent>
                </BodyContainer>
            </LayoutContainer>
    );
};
export default Layout;