import React, { useEffect, useRef } from "react";
import GradientText from "./GradientText";
import ProjectDisplay from "./ProjectDisplay";

export default () => {
  const bitmojiRef = useRef();
  const fadeRef = useRef();

  const dummyProjects = [
    {
      title: "Project 1",
      description: "Description of Project 1",
      image: "https://via.placeholder.com/300x200?text=Project+1",
    },
    {
      title: "Project 2",
      description: "Description of Project 2",
      image: "https://via.placeholder.com/300x200?text=Project+2",
    },
    {
      title: "Project 3",
      description: "Description of Project 3",
      image: "https://via.placeholder.com/300x200?text=Project+3",
    },
    {
      title: "Project 4",
      description: "Description of Project 4",
      image: "https://via.placeholder.com/300x200?text=Project+4",
    },
    {
      title: "Project 5",
      description: "Description of Project 5",
      image: "https://via.placeholder.com/300x200?text=Project+5",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      bitmojiRef.current.classList.remove("blur-sm");
    }, 100);
  }, []);

  return (
    <>
      <div className="flex flex-col bg-purple-950">
        <div className="w-full bg-gradient-to-b from-black to-purple-950 min-h-screen text-white items-center flex lg:flex-row md:flex-col flex-col">
          <div className=" w-fit lg:mx-32 mx-auto my-8  h-full   ">
            <div className=" flex  drop-shadow-2xl justify-center items-center h-full w-fit rounded-2xl backdrop-blur-2xl text-white  ">
              <img
                src="/bitmoji.png"
                alt=""
                className=" ws-full object-contain blur-sm transition-all  duration-500 ease-in"
                ref={bitmojiRef}
              />
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
        <div className="w-full h-[2px]  my-3 bg-gradient-to-r from-transparent to-transparent via-stone-500"></div>
        <div className="h-fit w-full">
          <ProjectDisplay />
        </div>
      </div>
    </>
  );
};
