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

export default function TechIcons() {
  const size = 35;

  return (
    <>
      {/* Programming Language */}
      <div>
        <SiHtml5
          size={size}
          title="HTML5"
          className="grayscale hover:transition duration-300 ease-in-out hover:grayscale-0 hover:text-[#E34F26]"
        />
      </div>
      <div>
        <SiCss3
          size={size}
          title="CSS3"
          className="grayscale hover:transition duration-300 ease-in-out hover:grayscale-0 hover:text-[#1572B6]"
        />
      </div>
      <div>
        <FaJsSquare
          size={size}
          title="JavaScript"
          className="grayscale hover:transition duration-300 ease-in-out hover:grayscale-0 hover:text-[#F7DF1E]"
        />
      </div>
      <div>
        <SiTypescript
          size={size}
          title="TypeScript"
          className="grayscale hover:transition duration-300 ease-in-out hover:grayscale-0 hover:text-[#3178C6]"
        />
      </div>
      <div>
        <FaPhp
          size={size}
          title="PHP"
          className="grayscale hover:transition duration-300 ease-in-out hover:grayscale-0 hover:text-[#777BB4]"
        />
      </div>
      <div>
        <FaJava
          size={size}
          title="Java"
          className="grayscale hover:transition duration-300 ease-in-out hover:grayscale-0 hover:text-[#007396]"
        />
      </div>
      <img
        src={FaCSharp}
        width={size}
        height={size}
        alt="C#"
        className="grayscale hover:transition duration-300 ease-in-out hover:grayscale-0"
      />
      <div>
        <FaC
          size={size}
          title="C"
          className="grayscale hover:transition duration-300 ease-in-out hover:grayscale-0 hover:text-[#A8B9CC]"
        />
      </div>
      <div>
        <FaPython
          size={size}
          title="Python"
          className="grayscale hover:transition duration-300 ease-in-out hover:grayscale-0 hover:text-[#306998]"
        />
      </div>

      {/* Libraries or Frameworks */}
      <div>
        <FaReact
          size={size}
          title="React"
          className="grayscale hover:transition duration-300 ease-in-out hover:grayscale-0 hover:text-[#61DAFB]"
        />
      </div>
      <div>
        <FaLaravel
          size={size}
          title="Laravel"
          className="grayscale hover:transition duration-300 ease-in-out hover:grayscale-0 hover:text-[#FF2D20]"
        />
      </div>
      <div>
        <BsBootstrap
          size={size}
          title="Bootstrap"
          className="grayscale hover:transition duration-300 ease-in-out hover:grayscale-0 hover:text-[#563D7C]"
        />
      </div>
      <img
        src={FaTailwindCSS}
        width={size}
        height={size}
        alt="Tailwind CSS"
        className="grayscale hover:transition duration-300 ease-in-out hover:grayscale-0"
      />

      {/* Tools */}
      <div>
        <FaDatabase
          size={size}
          title="MySQL"
          className="grayscale hover:transition duration-300 ease-in-out hover:grayscale-0 hover:text-[#00618A]"
        />
      </div>
      <img
        src={FaFigma}
        width={size}
        height={size}
        alt="Figma"
        className="grayscale hover:transition duration-300 ease-in-out hover:grayscale-0"
      />
      <div>
        <FaGithub
          size={size}
          title="GitHub"
          className="grayscale hover:transition duration-300 ease-in-out hover:grayscale-0 hover:text-[#b9b2b2]"
        />
      </div>
    </>
  );
}
