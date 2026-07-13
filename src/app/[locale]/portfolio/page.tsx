"use client";

import PortfolioCard from "@/components/portfolio/PortfolioCard";
import { PORTFOLIO_ENTRIES } from "@/lib/portfolio-data";
import { useTranslations } from "next-intl";
import { Filter, usePortfolioFilter } from "@/hooks/usePortfolioFilter";
import { ProjectPlatform, ProjectRole } from "@/types/project";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { motion } from "framer-motion";
import DataNotFound from "@/components/shared/DataNotFound";
import ActiveFiltersBar from "@/components/portfolio/ActiveFiltersBar";
import { TechName } from "@/constants/tech-stack";
import { SortType } from "@/types/SortType";
import PortfolioFilters from "@/components/portfolio/PortfolioFilters";

const PortfolioPage = () => {
  const router = useRouter();

  const t = useTranslations("portfolio");
  const tPortfolioProjects = useTranslations("portfolio.projects");
  const tProjectValues = useTranslations("project.values");
  const tCommon = useTranslations("common");
  const myPortfolio = PORTFOLIO_ENTRIES;

  const { filters, setFilters, sortedData, isSearching } = usePortfolioFilter(
    myPortfolio,
    tPortfolioProjects,
  );

  const clearFilters = () => {
    const reset: Filter = {
      search: "",
      tech: [],
      role: undefined,
      platform: undefined,
      difficulty: undefined,
      sort: "newest",
    };

    setFilters(reset);
    router.push("?"); // reset URL
  };

  const getTitleClassName = (): string => {
    return "text-primary";
  };

  const getSubtitleClassName = (): string => {
    return "text-text-dark dark:text-white";
  };

  const getDescriptionClassName = (): string => {
    return "text-secondary dark:text-gray-300";
  };

  const updateQuery = (newFilters: Filter) => {
    const params = new URLSearchParams();

    if (newFilters.sort) params.set("sort", newFilters.sort);
    if (newFilters.search) params.set("search", newFilters.search);
    if (newFilters.role) params.set("role", newFilters.role);
    if (newFilters.platform) params.set("platform", newFilters.platform);
    if (newFilters.tech.length > 0)
      params.set("tech", newFilters.tech.join(","));

    router.push(`?${params.toString()}`);
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    setFilters((prev) => ({
      ...prev,
      role: (params.get("role") as ProjectRole) || undefined,
      platform: (params.get("platform") as ProjectPlatform) || undefined,
      tech: (params.get("tech")?.split(",") as TechName[]) || [],
      sort: (params.get("sort") as SortType) || "newest",
      search: params.get("search") || "",
    }));
  }, []);

  return (
    <div className="container pt-12 pb-20">
      <div className="flex flex-col gap-2 mb-8">
        <h4 className={`font-semibold text-lg ${getTitleClassName()}`}>
          {t("title")}
        </h4>
        <h2
          className={`font-bold ${getSubtitleClassName()} text-3xl sm:text-4xl lg:text-5xl`}
        >
          {t("subtitle")}
        </h2>
        <p
          className={`w-full font-medium text-md md:text-lg ${getDescriptionClassName()}`}
        >
          {t("description")}
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col gap-4 mb-12">
        <PortfolioFilters
          filters={filters}
          setFilters={setFilters}
          updateQuery={updateQuery}
          isSearching={isSearching}
        />

        <ActiveFiltersBar
          filters={filters}
          setFilters={(updater) =>
            setFilters((prev) => {
              const updated =
                typeof updater === "function" ? updater(prev) : updater;

              updateQuery(updated);
              return updated;
            })
          }
          onClearAll={clearFilters}
          tProjectValues={tProjectValues}
          tCommon={tCommon}
        />
      </div>

      <motion.div layout className="w-full">
        {sortedData.length === 0 ? (
          <DataNotFound message={t("noProjects")} />
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {sortedData.map((portfolio) => {
              const content = tPortfolioProjects.raw(portfolio.slug);

              return (
                <PortfolioCard
                  key={portfolio.slug}
                  portfolio={{
                    ...portfolio,
                    name: content.name,
                    description: content.description,
                  }}
                />
              );
            })}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default PortfolioPage;
