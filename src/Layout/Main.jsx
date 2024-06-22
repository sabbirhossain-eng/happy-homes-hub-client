import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../pages/Shared/Navbar/Navbar";
import Footers from "../pages/Shared/Footer/Footers";
import { useEffect, useState } from "react";
import { ThemeProvider } from "../Provider/ThemeContext";

const Main = () => {
  const location = useLocation();
  const [themeMode, setThemeMode] = useState('light');

  const darkTheme = () => {
    setThemeMode('dark');
  };

  const lightTheme = () => {
    setThemeMode('light');
  };

  useEffect(() => {
    // Remove existing classes
    document.querySelector('html').classList.remove('dark', 'light');

    // Add the themeMode class
    document.querySelector('html').classList.add(themeMode);

  }, [themeMode]);

  const hidden =
    location.pathname.includes("/login") ||
    location.pathname.includes("/signUp");


  return (
    <div>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="dark:bg-primary-dark bg-[#fff]">
      {hidden || <NavBar />}
      <div className="pt-24 min-h-[calc(100vh-68px)]">
        <Outlet />
      </div>
      {hidden || <Footers />}
      </div>
      </ThemeProvider>
    </div>
  );
};

export default Main;
