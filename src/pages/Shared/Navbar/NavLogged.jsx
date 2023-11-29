import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router-dom";
import { Drawer, IconButton, Typography } from "@material-tailwind/react";

const NavLogged = () => {
  const { user, logOut } = useAuth();
  const [openRight, setOpenRight] = useState(false);
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  const handleLogOut = () => {
    logOut().then().catch();
  };

  return (
    <div>
      <div>
        {user ? (
          <div>
            <div onClick={openDrawerRight}>
              {user?.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-10 rounded-full"
                />
              ) : (
                <img
                  src=" https://i.ibb.co/Ytnx3qf/happy.jpg"
                  alt="User"
                  className="w-10 rounded-full"
                />
              )}
            </div>
            <div>
              {openRight && (
                <Drawer
                  placement="right"
                  open={openRight}
                  onClose={closeDrawerRight}
                  className="p-4 mt-20 bg-[#4e2c2c] "
                >
                  <div className="space-y-4">
                    <div className="mb-6 flex items-center justify-between">
                      <Typography variant="h4">{user?.displayName}</Typography>
                      <IconButton
                        variant="text"
                        color="yellow"
                        onClick={closeDrawerRight}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </IconButton>
                    </div>
                    <div className="bg-[#4e2c2c] text-center rounded-md">
                      <Typography variant="h4" className=" font-normal ">
                        Your Profile
                      </Typography>
                    </div>
                    <div className="bg-[#4e2c2c] text-center rounded-md">
                      <Typography variant="h4" className=" font-normal ">
                        {user?.email}
                      </Typography>
                    </div>
                    <div className="bg-[#4e2c2c] text-center rounded-md">
                      <Link to="/dashboard">
                        <Typography variant="h4" className=" font-normal ">
                          Dashboard
                        </Typography>
                      </Link>
                    </div>
                    <div onClick={handleLogOut}>
                      <button className="btn btn-sm bg-[#4e2c2c] text-white">
                        Log Out
                      </button>
                    </div>
                  </div>
                </Drawer>
              )}
            </div>
          </div>
        ) : (
          <button className="px-2 rounded-md py-1 capitalize font-semibold text-lg bg-[#4e2c2c] text-white hover:bg-slate-100 hover:text-[##4e2c2c]">
            <Link to="/login">Login</Link>
          </button>
        )}
      </div>
    </div>
  );
};
export default NavLogged;
