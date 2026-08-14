"use client";

import PortfolioCard from "@/components/portfolio/PortfolioCard";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import DataNotFound from "@/components/shared/DataNotFound";
import ActiveFiltersBar from "@/components/portfolio/ActiveFiltersBar";
import PortfolioFilters from "@/components/portfolio/PortfolioFilters";
import { useFilterSync } from "@/hooks/useFilterSync";
import { usePortfolioData, usePortfolioFilter } from "@/hooks/portfolio";

const PortfolioPage = () => {
  const t = useTranslations("portfolio");
  const tPortfolioProjects = useTranslations("portfolio.projects");

  const { filters, debouncedFilters, setFilter, syncUrl, clearFilters } =
    usePortfolioFilter();

  const isSearching = filters.search !== debouncedFilters.search;

  const { portfolioList } = usePortfolioData({
    ...debouncedFilters,
    search: debouncedFilters.search,
  });

  const getTitleClassName = (): string => {
    return "text-primary";
  };

  const getSubtitleClassName = (): string => {
    return "text-text-dark dark:text-white";
  };

  const getDescriptionClassName = (): string => {
    return "text-secondary dark:text-gray-300";
  };

  // Sync URL on filter
  useFilterSync(debouncedFilters, syncUrl);

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
          setFilter={setFilter}
          isSearching={isSearching}
        />

        <ActiveFiltersBar
          filters={filters}
          setFilter={setFilter}
          clearFilters={clearFilters}
        />
      </div>

      <motion.div layout className="w-full">
        {portfolioList.length === 0 ? (
          <DataNotFound message={t("noProjects")} />
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {portfolioList.map((portfolio) => {
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
