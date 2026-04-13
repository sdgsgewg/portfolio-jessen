import { LIBRARY } from "@/app/constants/library";
import { FRAMEWORK } from "@/app/constants/framework";
import { PROGRAMMING_LANGUAGES } from "@/app/constants/programming-languages";

export const TECH_BADGE_MAP: Record<string, string> = {
  // Library
  [LIBRARY.REACT]: "bg-sky-500 text-white",

  // Framework
  [FRAMEWORK.NEXT_JS]: "bg-black text-white",
  [FRAMEWORK.REACT_NATIVE]: "bg-cyan-500 text-white",
  [FRAMEWORK.ASP_NET]: "bg-purple-600 text-white",
  [FRAMEWORK.LARAVEL]: "bg-red-600 text-white",
  [FRAMEWORK.TAILWIND_CSS]: "bg-cyan-400 text-white",
  [FRAMEWORK.BOOTSTRAP]: "bg-indigo-600 text-white",

  // Programming Languages
  [PROGRAMMING_LANGUAGES.JAVASCRIPT]: "bg-yellow-400 text-black",
  [PROGRAMMING_LANGUAGES.TYPESCRIPT]: "bg-blue-600 text-white",
  [PROGRAMMING_LANGUAGES.CSS]: "bg-blue-500 text-white",
  [PROGRAMMING_LANGUAGES.HTML]: "bg-orange-600 text-white",
  [PROGRAMMING_LANGUAGES.PYTHON]: "bg-blue-700 text-white",
};

export const getTechBadgeColor = (tech: string) =>
  TECH_BADGE_MAP[tech] || "bg-gray-200 text-black";
