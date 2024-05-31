import { Link, Outlet } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";

const DashboardLayout = () => {
    const [toggle, setToggle] = useState(false);
    const openDrawer = () => {
        setToggle(!toggle);
        console.log("open drawer");
    }
    return (
        <div >
            <div>
                <button className="md:hidden" onClick={openDrawer}> <CiMenuBurger /> </button>
            </div>
            <div className="grid grid-cols-12 gap-4">
                <div className={` col-span-2 ${toggle ? "block" : "hidden"} md:block min-h-screen bg-base-200  p-2 md:p-7`}>
                    <ul>
                        <li className="btn-link btn"> <Link to={"/"}>Home</Link> </li>
                    </ul>
                </div>
                <div className="col-span-10">
                    <Outlet />
                </div>
            </div>


        </div>
    );
};

export default DashboardLayout;