import { useEffect } from "react";

const useHamburgerMenu = () => {
  useEffect(() => {
    const hamburger = document.querySelector("#hamburger");
    const navMenu = document.querySelector("#nav-menu");

    const toggleMenu = () => {
      hamburger.classList.toggle("hamburger-active");
      navMenu.classList.toggle("hidden");
    };

    hamburger.addEventListener("click", toggleMenu);

    // Cleanup the event listener on component unmount
    return () => {
      hamburger.removeEventListener("click", toggleMenu);
    };
  }, []);
};

export default useHamburgerMenu;
