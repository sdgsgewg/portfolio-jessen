import { useCallback, useMemo, useState } from "react";
import { useRouter } from "@/navigation";
import { useDebounce } from "./useDebounce";

interface FilterBase {
  search: string;
}

export function useFilters<TFilter extends FilterBase>(defaultFilter: TFilter) {
  const router = useRouter();

  const [filters, setFilters] = useState(defaultFilter);

  const debouncedSearch = useDebounce(filters.search, 500);

  const debouncedFilters = useMemo(
    () => ({
      ...filters,
      search: debouncedSearch,
    }),
    [filters, debouncedSearch],
  );

  const createQuery = useCallback((filter: TFilter) => {
    const params = new URLSearchParams();

    Object.entries(filter).forEach(([key, value]) => {
      if (value === undefined && value === null && value === "") {
        return;
      }

      if (Array.isArray(value)) {
        if (value.length > 0) {
          params.set(key, value.join(","));
        }

        return;
      }

      params.set(key, String(value));
    });

    return params.toString();
  }, []);

  const syncUrl = useCallback(
    (next: TFilter) => {
      const query = createQuery(next);

      const current = window.location.search.replace(/^\?/, "");

      if (current === query) return;

      router.replace(query ? `?${query}` : "?");
    },
    [createQuery, router],
  );

  function updateFilters(updater: (previous: TFilter) => TFilter) {
    setFilters(updater);
  }

  function setFilter<K extends keyof TFilter>(key: K, value: TFilter[K]) {
    updateFilters((previous) => {
      const next = {
        ...previous,
        [key]: value,
      } as TFilter;

      return next;
    });
  }

  function setFiltersPartial(values: Partial<TFilter>) {
    updateFilters((previous) => {
      const next = {
        ...previous,
        ...values,
      } as TFilter;

      return next;
    });
  }

  function clearFilters() {
    setFilters(defaultFilter);
    router.replace("?");
  }

  return {
    filters,
    debouncedFilters,

    setFilter,
    setFilters: setFiltersPartial,

    syncUrl,
    clearFilters,
  };
}
