import React, { useState, useEffect } from "react";

const icons = [
  "react",
  "nodejs",
  "express",
  "next",
  "tailwind",
  "firebase",
  "aws",
  "linux",
  "git",
  "vscode",
  "github",
  "docker",
  "c",
  "cpp",
  "java",
  "python",
  "js",
  "ts",
  "html",
  "css",
  "matlab",
];

const GradientText = ({ roles }) => {
  const [index, setIndex] = useState(0);
  const [role, setRole] = useState(roles[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(intervalId);
  }, [roles.length]);

  useEffect(() => {
    setRole(roles[index]);
  }, [index, roles]);

  return (
    <div className="flex flex-col  justify-start pt-16 p-10 h-screen">
      <div className="my-10 w-[90%] cursor-default">
        <div className="relative text-8xl font-bold mb-8 ">
          <span>Karthik Kalyanam.</span>
          <span className="absolute font-bold  inset-0 w-0 hover:w-full  bg-clip-text transition duration-500  text-transparent opacity-0 hover:opacity-100 ease-in-out bg-gradient-to-r from-purple-700 to-pink-600 ">
            Karthik Kalyanam.
          </span>
        </div>
        <p className="text-3xl font-semibold transition duration-75 ease-in-out">
          I am a{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">
            {role}
          </span>
        </p>
      </div>
      <div className=" grid grid-cols-11 w-[80%] gap-x-3 gap-y-3 ">
        {icons.map((icon) => (
          <img
            src={`https://skillicons.dev/icons?i=${icon}`}
            className="hover:scale-105 transition-all duration-100 ease-in-out"
          />
        ))}
      </div>
    </div>
  );
};

export default GradientText;
