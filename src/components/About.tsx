import * as React from "react";
import { ThemeContext } from "~useContext/ThemeContext";

export let aboutDiv: HTMLDivElement | null = null;

export default () => {
  const aboutRef = React.useRef<HTMLDivElement | null>(null);
  const theme = React.useContext(ThemeContext);
  const [aboutVisible, setAboutVisible] = React.useState(false);
  const observer = new IntersectionObserver(
    (entries) => {
      setAboutVisible(entries[0].isIntersecting);
    },
    { threshold: 0.75 }
  );
  React.useEffect(() => {
    observer.observe(aboutRef.current as any);
    aboutDiv = aboutRef.current;
  }, []);
  return (
    <>
      <div
        className={` ${
          theme === "light" ? "dark" : "light"
        } flex flex-row    overflow-hidden`}
        ref={aboutRef}
      >
        <div className="w-1/4">
          <img
            src="assets\aboutme.jpg"
            alt="About me"
            className={`h-80 mx-auto my-5 rounded-3xl  object-scale-down object-bottom ${
              aboutVisible
                ? `translate-y-0 opacity-100`
                : `translate-y-10 opacity-0`
            } transition-all duration-500`}
          />
        </div>
        <div
          className={`w-3/4 p-10 flex flex-col ${
            aboutVisible
              ? `translate-y-0 opacity-100`
              : `translate-y-10 opacity-0`
          } transition-all duration-500`}
        >
          <span className={`text-3xl m-5 `}>About me</span>
          <span className="mx-5">
            I am currently pursuing my B.Tech degree in Electronics and
            Communication Engineering (ECE) from VIT Chennai, and it has been a
            thrilling experience so far. Being a tech enthusiast, I have always
            been drawn towards the latest technologies and gadgets, and I strive
            to learn more about them. Learning is an integral part of my
            personality, and I believe in constantly upgrading my skills and
            knowledge to stay ahead of the curve. Overall, my education and
            experiences have helped me develop a strong academic foundation and
            a deep passion for technology.
          </span>
        </div>
      </div>
    </>
  );
};
