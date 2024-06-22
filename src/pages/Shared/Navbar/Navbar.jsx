import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../assets/Logo/Happy Homes HUb.png";
import "./navbar.css";
import useAuth from "../../../Hooks/useAuth";
import useTheme from "../../../Provider/ThemeContext";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useEffect, useState } from "react";
const NavBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, logOut } = useAuth();
  const { themeMode, darkTheme, lightTheme } = useTheme();
  const [openNav, setOpenNav] = useState(false);

  const handleLogOut = () => {
    logOut();
    navigate("/login");
  };

  // handle theme toggle
  const handleToggle = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography className="nav-link relative">
        <Link
          className={` ${
            pathname === "/" ? "text-primary-light font-bold" : "text-gray-700 dark:text-gray-200"
          } no-underline font-semibold text-lg  lg:hover:bg-none text-gray-800 dark:hover:text-white p-4 lg:p-0 inline-block rounded-[10px] w-full`}
          to={"/"}
        >
          Home 
        </Link>
      </Typography>
      <Typography className="nav-link relative">
        <Link
          className={` ${
            pathname === "/petListing"
              ? "text-primary-light font-bold"
              : "text-gray-700 dark:text-gray-200"
          } no-underline font-semibold text-lg text-gray-800 dark:hover:text-white p-4 lg:p-0 inline-block rounded-[10px] w-full`}
          to={"/petListing"}
        >
          Pet Listing
        </Link>
      </Typography>
      <Typography className="nav-link relative">
        <Link
          className={` ${
            pathname === "/donationCampaigns"
              ? "text-primary-light font-bold"
              : "text-gray-700 dark:text-gray-200"
          } no-underline font-semibold text-lg  lg:hover:bg-none text-gray-800 dark:hover:text-white p-4 lg:p-0 inline-block rounded-[10px] w-full`}
          to={"/donationCampaigns"}
        >
          Donation Campaigns
        </Link>
      </Typography>
      <Typography className="nav-link relative">
        <Link
          className={` ${
            pathname === "/" ? "text-primary-light font-bold" : "text-gray-700 dark:text-gray-200"
          } no-underline font-semibold text-lg  lg:hover:bg-none text-gray-800  dark:hover:text-white p-4 lg:p-0 inline-block rounded-[10px] w-full`}
          to={"/contactUs"}
        >
          Contact Us
        </Link>
      </Typography>
    </ul>
  );
  return (
    <div>
        <Navbar className="fixed z-10 max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-white dark:bg-primary-dark mx-auto">
          <div className="flex items-center justify-between text-nowrap">
            <Typography
              as="a"
              href="#"
              className="mr-4 cursor-pointer py-1.5 flex-1"
            >
              <img src={logo} alt="logo" />
            </Typography>
            <div className="flex items-center gap-4 flex-1">
              <div className="mr-4 hidden lg:block">{navList}</div>
              <div className="flex items-center gap-x-1 text-gray-800 dark:text-gray-200">
                <div className="hidden lg:block ">
                  <label className="swap swap-rotate mr-4">
                    <input
                      type="checkbox"
                      onChange={handleToggle}
                      checked={themeMode === "dark"}
                    />

                    {/* sun icon */}
                    <svg
                      className="swap-on fill-current w-8 h-8 ml-3 dark:text-in-dark"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>

                    {/* moon icon */}
                    <svg
                      className="swap-off fill-current ml-3 w-8 h-8 dark:text-in-dark"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                  </label>
                </div>
                {/* Login User */}
                <div className="hidden lg:block ">
                  {user && (
                    <div className="dropdown dropdown-end">
                      <div
                        tabIndex={0}
                        role="button"
                        className="btn mt-2 btn-ghost btn-circle avatar"
                      >
                        <div className="w-16  flex items-center justify-center border-2 hover:border-gray-800 rounded-full">
                          <img
                            alt="user"
                            src={
                              user?.photoURL
                                ? user?.photoURL
                                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGf_8UZ3xLijdkOtv3qWnUpyknARbKMrcVJA&usqp=CAU"
                            }
                            className="h-full w-full rounded-full object-cover"
                          />
                        </div>
                      </div>
                      <ul
                        tabIndex={0}
                        className="mt-3 z-[9999] shadow dropdown-content px-8 py-8 text-xl bg-[#fafdf9] dark:bg-primary-dark rounded-box w-[250px] max-w-[300px] flex flex-col items-center justify-center gap-2"
                      >
                        <li className="flex items-center justify-center">
                          <div className="w-20 flex items-center justify-center h-20 border-2 border-primary-light hover:border-gray-800 rounded-full">
                            <img
                              alt="user"
                              src={
                                user?.photoURL
                                  ? user?.photoURL
                                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGf_8UZ3xLijdkOtv3qWnUpyknARbKMrcVJA&usqp=CAU"
                              }
                              className="h-full w-full rounded-full object-cover"
                            />
                          </div>
                        </li>

                        <Link
                          className={` ${
                            pathname === "/dashboard"
                              ? "text-primary-light font-bold "
                              : "dark:text-in-dark hover:text-primary-light dark:hover:text-primary-light  transition-all duration-300 ease-in-out"
                          } no-underline font-semibold text-lg lg:hover:bg-none  lg:p-0 w-full inline-block rounded-[10px]`}
                          to={"/dashboard"}
                        >
                          Dashboard
                        </Link>
                        <Link
                          className={` ${
                            pathname === "/profile"
                              ? "text-primary-light font-bold "
                              : "dark:text-in-dark hover:text-primary-light dark:hover:text-primary-light  transition-all duration-300 ease-in-out"
                          } no-underline font-semibold text-lg lg:hover:bg-none  lg:p-0 w-full inline-block rounded-[10px]`}
                          to={"/profile"}
                        >
                          Profile
                        </Link>

                        <div className="h-[1px] bg-gray-400 w-full"></div>
                        <li onClick={handleLogOut} className="w-full">
                          <a className=" flex items-center gap-2 dark:text-in-dark w-full text-lg font-medium cursor-pointer dark:hover:text-primary-light  hover:text-primary-light transition-all duration-300 ease-in-out">
                            Logout
                            <span className="text-primary-light">
                              <RiLogoutBoxLine />
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}

                  {!user && (
                    <Link
                      to="/login"
                      className="px-7 py-3  border-2 border-primary-light md:border-2 md:border-primary-light lg:hover:border-[#1d1d1d] lg:hover:text-white lg:hover:border-none lg:border-none rounded-md text-sm md:text-lg lg:text-[16px] xl:text-lg hover:bg-primary-light font-medium  md:bg-none lg:py-2 xl:py-3 text-gray-800 dark:hover:bg-white dark:hover:text-gray-800 hover:text-white dark:text-in-dark"
                    >
                      Login/Register
                    </Link>
                  )}
                </div>
              </div>
              <IconButton
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent bg-transparent focus:bg-transparent active:bg-transparent lg:hidden text-gray-800 dark:text-gray-200"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>
          <MobileNav open={openNav}>
            {navList}
            <div className="flex justify-around h-auto text-gray-800 dark:text-gray-200">
              <div>
              <label className="swap swap-rotate mr-4">
                    <input
                      type="checkbox"
                      onChange={handleToggle}
                      checked={themeMode === "dark"}
                    />

                    {/* sun icon */}
                    <svg
                      className="swap-on fill-current w-8 h-8 ml-3 dark:text-in-dark"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>

                    {/* moon icon */}
                    <svg
                      className="swap-off fill-current ml-3 w-8 h-8 dark:text-in-dark"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                  </label>
              </div>
              {/* Login User */}
              <div>
                {user && (
                  <div className="dropdown dropdown-end">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn mt-2 btn-ghost btn-circle avatar"
                    >
                      <div className="w-16  flex items-center justify-center border-2 hover:border-gray-800 rounded-full">
                        <img
                          alt="user"
                          src={
                            user?.photoURL
                              ? user?.photoURL
                              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGf_8UZ3xLijdkOtv3qWnUpyknARbKMrcVJA&usqp=CAU"
                          }
                          className="h-full w-full rounded-full object-cover"
                        />
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className="mt-3 z-[9999] shadow dropdown-content px-8 py-8 text-xl bg-[#fafdf9] dark:bg-primary-dark rounded-box w-[250px] max-w-[300px] flex flex-col items-center justify-center gap-2"
                    >
                      <li className="flex items-center justify-center">
                        <div className="w-20 flex items-center justify-center h-20 border-2 border-primary-light hover:border-gray-800 rounded-full">
                          <img
                            alt="user"
                            src={
                              user?.photoURL
                                ? user?.photoURL
                                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGf_8UZ3xLijdkOtv3qWnUpyknARbKMrcVJA&usqp=CAU"
                            }
                            className="h-full w-full rounded-full object-cover"
                          />
                        </div>
                      </li>

                      <Link
                        className={` ${
                          pathname === "/dashboard"
                            ? "text-primary-light font-bold "
                            : "dark:text-in-dark hover:text-primary-light dark:hover:text-primary-light  transition-all duration-300 ease-in-out"
                        } no-underline font-semibold text-lg lg:hover:bg-none  lg:p-0 w-full inline-block rounded-[10px]`}
                        to={"/dashboard"}
                      >
                        Dashboard
                      </Link>
                      <Link
                        className={` ${
                          pathname === "/profile"
                            ? "text-primary-light font-bold "
                            : "dark:text-in-dark hover:text-primary-light dark:hover:text-primary-light  transition-all duration-300 ease-in-out"
                        } no-underline font-semibold text-lg lg:hover:bg-none  lg:p-0 w-full inline-block rounded-[10px]`}
                        to={"/profile"}
                      >
                        Profile
                      </Link>

                      <div className="h-[1px] bg-gray-400 w-full"></div>
                      <li onClick={handleLogOut} className="w-full">
                        <a className=" flex items-center gap-2 dark:text-in-dark w-full text-lg font-medium cursor-pointer dark:hover:text-primary-light  hover:text-primary-light transition-all duration-300 ease-in-out">
                          Logout
                          <span className="text-primary-light">
                            <RiLogoutBoxLine />
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                )}

                {!user && (
                  <Link
                    to="/login"
                    className="px-7 py-3  border-2 border-primary-light md:border-2 md:border-primary-light lg:hover:border-[#1d1d1d] lg:hover:text-white lg:hover:border-none lg:border-none rounded-md text-sm md:text-lg lg:text-[16px] xl:text-lg hover:bg-primary-light font-medium  md:bg-none lg:py-2 xl:py-3 text-gray-800 dark:hover:bg-white dark:hover:text-gray-800 hover:text-white dark:text-in-dark"
                  >
                    Login/Register
                  </Link>
                )}
              </div>
            </div>
          </MobileNav>
        </Navbar>
    </div>
  );
};

export default NavBar;
