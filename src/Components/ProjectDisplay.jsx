import React, { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import styles from "./ProjectDisplay.module.css";

const projects = [
  {
    title: "The Art of SSB",
    description: "Empower your SSB test preparation with our online platform .",
    imageUrl: "/github/theartofssb.png",
    tags: ["React", "Tailwind", "Creative"],
    demoUrl: "http://theartofssb.in",
    githubUrl: "https://github.com/KALLXCODE/clearssb",
  },
  {
    title: "Speech to Morse",
    description: "A Matlab project to convert audio data to morse code signal",
    imageUrl: "/github/morse.jpeg",
    tags: ["Matlab", "Signals"],
    demoUrl: "https://github.com/karthxk07/Speech-to-morse",
    githubUrl: "https://github.com/karthxk07/Speech-to-morse",
  },

  {
    title: "Online Notepad",
    description:
      "Online Notepad is a web application that allows you to write and share notes online",
    imageUrl: "/github/onlinenotepad.png",
    tags: ["HTML", "CSS", "Firebase"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Chat X",
    description: "A real time small scale chat app. ",
    imageUrl: "/github/chatx.png",
    tags: ["Socket.io", "User Management"],
    demoUrl: "https://chat-x-p5ty.onrender.com/",
    githubUrl: "https://github.com/karthxk07/chatx",
  },
  {
    title: "UI-Calculator",
    description: "My first React project. A Simple calculator app",
    imageUrl: "/github/calculator.png",
    tags: ["React", "First"],
    demoUrl: "https://karthxk07.github.io/ui-calculator/",
    githubUrl: "https://github.com/karthxk07/ui-calculator",
  },
  // Add more projects as needed
];

const ProjectDisplay = () => {
  const containerRef = useRef();
  const objectRef = useRef();

  return (
    <div className=" relative px-10  w-full py-12 bg-purple-950 text-pink-500 overflow-clip ">
      <h2 className="text-5xl font-bold text-center mb-3 text-transparent bg-clip-text bg-gradient-to-r  from-purple-700 to-pink-700">
        Creative Showcase
      </h2>
      <p className="text-center text-lg text-white mb-10">
        Discover a collection of innovative projects showcasing my skills in Web
        development and more.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 my-7">
        {projects.map((project, index) => (
          <div
            key={index}
            className=" shadow-inner  bg-white p-4  rounded-2xl flex flex-col justify-between"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="mb-2 rounded-lg w-full  object-scale-down flex-grow "
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-black text-sm mb-2">{project.description}</p>
            <div className="flex flex-wrap mb-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white rounded-full px-2 py-1 text-xs font-semibold mr-2 mb-1"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex justify-between">
              <a
                href={project.demoUrl}
                className="text-blue-500 hover:underline"
                target="_blank"
              >
                Visit
              </a>
              <a
                href={project.githubUrl}
                className="text-blue-500 hover:underline"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
      <a href="http://github.com/karthxk07" target="_blank">
        <div className="inline-flex gap-3 text-lg text-white cursor-pointer absolute end-0 bottom-0 m-5">
          More on <FaGithub className="text-2xl text-white" />
        </div>
      </a>
    </div>
  );
};

export default ProjectDisplay;
