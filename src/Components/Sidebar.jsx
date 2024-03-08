import React, { useCallback, useRef, useState } from "react";

const menuItems = ["Home", "About", "Connect"];

export default () => {
  const sidebarRef = useRef();

  const [hoveredItem, setHoveredItem] = useState(null);

  const handleToggle = () => {
    sidebarRef.current.classList.toggle("translate-x-full");
  };

  const handleHover = (item) => {
    setHoveredItem(item);
  };
  return (
    <>
      <div
        className=" fixed end-0 top-1/2 -translate-y-1/2 z-10 translate-x-full rounded-2xl h-[97%] w-40 bg-gradient-to-b from-violet-600/40 to-pink-700/40 transition-all duration-300 ease-in-out backdrop-blur-md "
        ref={sidebarRef}
        onMouseLeave={handleToggle}
      >
        <div className="relative flex flex-col justify-center items-center w-full h-full  text-white font-semibold">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="py-2 px-4 text-2xl cursor-pointer transition-colors duration-300 w-full hover:bg-purple-600/40 hover:backdrop-blur-lg text-center "
              onMouseEnter={() => handleHover(item)}
              onMouseLeave={() => handleHover(null)}
            >
              {item}
            </div>
          ))}
          {hoveredItem && (
            <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2  text-black -z-50">
              <div className="flex text-6xl">
                <div>
                  <p
                    className="opacity-20 font-extrabold"
                    style={{
                      textOrientation: "upright",
                      writingMode: "vertical-lr",
                    }}
                  >
                    {hoveredItem}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="fixed end-0 z-50  top-0 m-7 ">
        <div
          className="relative w-5 h-5 cursor-pointer  group "
          onMouseEnter={handleToggle}
        >
          {/* Three lines */}
          <div
            className="absolute left-1/2 top-1/2 transform  -translate-x-1/2 -translate-y-1/2 w-8 "
            onClick={handleToggle}
          >
            <div className="h-1 w-1/3 bg-stone-300 hover:bg-white my-1 transition-all duration-300 group-hover:w-full"></div>
            <div className="h-1 w-2/3 bg-stone-300 hover:bg-white my-1 transition-all duration-300 group-hover:w-full"></div>
            <div className="h-1       bg-stone-300 hover:bg-white my-1 transition-all duration-300 "></div>
          </div>
        </div>
      </div>
    </>
  );
};
