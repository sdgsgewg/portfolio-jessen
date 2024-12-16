import {
  FaJsSquare,
  FaReact,
  FaPython,
  FaJava,
  FaPhp,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import { SiTypescript, SiHtml5, SiCss3 } from "react-icons/si";
import { FaC, FaLaravel } from "react-icons/fa6";
import { BsBootstrap } from "react-icons/bs";
import FaCSharp from "/assets/img/c-sharp.png";
import FaTailwindCSS from "/assets/img/tailwind-css.png";
import FaFigma from "/assets/img/figma.png";
import { useState } from "react";
import { useEffect } from "react";

export default function TechIcons() {
  const [iconSize, setIconSize] = useState(40);

  const baseClasses =
    "grayscale hover:transition duration-300 ease-in-out hover:grayscale-0";

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setIconSize(35); // Small Screens
      } else if (window.innerWidth < 1024) {
        setIconSize(40); // Medium Screens
      } else {
        setIconSize(40); // Large Screens
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Programming Language */}
      <div>
        <SiHtml5
          size={iconSize}
          title="HTML5"
          className={`${baseClasses} hover:text-[#E34F26]`}
        />
      </div>
      <div>
        <SiCss3
          size={iconSize}
          title="CSS3"
          className={`${baseClasses} hover:text-[#1572B6]`}
        />
      </div>
      <div>
        <FaJsSquare
          size={iconSize}
          title="JavaScript"
          className={`${baseClasses} hover:text-[#F7DF1E]`}
        />
      </div>
      <div>
        <SiTypescript
          size={iconSize}
          title="TypeScript"
          className={`${baseClasses} hover:text-[#3178C6]`}
        />
      </div>
      <div>
        <FaPhp
          size={iconSize}
          title="PHP"
          className={`${baseClasses} hover:text-[#777BB4]`}
        />
      </div>
      <div>
        <FaJava
          size={iconSize}
          title="Java"
          className={`${baseClasses} hover:text-[#007396]`}
        />
      </div>
      <img
        src={FaCSharp}
        width={iconSize}
        height={iconSize}
        alt="C#"
        className={`${baseClasses}`}
      />
      <div>
        <FaC
          size={iconSize}
          title="C"
          className={`${baseClasses} hover:text-[#A8B9CC]`}
        />
      </div>
      <div>
        <FaPython
          size={iconSize}
          title="Python"
          className={`${baseClasses} hover:text-[#306998]`}
        />
      </div>

      {/* Libraries or Frameworks */}
      <div>
        <FaReact
          size={iconSize}
          title="React"
          className={`${baseClasses} hover:text-[#61DAFB]`}
        />
      </div>
      <div>
        <FaLaravel
          size={iconSize}
          title="Laravel"
          className={`${baseClasses} hover:text-[#FF2D20]`}
        />
      </div>
      <div>
        <BsBootstrap
          size={iconSize}
          title="Bootstrap"
          className={`${baseClasses} hover:text-[#563D7C]`}
        />
      </div>
      <img
        src={FaTailwindCSS}
        width={iconSize}
        height={iconSize}
        alt="Tailwind CSS"
        className={`${baseClasses}`}
      />

      {/* Tools */}
      <div>
        <FaDatabase
          size={iconSize}
          title="MySQL"
          className={`${baseClasses} hover:text-[#00618A]`}
        />
      </div>
      <img
        src={FaFigma}
        width={iconSize}
        height={iconSize}
        alt="Figma"
        className={`${baseClasses}`}
      />
      <div>
        <FaGithub
          size={iconSize}
          title="GitHub"
          className={`${baseClasses} hover:text-[#b9b2b2]`}
        />
      </div>
    </>
  );
}
