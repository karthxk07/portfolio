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
    <div className="flex flex-col  justify-center pt-16 p-10 h-screen">
      <div className="my-10 w-[90%] cursor-default">
        <div className="relative text-7xl font-semibold ">
          <span>Karthik Kalyanam.</span>
        </div>
        <p className="text-2xl font-semibold transition duration-75 ease-in-out">
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
