import React from "react";

export default () => {
  return (
    <div className="fixed start-0 top-0 h-screen w-full -z-50">
      <div className="App relative w-full h-full overflow-hidden  top-0 start-0 -z-10">
        <video
          id="background-video"
          autoPlay
          muted
          loop
          className="absolute w-full h-full object-cover -z-10  start-0 top-0 "
        >
          <source src="/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute w-full h-full backdrop-blur-sm"></div>
      </div>
    </div>
  );
};
