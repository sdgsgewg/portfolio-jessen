import React from "react";
import PortfolioCard from "@/components/portfolio/PortfolioCard";
import { PORTFOLIO_ENTRIES } from "@/lib/portfolio-data";
import { useTranslations } from "next-intl";

const PortfolioPage = () => {
  const t = useTranslations("portfolio");
  const tProjects = useTranslations("portfolio.projects");
  const myPortfolio = PORTFOLIO_ENTRIES;

  const getTitleClassName = (): string => {
    return "text-primary";
  };

  const getSubtitleClassName = (): string => {
    return "text-text-dark dark:text-white";
  };

  const getDescriptionClassName = (): string => {
    return "text-secondary dark:text-gray-300";
  };

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {myPortfolio.map((portfolio) => {
          const content = tProjects.raw(portfolio.slug);

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
      </div>
    </div>
  );
};

export default PortfolioPage;
