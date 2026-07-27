import { useNavLinks } from "@/hooks/useNavLinks";
import { cn } from "@/lib/utils";
import { isActivePath } from "@/lib/utils/navigation";
import { Link } from "@/navigation";
import React from "react";

interface Props {
  pathname: string;
}

const NavbarDesktopLinks = ({ pathname }: Props) => {
  const { navLinks } = useNavLinks();

  return (
    <div className="hidden lg:flex items-center space-x-4 lg:space-x-6 mx-6">
      {navLinks.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            isActivePath(pathname, link.path)
              ? "text-primary"
              : "text-muted-foreground",
          )}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default NavbarDesktopLinks;
