import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const Main = () => {
    return (
        <div>
            {/* NAVBAR */}
            <Navbar></Navbar>

            {/* Outlet */}
            <Outlet></Outlet>

            {/* Footer */}
            
        </div>
    );
};

export default Main;