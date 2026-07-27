import { ROUTES } from "@/constants/routes";
import { NavLink } from "@/types/NavLink";
import { useTranslations } from "next-intl";

export function useNavLinks() {
  const tNav = useTranslations("navigation");

  const navLinks: NavLink[] = [
    { name: tNav("home"), path: ROUTES.HOME },
    { name: tNav("about"), path: ROUTES.SECTION.ABOUT },
    { name: tNav("skills"), path: ROUTES.SECTION.SKILLS },
    { name: tNav("portfolio"), path: ROUTES.SECTION.PORTFOLIO },
    { name: tNav("career"), path: ROUTES.SECTION.CAREER },
    { name: tNav("education"), path: ROUTES.SECTION.EDUCATION },
    { name: tNav("community"), path: ROUTES.SECTION.COMMUNITY },
    // { name: tNav("contact"), path: ROUTES.SECTION.CONTACT },
  ];

  return {
    navLinks,
  };
}
