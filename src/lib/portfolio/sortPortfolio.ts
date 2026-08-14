import { PortfolioListItem } from "@/types/portfolio";
import { PortfolioSortBy, SortOrder } from "@/types/SortType";

export function sortPortfolio(
  portfolio: PortfolioListItem[],
  sortBy: PortfolioSortBy,
  sortOrder: SortOrder,
) {
  const data = [...portfolio];

  // sorting logic...

  return data;
}
