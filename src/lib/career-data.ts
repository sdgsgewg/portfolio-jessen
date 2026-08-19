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
        key: "project-a1",
        startDate: "2025-04-16",
        endDate: "2025-05-08",
        origin: "internal",
        platforms: ["mobile"],
        role: "frontend",
        techStack: [FRAMEWORK.REACT_NATIVE, FRAMEWORK.ASP_NET],
      },

      {
        key: "project-a2",
        startDate: "2025-05-07",
        endDate: "2025-05-16",
        origin: "internal",
        platforms: ["mobile"],
        role: "frontend",
        techStack: [FRAMEWORK.REACT_NATIVE, FRAMEWORK.ASP_NET],
      },

      {
        key: "project-a3",
        startDate: "2025-05-19",
        endDate: "2025-06-03",
        origin: "internal",
        platforms: ["mobile"],
        role: "backend",
        techStack: [FRAMEWORK.REACT_NATIVE, FRAMEWORK.ASP_NET],
      },

      {
        key: "project-a4",
        startDate: "2025-06-10",
        endDate: "2025-06-24",
        origin: "internal",
        platforms: ["mobile"],
        role: "fullstack",
        techStack: [FRAMEWORK.REACT_NATIVE, FRAMEWORK.ASP_NET],
      },

      {
        key: "project-b",
        startDate: "2025-04-25",
        endDate: "2025-07-25",
        origin: "internal",
        platforms: ["mobile"],
        role: "frontend",
        techStack: [FRAMEWORK.REACT_NATIVE],
      },

      {
        key: "project-c",
        startDate: "2025-04-25",
        endDate: "2025-10-14",
        origin: "internal",
        platforms: ["website"],
        role: "fullstack",
        techStack: [FRAMEWORK.NEXT_JS, FRAMEWORK.ASP_NET],
      },

      {
        key: "project-e",
        startDate: "2025-05-27",
        endDate: "2025-07-21",
        origin: "internal",
        platforms: ["website"],
        role: "fullstack",
        techStack: [FRAMEWORK.NEXT_JS, FRAMEWORK.ASP_NET],
      },

      {
        key: "project-f",
        startDate: "2025-06-30",
        endDate: "2025-07-01",
        origin: "internal",
        platforms: ["mobile", "website"],
        role: "frontend",
        techStack: [FRAMEWORK.REACT_NATIVE],
      },

      {
        key: "project-g",
        startDate: "2025-07-07",
        endDate: "2025-08-01",
        origin: "internal",
        platforms: ["mobile", "website"],
        role: "fullstack",
        techStack: [
          FRAMEWORK.REACT_NATIVE,
          FRAMEWORK.NEXT_JS,
          FRAMEWORK.ASP_NET,
        ],
      },

      {
        key: "project-h",
        startDate: "2025-07-22",
        endDate: "2025-12-31",
        origin: "internal",
        platforms: ["website"],
        role: "fullstack",
        techStack: [FRAMEWORK.NEXT_JS, FRAMEWORK.ASP_NET],
      },

      {
        key: "project-i",
        startDate: "2025-08-15",
        endDate: "2025-09-11",
        origin: "external",
        platforms: ["website"],
        role: "fullstack",
        techStack: [FRAMEWORK.NEXT_JS, FRAMEWORK.ASP_NET],
      },

      {
        key: "project-a5",
        startDate: "2025-09-16",
        endDate: "2025-12-17",
        origin: "internal",
        platforms: ["mobile"],
        role: "fullstack",
        techStack: [FRAMEWORK.REACT_NATIVE, FRAMEWORK.ASP_NET],
      },

      {
        key: "project-j",
        startDate: "2025-10-31",
        endDate: "2025-12-23",
        origin: "internal",
        platforms: ["website"],
        role: "frontend",
        techStack: [FRAMEWORK.NEXT_JS],
      },

      {
        key: "project-k",
        startDate: "2026-01-08",
        endDate: "2026-01-08",
        origin: "internal",
        platforms: ["website"],
        role: "backend",
        techStack: [DATABASE.POSTGRESQL],
      },

      {
        key: "project-a",
        startDate: "2026-01-12",
        endDate: "2026-02-27",
        origin: "internal",
        platforms: ["mobile", "website"],
        role: "fullstack",
        techStack: [
          FRAMEWORK.REACT_NATIVE,
          FRAMEWORK.NEXT_JS,
          FRAMEWORK.ASP_NET,
        ],
      },
    ],
  },
];
