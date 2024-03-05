import React, { useEffect, useRef } from "react";
import GradientText from "./GradientText";

export default () => {
  const bitmojiRef = useRef();
  const fadeRef = useRef();

  return (
    <>
      <div className="w-full h-screen  flex flex-row">
        <div className=" w-fit mx-20 h-full  p-10">
          <div className=" flex justify-center items-center h-full w-fit rounded-2xl backdrop-blur-2xl text-white overflow-hidden p-5">
            <img src="/bitmoji.png" alt="" className=" " ref={bitmojiRef} />
          </div>
        </div>
        <div className="flex-grow">
          <GradientText
            roles={[
              "Full-Stack Developer",
              "Engineer",
              "Open Source Contributor",
            ]}
          />
        </div>
      </div>
    </>
  );
};
