"use client";

import { Link, usePathname } from "@/navigation";
import { ModeToggle } from "./ModeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/utils";
import { useNavLinks } from "@/hooks/useNavLinks";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const { navLinks } = useNavLinks();

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <nav className="border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/75 sticky top-0 z-50">
        <div className="flex h-16 items-center px-4 container mx-auto justify-between">
          <div className="flex items-center">
            <Link
              href={ROUTES.HOME}
              className="font-bold text-2xl mr-6 bg-linear-to-r from-primary to-cyan-500 bg-clip-text text-transparent shrink-0"
            >
              Jessen
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-4 lg:space-x-6 mx-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    isActive(link.path)
                      ? "text-primary"
                      : "text-muted-foreground",
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
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
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 md:hidden bg-background border-l shadow-2xl flex flex-col"
          >
            <div className="flex h-16 items-center px-4 justify-between border-b shrink-0">
              <span className="font-bold text-2xl bg-linear-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
                Menu
              </span>
              <button
                className="p-2 text-foreground hover:bg-muted rounded-md focus:outline-none"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close Mobile Menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col space-y-6">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "text-lg font-medium transition-colors p-2 rounded-md hover:bg-accent",
                      isActive(link.path)
                        ? "text-primary bg-primary/5"
                        : "text-muted-foreground",
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
