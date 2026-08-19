import { PortfolioListItem } from "@/types/portfolio";
import { filterTechByCategory } from "@/lib/filter-tech-stack";

export const getPortfolioCardData = (portfolio: PortfolioListItem) => {
  const techStack = filterTechByCategory(portfolio.techStack, [
    "language",
    "framework",
    "library",
  ]);

  return {
    techStack,
  };
};
