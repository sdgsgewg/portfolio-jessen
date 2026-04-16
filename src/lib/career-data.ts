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
        origin: "internal",
        platforms: ["mobile"],
        role: "frontend",
        techStack: [FRAMEWORK.REACT_NATIVE, FRAMEWORK.ASP_NET],
      },
      {
        key: "project-a2",
        origin: "internal",
        platforms: ["mobile"],
        role: "frontend",
        techStack: [FRAMEWORK.REACT_NATIVE, FRAMEWORK.ASP_NET],
      },
      {
        key: "project-a3",
        origin: "internal",
        platforms: ["mobile"],
        role: "backend",
        techStack: [FRAMEWORK.REACT_NATIVE, FRAMEWORK.ASP_NET],
      },
      {
        key: "project-a4",
        origin: "internal",
        platforms: ["mobile"],
        role: "fullstack",
        techStack: [FRAMEWORK.REACT_NATIVE, FRAMEWORK.ASP_NET],
      },
      {
        key: "project-b",
        origin: "internal",
        platforms: ["mobile"],
        role: "frontend",
        techStack: [FRAMEWORK.REACT_NATIVE],
      },
      {
        key: "project-c",
        origin: "internal",
        platforms: ["website"],
        role: "fullstack",
        techStack: [FRAMEWORK.NEXT_JS, FRAMEWORK.ASP_NET],
      },
      {
        key: "project-e",
        origin: "internal",
        platforms: ["website"],
        role: "fullstack",
        techStack: [FRAMEWORK.NEXT_JS, FRAMEWORK.ASP_NET],
      },
      {
        key: "project-f",
        origin: "internal",
        platforms: ["mobile", "website"],
        role: "frontend",
        techStack: [FRAMEWORK.REACT_NATIVE],
      },
      {
        key: "project-g",
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
        origin: "internal",
        platforms: ["website"],
        role: "fullstack",
        techStack: [FRAMEWORK.NEXT_JS, FRAMEWORK.ASP_NET],
      },
      {
        key: "project-i",
        origin: "external",
        platforms: ["website"],
        role: "fullstack",
        techStack: [FRAMEWORK.NEXT_JS, FRAMEWORK.ASP_NET],
      },
      {
        key: "project-a5",
        origin: "internal",
        platforms: ["mobile"],
        role: "fullstack",
        techStack: [FRAMEWORK.REACT_NATIVE, FRAMEWORK.ASP_NET],
      },
      {
        key: "project-j",
        origin: "internal",
        platforms: ["website"],
        role: "frontend",
        techStack: [FRAMEWORK.NEXT_JS],
      },
      {
        key: "project-k",
        origin: "internal",
        platforms: ["website"],
        role: "backend",
        techStack: [DATABASE.POSTGRESQL],
      },
      {
        key: "project-a",
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
