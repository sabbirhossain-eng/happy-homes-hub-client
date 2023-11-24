import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/Navbar/Navbar";
import Footers from "../pages/Shared/Footer/Footers";

const Main = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footers/>
        </div>
    );
};

export default Main;