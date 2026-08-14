import { PortfolioFilter, PortfolioListItem } from "@/types/portfolio";

export function searchPortfolio(
  portfolio: PortfolioListItem[],
  search: string,
  getName: (portfolio: PortfolioListItem) => string,
) {
  if (!search) return portfolio;

  const query = search.toLowerCase();

  return portfolio.filter((project) =>
    getName(project).toLowerCase().includes(query),
  );
}

export function filterPortfolio(
  portfolio: PortfolioListItem[],
  filters: PortfolioFilter,
) {
  return portfolio.filter((project) => {
    if (filters.role && project.meta?.role !== filters.role) {
      return false;
    }

    if (filters.platform && project.meta?.platform !== filters.platform) {
      return false;
    }

    if (filters.difficulty && project.meta?.difficulty !== filters.difficulty) {
      return false;
    }

    if (
      filters.tech &&
      filters.tech.length > 0 &&
      !filters.tech.every((tech) => project.techStack.includes(tech))
    ) {
      return false;
    }

    return true;
  });
}
