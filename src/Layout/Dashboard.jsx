import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";


const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const {user} = useAuth()

    return (
        <div className="flex">
        {/* sidebar */}
        <div className="w-56 min-h-screen bg-[#4e2c2c]  text-white">
          <ul className="menu  font-semibold uppercase">
            {isAdmin ? (
              <>
                <li>
                  <NavLink
                    to="/dashboard/adminHome"
                    className={" font-semibold uppercase"}
                  >
                    
                    Admin Home
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  
                  {user?.displayName}
                </li>
                 <div className="divider"></div>
                <li>
                  <NavLink
                    to="/dashboard/addPet"
                    className={({ isActive }) => (isActive ? "text-white bg-[#f6ab4a] p-1 rounded" : "")}
                  >
                  Add a Pet
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        {/* dashboard content */}
        <div className="flex-1 p-8">
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default Dashboard;