import * as React from "react";
import { ThemeContext, ToggleThemeContext } from "~useContext/ThemeContext";

export default function TopBanner() {
  const toggleTheme = React.useContext(ToggleThemeContext);
  const theme = React.useContext(ThemeContext);
  return (
    <>
      {/* TopBanner */}
      <div className="relative h-screen  w-full">
        {/* Heading and Desecription */}
        <div className="absolute top-1/2 -translate-y-1/2 start-0 m-5 flex flex-col">
          <span className="text-3xl ">karthik kalyanam.</span>

          <span className="text-sm my-2">
            ECE|Web developer|C & C++|Java|Python
          </span>
        </div>
        {/* Theme Selector */}
        <div className="absolute top-0 end-0 m-5">
          <a
            href="#"
            onClick={toggleTheme}
            className="transition-all duration-500 "
          >
            {theme === "light" ? `☀️` : `🌙`}
          </a>
        </div>
        {/* Explore Button */}
        <div className="absolute top-1/2 end-0 -translate-y-1/2 mx-10">
          <span
            className={`${theme === "light" ? "dark" : "light"} ${
              theme === "light" ? "hover:light" : "hover:dark"
            } cursor-pointer transition-colors duration-300 ease-in-out origin-bottom px-5 py-3 rounded-3xl  border`}
          >
            Explore
          </span>
        </div>
      </div>
    </>
  );
}
