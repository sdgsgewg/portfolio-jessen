import { TechItem } from "@/types/tech";
import { PROGRAMMING_LANGUAGES } from "./programming-languages";
import { LIBRARY } from "./library";
import { FRAMEWORK } from "./framework";
import { TOOLS } from "./tools";
import { PLATFORMS } from "./platforms";
import { DATABASE } from "./database";

export const TECH_STACK: TechItem[] = [
  // Programming Language
  { name: PROGRAMMING_LANGUAGES.PYTHON, category: "language" },
  { name: PROGRAMMING_LANGUAGES.JAVASCRIPT, category: "language" },
  { name: PROGRAMMING_LANGUAGES.TYPESCRIPT, category: "language" },
  { name: PROGRAMMING_LANGUAGES.HTML, category: "language" },
  { name: PROGRAMMING_LANGUAGES.CSS, category: "language" },
  { name: PROGRAMMING_LANGUAGES.C_SHARP, category: "language" },
  { name: PROGRAMMING_LANGUAGES.PHP, category: "language" },

  // Library
  { name: LIBRARY.REACT, category: "library" },

  // Framework
  { name: FRAMEWORK.NEXT_JS, category: "framework" },
  { name: FRAMEWORK.NEST_JS, category: "framework" },
  { name: FRAMEWORK.REACT_NATIVE, category: "framework" },
  { name: FRAMEWORK.ASP_NET, category: "framework" },
  { name: FRAMEWORK.LARAVEL, category: "framework" },
  { name: FRAMEWORK.BOOTSTRAP, category: "framework" },
  { name: FRAMEWORK.TAILWIND_CSS, category: "framework" },

  // Database
  { name: DATABASE.MYSQL, category: "database" },
  { name: DATABASE.POSTGRESQL, category: "database" },
  { name: DATABASE.SQLSERVER, category: "database" },
  { name: DATABASE.MONGODB, category: "database" },
  { name: DATABASE.FIRESTORE, category: "database" },

  // Platforms
  { name: PLATFORMS.SUPABASE, category: "platform" },
  { name: PLATFORMS.FIREBASE, category: "platform" },
  { name: PLATFORMS.AIVEN, category: "platform" },

  // Tools
  { name: TOOLS.FIGMA, category: "tool" },
] as const;

export type TechName = (typeof TECH_STACK)[number]["name"];

export const TECH_MAP = Object.fromEntries(
  TECH_STACK.map((t) => [t.name, t]),
) as Record<TechName, (typeof TECH_STACK)[number]>;
