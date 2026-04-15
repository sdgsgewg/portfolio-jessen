import { TECH_MAP, TechName } from "@/constants/tech-stack";
import { TechCategory } from "@/types/tech";

export const filterTechByCategory = (
  techStack: TechName[],
  category: TechCategory | TechCategory[],
) => {
  const categories = Array.isArray(category) ? category : [category];

  return techStack.filter((tech) =>
    categories.includes(TECH_MAP[tech].category),
  );
};
