import Footer from "./Footer";
import Header from "./Header";
import {Outlet} from "react-router-dom"

function MainLayout() {
    return(
       <>
        <Header />
            <Outlet />
        <Footer />
       </>
    )
}

export default MainLayout;