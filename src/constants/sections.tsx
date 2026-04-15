import About from "@/components/About";
import Career from "@/components/career/Career";
import ComServ from "@/components/community/ComServ";
import Contact from "@/components/Contact";
import Education from "@/components/education/Education";
import Hero from "@/components/Hero";
import Portfolio from "@/components/portfolio/Portfolio";
import Skills from "@/components/Skills";
import { SECTION_NAME } from "./section-names";

export type SectionType = {
  name: string;
  element: React.ReactNode;
  hasCustomBackground: boolean;
  cta?: string;
};

export const sections: SectionType[] = [
  { name: SECTION_NAME.HOME, element: <Hero />, hasCustomBackground: false },
  { name: SECTION_NAME.ABOUT, element: <About />, hasCustomBackground: false },
  { name: SECTION_NAME.SKILLS, element: <Skills />, hasCustomBackground: true },
  {
    name: SECTION_NAME.PORTFOLIO,
    element: <Portfolio />,
    hasCustomBackground: true,
  },
  { name: SECTION_NAME.CAREER, element: <Career />, hasCustomBackground: true },
  {
    name: SECTION_NAME.EDUCATION,
    element: <Education />,
    hasCustomBackground: true,
  },
  {
    name: SECTION_NAME.COMMUNITY,
    element: <ComServ />,
    hasCustomBackground: true,
  },
  {
    name: SECTION_NAME.CONTACT,
    element: <Contact />,
    hasCustomBackground: false,
  },
];
