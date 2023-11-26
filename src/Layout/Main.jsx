import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../pages/Shared/Navbar/Navbar";
import Footers from "../pages/Shared/Footer/Footers";

const Main = () => {
  const location = useLocation();
  const hidden =
    location.pathname.includes("/login") ||
    location.pathname.includes("/signUp");

  return (
    <div>
      {hidden || <NavBar />}
      <div className="pt-24 min-h-[calc(100vh-68px)]">
        <Outlet />
      </div>
      {hidden || <Footers />}
    </div>
  );
};

export default Main;
