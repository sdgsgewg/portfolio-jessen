import { DATABASE } from "@/constants/database";
import { FRAMEWORK } from "@/constants/framework";
import { TOOLS } from "@/constants/tools";
import { Career } from "@/types/career";

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
      DATABASE.POSTGRESQL,
      TOOLS.FIGMA,
    ],
    projects: [
      {
        key: "project-i",
        techStack: [FRAMEWORK.NEXT_JS, FRAMEWORK.ASP_NET],
      },
      {
        key: "project-c",
        techStack: [FRAMEWORK.NEXT_JS, FRAMEWORK.ASP_NET],
      },
      {
        key: "project-a5",
        techStack: [FRAMEWORK.REACT_NATIVE, FRAMEWORK.ASP_NET],
      },
      {
        key: "project-h",
        techStack: [FRAMEWORK.NEXT_JS, FRAMEWORK.ASP_NET],
      },
      {
        key: "project-j",
        techStack: [FRAMEWORK.NEXT_JS],
      },
    ],
  },
];
