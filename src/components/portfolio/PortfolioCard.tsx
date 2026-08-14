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
import { filterTechByCategory } from "@/lib/filter-tech-stack";
import ImageWrapper from "../shared/ImageWrapper";
import { PortfolioListItem } from "@/types/portfolio";

interface PortfolioCardProps {
  portfolio: PortfolioListItem;
}

const PortfolioCard = ({ portfolio }: PortfolioCardProps) => {
  const locale = useLocale();
  const router = useRouter();

  const { isOdd } = useSafeSectionContext();

  const { slug, description, links } = portfolio;

  const modifiedTechStack = filterTechByCategory(portfolio.techStack, [
    "language",
    "framework",
    "library",
  ]);

  const deployedLink = links.web || links.model;

  const handleClick = () => {
    router.push(`/${locale}/${ROUTES.PORTFOLIO}/${slug}`);
  };

  return (
    <div
      className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white/5 backdrop-blur-sm hover:-translate-y-1 cursor-pointer"
      onClick={handleClick}
    >
      {/* IMAGE */}
      <div className="relative h-56 w-full overflow-hidden">
        <ImageWrapper
          src={portfolio.image}
          alt={portfolio.slug}
          className={{
            image: "group-hover:scale-105",
            overlay: "bg-black/40 opacity-0 group-hover:opacity-100",
          }}
          hoverOverlay
        />

        {/* CTA overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition">
          <a
            href={
              portfolio.meta?.platform === "ai-model"
                ? portfolio.links.paper
                : portfolio.links.github
            }
            target="_blank"
            className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold"
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
              className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold"
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

      {/* CONTENT */}
      <div className="p-5">
        {/* Title */}
        <h3 className={`font-semibold text-lg ${getPrimaryColor(isOdd)} mb-2`}>
          {portfolio.name}
        </h3>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mb-3">
          {modifiedTechStack.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>

        {/* Description */}
        {description && (
          <p
            className={`line-clamp-3 text-base ${getSecondaryColor(isOdd)} mb-4`}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default PortfolioCard;
