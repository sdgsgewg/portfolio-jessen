"use client";

import { usePathname } from "@/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarDesktopLinks from "./desktop/NavbarDesktopLinks";
import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher";
import { ModeToggle } from "@/components/shared/ModeToggle";
import NavbarMobileMenu from "./mobile/NavbarMobileMenu";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <nav className="border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 sticky top-0 z-50">
        <div className="flex h-16 items-center px-4 container mx-auto justify-between">
          <div className="flex items-center">
            <NavbarLogo />

            {/* Desktop Navigation */}
            <NavbarDesktopLinks pathname={pathname} />
          </div>

          <div className="flex items-center space-x-2 lg:space-x-4">
            <LanguageSwitcher />
            <ModeToggle />

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-foreground hover:bg-muted rounded-md focus:outline-none"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Mobile Menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <NavbarMobileMenu
        open={mobileMenuOpen}
        pathname={pathname}
        onClose={closeMobileMenu}
      />
    </>
  );
}
