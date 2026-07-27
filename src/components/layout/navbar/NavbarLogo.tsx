import { ROUTES } from "@/constants/routes";
import { Link } from "@/navigation";
import React from "react";

const NavbarLogo = () => {
  return (
    <div className="flex items-center">
      <Link
        href={ROUTES.HOME}
        className="font-bold text-2xl mr-6 bg-linear-to-r from-primary to-cyan-500 bg-clip-text text-transparent shrink-0"
      >
        Jessen
      </Link>
    </div>
  );
};

export default NavbarLogo;
