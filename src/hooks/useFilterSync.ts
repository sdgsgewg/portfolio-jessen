import { useEffect } from "react";

interface Filter {
  search: string;
}

export function useFilterSync<TFilter extends Filter>(
  filters: TFilter,
  syncUrl: (filters: TFilter) => void,
) {
  useEffect(() => {
    syncUrl(filters);
  }, [filters, syncUrl]);
}
