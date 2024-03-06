import React, { useState, useEffect, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
  const textRef = useRef();
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

  useEffect(() => {
    setTimeout(() => {
      textRef.current.style.opacity = 1;
    }, 10);
  }, []);

  return (
    <div className="flex flex-col  justify-start mt-24  p-10 h-screen">
      <div
        className="opacity-0 transition duration-700 ease-in-out mt-10  w-[90%] cursor-default"
        ref={textRef}
      >
        <div className=" relative text-7xl font-semibold ">
          <span>Karthik Kalyanam.</span>
        </div>
        <p className="text-2xl font-semibold transition duration-75 ease-in-out">
          I am a{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">
            {role}
          </span>
        </p>
      </div>
      <p class="mt-3 mb-16 flex flex-row gap-x-5">
        <span className="flex flex-row space-x-3 text-3xl">
          <a
            href="https://www.linkedin.com/in/karthik-kalyanam-53571b254/"
            target="_blank"
            class="text-blue-500 hover:text-blue-600"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/karthxk07"
            target="_blank"
            class="text-black hover:text-stone-600"
          >
            <FaGithub />
          </a>
        </span>
      </p>

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
