"use client";

import { X } from "lucide-react";
import { PortfolioFilter } from "@/types/portfolio";
import { useTranslations } from "next-intl";

interface Props {
  filters: PortfolioFilter;

  setFilter: <K extends keyof PortfolioFilter>(
    key: K,
    value: PortfolioFilter[K],
  ) => void;

  clearFilters: () => void;
}

export default function ActiveFiltersBar({
  filters,
  setFilter,
  clearFilters,
}: Props) {
  const tProjectOptions = useTranslations("project.options");

  const chips: {
    label: string;
    onRemove: () => void;
  }[] = [];

  // Search
  if (filters.search) {
    chips.push({
      label: `Search: ${filters.search}`,
      onRemove: () => setFilter("search", ""),
    });
  }

  // Role
  if (filters.role) {
    chips.push({
      label: tProjectOptions(`role.${filters.role}`),
      onRemove: () => setFilter("role", undefined),
    });
  }

  // Platform
  if (filters.platform) {
    chips.push({
      label: tProjectOptions(`platform.${filters.platform}`),
      onRemove: () => setFilter("platform", undefined),
    });
  }

  // Tech
  if (filters.tech) {
    filters.tech.forEach((tech) => {
      chips.push({
        label: tech,
        onRemove: () =>
          setFilter(
            "tech",
            filters.tech && filters.tech.filter((t) => t !== tech),
          ),
      });
    });
  }

  if (chips.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2">
      {chips.map((chip, i) => (
        <span
          key={i}
          className="group inline-flex items-center gap-1.5 text-xs bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-full cursor-pointer transition-colors"
          onClick={chip.onRemove}
        >
          {chip.label}
          <div className="rounded-full bg-slate-200 dark:bg-slate-700 p-0.5 group-hover:bg-slate-300 dark:group-hover:bg-slate-600 transition-colors">
            <X className="w-3 h-3 text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200" />
          </div>
        </span>
      ))}

      {/* Clear all */}
      <button
        onClick={clearFilters}
        className="text-xs underline ml-2 text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
      >
        Clear all
      </button>
    </div>
  );
}
