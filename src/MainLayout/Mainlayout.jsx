import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Mainlayout = () => {
    return (
        <div className="w-11/12 mx-auto max-w-7xl">
            {/* Navbar section */}
            <Navbar></Navbar>
        
            {/* Daynamic Section */}
            <div className="min-h-[calc(100vh-292px)]">
                <Outlet></Outlet>
            </div>
            {/* Footer Section */}
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;