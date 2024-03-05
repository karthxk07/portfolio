import logo from "./logo.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Background from "./Components/Background";
import Layout from "./Components/Layout";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <>
      <Sidebar />
      <Layout />
    </>
  );
}

export default App;
