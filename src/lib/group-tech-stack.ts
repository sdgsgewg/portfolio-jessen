import { TECH_MAP, TechName } from "@/constants/tech-stack";

export const groupTechStack = (techStack: TechName[]) => {
  const grouped: Record<string, TechName[]> = {};

  techStack.forEach((tech) => {
    const category = TECH_MAP[tech].category;

    if (!grouped[category]) {
      grouped[category] = [];
    }

    grouped[category].push(tech);
  });

  return grouped;
};