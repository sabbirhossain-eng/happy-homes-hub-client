import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../pages/Shared/Navbar/Navbar";
import Footers from "../pages/Shared/Footer/Footers";

const Main = () => {
    const location = useLocation();
  console.log(location);
  const hidden = location.pathname.includes('/login') || location.pathname.includes('/signUp');

    return (
        <div>
            {hidden || <NavBar/>}
            <Outlet/>
            {hidden || <Footers/>}
        </div>
    );
};

export default Main;