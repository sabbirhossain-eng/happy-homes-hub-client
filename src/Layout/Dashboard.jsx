import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";
import { IoPersonCircle } from "react-icons/io5";
import { IoMdAddCircle } from "react-icons/io";
import { MdPets } from "react-icons/md";
import { IoNotificationsCircle } from "react-icons/io5";
import { IoIosCreate } from "react-icons/io";
import { RiAdvertisementFill } from "react-icons/ri";
import { BsFillEaselFill } from "react-icons/bs";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
const Dashboard = () => {
  const isAdmin = useAdmin();
  const { user } = useAuth();

  return (
    <div>
      <div className="flex">
        {/* sidebar */}
        <div className="w-56 pt-24 min-h-screen border-primary-light border-r-4">
          <ul className="menu  font-medium capitalize space-y-4">
            {isAdmin[0] ? (
              <>
                <div className=" flex justify-start">
                  <div className="flex items-center">
                  <MdAdminPanelSettings className="text-xl text-primary-light mr-2" />
                  {user?.displayName} (Admin)
                  </div>
                </div>
                <div className="divider"></div>
                <div className=" flex justify-start">
                  <div className="flex items-center">
                  <FaUsers className="text-xl text-primary-light mr-2" />
                  <NavLink
                    to="/dashboard/admin_users"
                    className={({ isActive }) =>
                      isActive ? "text-primary-light  p-1 rounded" : ""
                    }
                  >
                    Users
                  </NavLink>
                  </div>
                </div>
                <div className=" flex justify-start">
                  <div className="flex items-center">
                  <MdPets className="text-xl text-primary-light mr-2" />
                  <NavLink
                    to="/dashboard/allPets"
                    className={({ isActive }) =>
                      isActive ? "text-primary-light  p-1 rounded" : ""
                    }
                  >
                    All Pets
                  </NavLink>
                  </div>
                </div>
                <div className=" flex justify-start">
                  <div className="flex items-center">
                  <MdPayments className="text-xl text-primary-light mr-2" />
                  <NavLink
                    to="/dashboard/allDonations"
                    className={({ isActive }) =>
                      isActive ? "text-primary-light  p-1 rounded" : ""
                    }
                  >
                    All Donations
                  </NavLink>
                </div>
                </div>
              </>
            ) : (
              <>
                <div className=" flex justify-start">
                  <div className="flex items-center">
                  <IoPersonCircle className="text-xl text-primary-light mr-2" />
                  {" "}
                  {user?.displayName}
                  </div>
                </div>
                <div className="divider"></div>
                <div className=" flex justify-start">
                  <div className="flex items-center">
                    <IoMdAddCircle className="text-xl text-primary-light mr-2" />
                    <NavLink
                      to="/dashboard/addPet"
                      className={({ isActive }) =>
                        isActive ? "text-primary-light  p-1 rounded" : ""
                      }
                    >
                      Add a Pet
                    </NavLink>
                  </div>
                </div>
                <div className=" flex justify-start">
                  <div className="flex items-center">
                    <MdPets className="text-xl text-primary-light mr-2" />
                    <NavLink
                      to="/dashboard/myAddedPets"
                      className={({ isActive }) =>
                        isActive ? "text-primary-light  p-1 rounded" : ""
                      }
                    >
                      My added Pets
                    </NavLink>
                  </div>
                </div>
                <div className=" flex justify-start">
                  <div className="flex items-center">
                    <IoNotificationsCircle className="text-xl text-primary-light mr-2" />
                    <NavLink
                      to="/dashboard/adoptionReq"
                      className={({ isActive }) =>
                        isActive ? "text-primary-light  p-1 rounded" : ""
                      }
                    >
                      Adoption Request
                    </NavLink>
                  </div>
                </div>
                <div className=" flex justify-start">
                  <div className="flex items-center">
                    <IoIosCreate className="text-xl text-primary-light mr-2" />
                    <NavLink
                      to="/dashboard/createDonation"
                      className={({ isActive }) =>
                        isActive ? "text-primary-light  p-1 rounded" : ""
                      }
                    >
                      Create Donation Campaign
                    </NavLink>
                  </div>
                </div>
                <div className=" flex justify-start">
                  <div className="flex items-center">
                    <RiAdvertisementFill className="text-xl text-primary-light mr-2" />
                    <NavLink
                      to="/dashboard/MyDonationCampaign"
                      className={({ isActive }) =>
                        isActive ? "text-primary-light  p-1 rounded" : ""
                      }
                    >
                      My Donation Campaign
                    </NavLink>
                  </div>
                </div>
                <div className=" flex justify-start">
                  <div className="flex items-center">
                    <BsFillEaselFill className="text-xl text-primary-light mr-2" />
                    <NavLink
                      to="/dashboard/myDonations"
                      className={({ isActive }) =>
                        isActive ? "text-primary-light  p-1 rounded" : ""
                      }
                    >
                      My Donations
                    </NavLink>
                  </div>
                </div>
              </>
            )}
          </ul>
        </div>
        {/* dashboard content */}
        <div className="flex-1 p-8 pt-24 min-h-[calc(100vh-68px)]">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
