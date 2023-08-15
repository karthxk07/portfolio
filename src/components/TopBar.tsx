import * as React from "react";
import { ThemeContext } from "~useContext/ThemeContext";
import { aboutDiv } from "./About";
export default function TopBar() {
  const theme = React.useContext(ThemeContext);
  return (
    <>
      {/* TopBar */}
      <div
        className={` flex flex-row w-3/4 h-10 bg-stone-300/30 backdrop-blur-sm  fixed top-0 start-1/2 -translate-x-1/2 m-5 rounded-3xl`}
      >
        {/* Heading */}
        <span className="my-auto mx-5 font-mono flex-1">karthik kalyanam</span>
        {/* Menu */}
        <ul className="flex flex-row gap-5 my-auto mx-5 font-mono drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          <li>
            <a href="/portfolio">home</a>
          </li>
          <li>
            <a
              className="cursor-pointer"
              onClick={() => {
                aboutDiv?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              about
            </a>
          </li>
          <li>contact</li>
        </ul>
      </div>
    </>
  );
}
