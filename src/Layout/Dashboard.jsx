import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import NavbarDashboard from "../pages/Shared/Navbar/NavbarDashboard";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const { user } = useAuth();

  return (
    <div>
      <NavbarDashboard/>
      <div className="flex">
        {/* sidebar */}
        <div className="w-56 min-h-screen bg-[#4e2c2c]  text-brown-50">
          <ul className="menu  font-semibold uppercase space-y-4">
            {isAdmin ? (
              <>
                <div>
                  <NavLink
                    to="/dashboard/"
                    className={" font-semibold uppercase"}
                  >
                    AMin route added
                  </NavLink>
                </div>
              </>
            ) : (
              <>
                <div>{user?.displayName}</div>
                <div className="divider"></div>
                <div>
                  <NavLink
                    to="/dashboard/addPet"
                    className={({ isActive }) =>
                      isActive ? "text-white bg-[#f6ab4a] p-1 rounded" : ""
                    }
                  >
                    Add a Pet
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="/dashboard/myAddedPets"
                    className={({ isActive }) =>
                      isActive ? "text-white bg-[#f6ab4a] p-1 rounded" : ""
                    }
                  >
                    My added Pets
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="/dashboard/adoptionReq"
                    className={({ isActive }) =>
                      isActive ? "text-white bg-[#f6ab4a] p-1 rounded" : ""
                    }
                  >
                    Adoption Request
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="/dashboard/createDonation"
                    className={({ isActive }) =>
                      isActive ? "text-white bg-[#f6ab4a] p-1 rounded" : ""
                    }
                  >
                    Create Donation Campaign
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="/dashboard/MyDonationCampaign"
                    className={({ isActive }) =>
                      isActive ? "text-white bg-[#f6ab4a] p-1 rounded" : ""
                    }
                  >
                    My Donation Campaign
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="/dashboard/myDonations"
                    className={({ isActive }) =>
                      isActive ? "text-white bg-[#f6ab4a] p-1 rounded" : ""
                    }
                  >
                    My Donations
                  </NavLink>
                </div>
              </>
            )}
          </ul>
        </div>
        {/* dashboard content */}
        <div className="flex-1 p-8">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
