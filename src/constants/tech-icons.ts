import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiPython,
  SiNextdotjs,
  SiReact,
  SiLaravel,
  SiBootstrap,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiSupabase,
  SiPostman,
  SiDotnet,
} from "react-icons/si";

import { FaJava, FaGithub, FaDatabase } from "react-icons/fa";
import { FaC } from "react-icons/fa6";

import { IconType } from "react-icons";

export type TechIcon = {
  name: string;
  icon: IconType;
  hoverColor?: string;
};

export const TECH_ICONS = {
  languages: [
    {
      name: "HTML",
      icon: SiHtml5,
      hoverColor: "#E34F26",
    },
    {
      name: "CSS",
      icon: SiCss,
      hoverColor: "#1572B6",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      hoverColor: "#F7DF1E",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      hoverColor: "#3178C6",
    },
    {
      name: "PHP",
      icon: SiPhp,
      hoverColor: "#777BB4",
    },
    {
      name: "Java",
      icon: FaJava,
      hoverColor: "#007396",
    },
    {
      name: "C#",
      icon: SiDotnet,
      hoverColor: "#512BD4",
    },
    {
      name: "C",
      icon: FaC,
      hoverColor: "#A8B9CC",
    },
    {
      name: "Python",
      icon: SiPython,
      hoverColor: "#3776AB",
    },
    {
      name: "SQL",
      icon: FaDatabase,
      hoverColor: "#4479A1",
    },
  ],

  frameworks: [
    {
      name: "React",
      icon: SiReact,
      hoverColor: "#61DAFB",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
    },
    {
      name: "ASP.NET",
      icon: SiDotnet,
      hoverColor: "#512BD4",
    },
    {
      name: "Laravel",
      icon: SiLaravel,
      hoverColor: "#FF2D20",
    },
    {
      name: "Bootstrap",
      icon: SiBootstrap,
      hoverColor: "#7952B3",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      hoverColor: "#06B6D4",
    },
  ],

  tools: [
    {
      name: "MySQL",
      icon: SiMysql,
      hoverColor: "#4479A1",
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      hoverColor: "#4169E1",
    },
    {
      name: "Supabase",
      icon: SiSupabase,
      hoverColor: "#3ECF8E",
    },
    {
      name: "GitHub",
      icon: FaGithub,
    },
    {
      name: "Postman",
      icon: SiPostman,
      hoverColor: "#FF6C37",
    },
  ],
} satisfies Record<string, TechIcon[]>;
