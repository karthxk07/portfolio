import logo from "./logo.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Background from "./Components/Background";
import Layout from "./Components/Layout";
import Sidebar from "./Components/Sidebar";
import { useEffect, useRef } from "react";

function App() {
  const cursorFollowerRef = useRef();

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setTimeout(() => {
        cursorFollowerRef.current.style.left = `${e.clientX - 10}px`;
        cursorFollowerRef.current.style.top = `${e.clientY - 10}px`;
      }, 100);
    });
  }, []);
  return (
    <>
      <Sidebar />
      <Layout />
      <div
        ref={cursorFollowerRef}
        className="backdrop-invert fixed transition -translate-x-2 translate-y-3 duration-200 ease-in rounded-full z-100 aspect-square h-12  "
      ></div>
    </>
  );
}

export default App;
