import "./global.css";
import * as React from "react";
import TopBar from "~components/TopBar";
import TopBanner from "~components/TopBanner";
import { ThemeContext } from "~useContext/ThemeContext";
import About from "~components/About";
import Contact from "~components/Contact";

export default function App() {
  const theme = React.useContext(ThemeContext);
  console.log(theme);
  return (
    <div className={`${theme} transition-colors duration-500 ease-in-out`}>
      <TopBanner />
      <About />
      <Contact />
      <TopBar />
    </div>
  );
}
