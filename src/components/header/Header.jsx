import Hamburger from "./Hamburger";
import Nav from "../Nav";
import { useState } from "react";
import useFixedNavbar from "../../hooks/useFixedNavbar";
import useHamburgerMenu from "../../hooks/useHamburgerMenu";

export default function Header() {
  const [isFooter, setIsFooter] = useState(false);

  useFixedNavbar();
  useHamburgerMenu();

  return (
    <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a
              href="#home"
              className="font-bold text-lg text-primary block py-6"
            >
              Jessen
            </a>
          </div>
          <div className="flex items-center px-4">
            <Hamburger />
            <Nav isFooter={isFooter} />
          </div>
        </div>
      </div>
    </header>
  );
}
