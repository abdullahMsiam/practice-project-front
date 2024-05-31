import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div className="">
            <Navbar />
            <div className="mx-auto w-11/12 md:w-9/12">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;