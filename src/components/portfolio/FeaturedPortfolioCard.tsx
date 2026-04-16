"use client";

import { FaGithub, FaFileAlt } from "react-icons/fa";
import { MdPublic } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";
import { useSafeSectionContext } from "@/hooks/useSafeSectionContext";
import { getPrimaryColor, getSecondaryColor } from "@/lib/utils/getTextColor";
import TechBadge from "../shared/TechBadge";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants/routes";
import ImageWrapper from "../shared/ImageWrapper";
import { Portfolio } from "@/types/portfolio";
import { filterTechByCategory } from "@/lib/filter-tech-stack";

interface FeaturedPortfolioCardProps {
  portfolio: Portfolio;
}

const FeaturedPortfolioCard = ({ portfolio }: FeaturedPortfolioCardProps) => {
  const locale = useLocale();
  const router = useRouter();

  const { isOdd } = useSafeSectionContext();

  const { slug, description, links } = portfolio;

  const modifiedTechStack = filterTechByCategory(portfolio.techStack, [
    "language",
    "framework",
    "library",
  ]);

  const modifiedDescription = description
    ? `${description.excerpt} ${description.moreText}`
    : "";

  const deployedLink = links.web || links.model;

  const handleClick = () => {
    router.push(`/${locale}/${ROUTES.PORTFOLIO}/${slug}`);
  };

  return (
    <div
      className="group relative grid md:grid-cols-2 gap-6 items-center overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer"
      onClick={handleClick}
    >
      {/* IMAGE */}
      <ImageWrapper
        src={portfolio.image}
        alt={portfolio.slug}
        className={{
          container: "w-full h-64 md:h-80 rounded-2xl",
        }}
      />

      {/* CONTENT */}
      <div>
        {/* Title */}
        <h2
          className={`text-2xl md:text-3xl font-bold ${getPrimaryColor(isOdd)} mb-3`}
        >
          {portfolio.name}
        </h2>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mb-4">
          {modifiedTechStack.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>

        {/* Description */}
        {portfolio.description && (
          <p
            className={`line-clamp-3 text-base ${getSecondaryColor(isOdd)} mb-4`}
          >
            {modifiedDescription}
          </p>
        )}

        {/* CTA */}
        <div className="flex gap-3 flex-wrap">
          <a
            href={
              portfolio.meta?.platform === "ai-model"
                ? portfolio.links.paper
                : portfolio.links.github
            }
            target="_blank"
            className="px-5 py-2 bg-slate-900 dark:bg-slate-950 text-white rounded-full flex items-center gap-2"
          >
            {portfolio.meta?.platform === "ai-model" ? (
              <FaFileAlt />
            ) : (
              <FaGithub />
            )}
          </a>

          {deployedLink && (
            <a
              href={deployedLink}
              target="_blank"
              className="px-5 py-2 bg-primary text-white rounded-full flex items-center gap-2"
            >
              {portfolio.meta?.platform === "ai-model" ? (
                <GiArtificialIntelligence />
              ) : (
                <MdPublic />
              )}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPortfolioCard;
