import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className="mx-auto w-9/12">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;