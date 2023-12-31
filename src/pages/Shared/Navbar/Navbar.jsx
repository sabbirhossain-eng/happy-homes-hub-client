import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import NavLogged from "./NavLogged";

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
        className={({ isActive }) => (isActive ? "text-[#f6ab4a] outline p-1 rounded" : "")}
        to="/"
      >
        Home
      </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
         className={({ isActive }) => (isActive ? "text-[#f6ab4a] outline p-1 rounded" : "")} 
        to="/petListing" >
          Pet Listing
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink 
         className={({ isActive }) => (isActive ? "text-[#f6ab4a] outline p-1 rounded" : "")}
        to="/donationCampaigns" >
          Donation Campaigns
        </NavLink>
      </Typography>
    </ul>
  );
  return (
    <Navbar className=" z-10 rounded-none px-4 py-2 lg:px-8 lg:py-4 fixed mx-auto inset-x-0 w-full ">
      <div className="flex items-center justify-between text-white ">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer font-medium"
        >
          <img src="https://i.ibb.co/h1CvRPb/Happy-Homes-Hub-logo.png" alt="" />
        </Typography>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="flex items-center gap-x-1">
            <NavLogged/>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit text-[#f6ab4a] hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
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
        <div className="flex items-center gap-x-1">
            <NavLogged/>
        </div>
      </MobileNav>
    </Navbar>
  );
};

export default NavBar;
