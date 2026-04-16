import { PORTFOLIO_ENTRIES } from "@/lib/portfolio-data";
import { useLocale } from "next-intl";
import React from "react";
import { useTranslations } from "next-intl";
import PortfolioCard from "./PortfolioCard";
import SectionWrapper from "../section/SectionWrapper";
import { FaStar } from "react-icons/fa";
import { ROUTES } from "@/constants/routes";
import FeaturedPortfolioCard from "./FeaturedPortfolioCard";

const Portfolio = () => {
  const t = useTranslations("portfolio");
  const tProjects = useTranslations("portfolio.projects");
  const tBadges = useTranslations("common.badges");
  const locale = useLocale();
  const myPortfolio = PORTFOLIO_ENTRIES;

  const cta = {
    label: t("cta.label"),
    url: `${locale}/${ROUTES.PORTFOLIO}`,
  };

  const featured =
    myPortfolio.find((entry) => entry.meta?.featured) || myPortfolio[0];
  const rest = myPortfolio
    .filter((entry) => entry.slug !== featured.slug)
    .slice(0, 3);

  const featuredContent = tProjects.raw(featured.slug);

  return (
    <SectionWrapper
      title={t("title")}
      subtitle={t("subtitle")}
      description={t("description")}
      cta={cta}
    >
      <>
        {/* FEATURED */}
        <div className="relative mb-12">
          {/* Badge */}
          <span className="absolute -top-3 left-4 bg-linear-to-r from-primary to-teal-400 text-white flex flex-row gap-1 items-center text-xs px-3 py-1 rounded-full shadow">
            <FaStar className="text-[10px]" />
            <p className="m-0">{tBadges("featured")}</p>
          </span>

          {/* Card */}
          <div className="border border-primary/20 rounded-2xl p-4 pt-6 md:p-6">
            <FeaturedPortfolioCard
              portfolio={{
                ...featured,
                name: featuredContent.name,
                description: featuredContent.description,
                features: featuredContent.features,
              }}
            />
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((portfolio) => {
            const content = tProjects.raw(portfolio.slug);

            return (
              <PortfolioCard
                key={portfolio.slug}
                portfolio={{
                  ...portfolio,
                  name: content.name,
                  description: content.description,
                  features: content.features,
                }}
              />
            );
          })}
        </div>
      </>
    </SectionWrapper>
  );
};

export default Portfolio;
