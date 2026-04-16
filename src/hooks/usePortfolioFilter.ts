import { useMemo, useState } from "react";
import { TechName } from "@/constants/tech-stack";
import {
  ProjectDifficulty,
  ProjectPlatform,
  ProjectRole,
} from "@/types/project";
import { Portfolio } from "@/types/portfolio";
import { useDebounce } from "./useDebounce";
import { SortType } from "@/types/SortType";

export interface Filter {
  search: string;
  tech: TechName[];
  role?: ProjectRole;
  platform?: ProjectPlatform;
  difficulty?: ProjectDifficulty;
  sort: SortType;
}

export const usePortfolioFilter = (portfolio: Portfolio[], tProjects: any) => {
  const [filters, setFilters] = useState<Filter>({
    search: "",
    tech: [],
    role: undefined,
    platform: undefined,
    difficulty: undefined,
    sort: "newest",
  });

  const debouncedSearch = useDebounce(filters.search, 400);

  const isSearching = filters.search !== debouncedSearch;

  const filteredData = useMemo(() => {
    return portfolio.filter((p) => {
      const name = tProjects.raw(p.slug).name.toLowerCase();

      if (debouncedSearch && !name.includes(debouncedSearch.toLowerCase()))
        return false;

      if (filters.role && p.meta?.role !== filters.role) return false;

      if (filters.platform && p.meta?.platform !== filters.platform)
        return false;

      if (
        filters.tech.length > 0 &&
        !filters.tech.every((t) => p.techStack.includes(t))
      )
        return false;

      if (filters.difficulty && p.meta?.difficulty !== filters.difficulty)
        return false;

      return true;
    });
  }, [portfolio, filters, debouncedSearch, tProjects]);

  const sortedData = useMemo(() => {
    const data = [...filteredData];

    if (filters.sort === "newest") {
      return data.sort((a, b) => b.startDate.localeCompare(a.startDate));
    }

    if (filters.sort === "oldest") {
      return data.sort((a, b) => a.startDate.localeCompare(b.startDate));
    }

    if (filters.sort === "featured") {
      return data.sort(
        (a, b) => Number(b.meta?.featured) - Number(a.meta?.featured),
      );
    }

    return data;
  }, [filteredData, filters.sort]);

  return {
    filters,
    setFilters,
    sortedData,
    isSearching,
  };
};
