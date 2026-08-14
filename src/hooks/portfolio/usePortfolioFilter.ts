import { PortfolioFilter } from "@/types/portfolio";
import { useFilters } from "../useFilters";

const DEFAULT_FILTER: PortfolioFilter = {
  search: "",

  tech: [],
  role: undefined,
  platform: undefined,
  difficulty: undefined,

  sortBy: "start_date",
  sortOrder: "desc",
};

export default function usePortfolioFilter() {
  const filter = useFilters(DEFAULT_FILTER);

  return {
    ...filter,
  };
}
