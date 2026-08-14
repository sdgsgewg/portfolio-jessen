import { PORTFOLIO_ENTRIES } from "@/lib/portfolio-data";
import { PortfolioFilter } from "@/types/portfolio";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

export function usePortfolioData(params?: PortfolioFilter) {
  const tPortfolioProjects = useTranslations("portfolio.projects");

  const portfolio = PORTFOLIO_ENTRIES;

  const filteredData = useMemo(() => {
    if (!params) return;

    return portfolio.filter((p) => {
      const name = tPortfolioProjects.raw(p.slug).name.toLowerCase();

      if (params.search && !name.includes(params.search.toLowerCase()))
        return false;

      if (params.role && p.meta?.role !== params.role) return false;

      if (params.platform && p.meta?.platform !== params.platform) return false;

      if (
        params.tech &&
        params.tech.length > 0 &&
        !params.tech.every((t) => p.techStack.includes(t))
      )
        return false;

      if (params.difficulty && p.meta?.difficulty !== params.difficulty)
        return false;

      return true;
    });
  }, [portfolio, params, tPortfolioProjects]);

  const sortedData = useMemo(() => {
    if (!filteredData || !params) return;

    const data = [...filteredData];

    if (params.sortBy === "start_date") {
      if (params.sortOrder === "asc") {
        return data.sort((a, b) => a.startDate.localeCompare(b.startDate));
      } else {
        return data.sort((a, b) => b.startDate.localeCompare(a.startDate));
      }
    }

    if (params.sortBy === "name") {
      if (params.sortOrder === "asc") {
        return data.sort((a, b) => {
          const dataAName = tPortfolioProjects.raw(a.slug).name.toLowerCase();
          const dataBName = tPortfolioProjects.raw(b.slug).name.toLowerCase();

          return dataAName.localeCompare(dataBName);
        });
      } else {
        return data.sort((a, b) => {
          const dataAName = tPortfolioProjects.raw(a.slug).name.toLowerCase();
          const dataBName = tPortfolioProjects.raw(b.slug).name.toLowerCase();

          return dataBName.localeCompare(dataAName);
        });
      }
    }

    // if (params.sort === "featured") {
    //   return data.sort(
    //     (a, b) => Number(b.meta?.featured) - Number(a.meta?.featured),
    //   );
    // }

    return data;
  }, [filteredData, params, tPortfolioProjects]);

  return {
    portfolioList: sortedData ?? portfolio,
  };
}
