import { FRAMEWORK } from "@/app/constants/framework";
import { RDBMS } from "@/app/constants/rdbms";

export type Project = {
  name: string;
  focus: string;
  period: string;
  role: string;
  description: string;
  contributions: string[];
};

export type Career = {
  slug: string;
  company?: {
    name: string;
    description: string;
  };
  position: string;
  joinDate: string;
  endDate: string;
  techStack: string[];
  responsibilities?: string[];
  projects?: Project[];
};

export const CAREER_ENTRIES: Career[] = [
  {
    slug: "accelist-lentera-indonesia",
    position: "Fullstack Developer Intern",
    joinDate: "3 Feb 2025",
    endDate: "28 Feb 2026",
    techStack: [
      FRAMEWORK.ASP_NET,
      FRAMEWORK.NEXT_JS,
      FRAMEWORK.REACT_NATIVE,
      FRAMEWORK.TAILWIND_CSS,
      RDBMS.POSTGRESQL,
    ],
  },
];
