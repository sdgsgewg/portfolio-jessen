"use client";

import { SectionType } from "@/app/constants/sections";
import React, { createContext, useContext } from "react";

interface SectionContextValue {
  section: SectionType;
  isOdd: boolean;
  variant: "light" | "dark";
}

const SectionContext = createContext<SectionContextValue | undefined>(
  undefined,
);

export const useSectionContext = () => {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error("useSectionContext must be used within a Section");
  }
  return context;
};

interface SectionProps {
  section: SectionType;
  isOdd: boolean;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  section,
  isOdd,
  children,
}) => {
  const { name, hasCustomBackground } = section;

  const getClassName = (): string => {
    let className = "";
    switch (name) {
      case "home":
        className = "pt-20";
        break;
      case "about":
        className = "pt-36 pb-32";
        break;
      case "skills":
        className = "pt-36 pb-32";
        break;
      case "portfolio":
        className = "pt-36 pb-16";
        break;
      case "career":
        className = "pt-36 pb-16";
        break;
      case "education":
        className = "pt-36 pb-32";
        break;
      case "community":
        className = "pt-36 pb-32";
        break;
      case "contact":
        className = "pt-36 pb-32";
        break;
      default:
        break;
    }
    return className;
  };

  const variant = hasCustomBackground && isOdd ? "dark" : "light";

  return (
    <SectionContext.Provider value={{ section, isOdd, variant }}>
      <section
        id={name}
        className={`
    ${getClassName()} 
    ${hasCustomBackground ? (isOdd ? "section-dark" : "section-light") : ""}
  `}
      >
        {children}
      </section>
    </SectionContext.Provider>
  );
};
