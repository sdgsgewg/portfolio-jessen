"use client";

import Image from "next/image";
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

interface PortfolioCardProps {
  portfolio: Portfolio;
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

  const modifiedDescription = description
    ? `${description.excerpt} ${description.moreText}`
    : "";

  const deployedLink = links.web || links.model;

  const handleClick = () => {
    router.push(`/${locale}/${ROUTES.PORTFOLIO}/${slug}`);
  };

  if (portfolio.meta?.featured) {
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
            container: "h-64 md:h-80 rounded-2xl",
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
              href={portfolio.links.github}
              target="_blank"
              className="px-5 py-2 bg-slate-900 dark:bg-slate-950 text-white rounded-full flex items-center gap-2"
            >
              <FaGithub /> Github
            </a>

            {deployedLink && (
              <a
                href={deployedLink}
                target="_blank"
                className="px-5 py-2 bg-primary text-white rounded-full flex items-center gap-2"
              >
                <MdPublic /> Live
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white/5 backdrop-blur-sm hover:-translate-y-1 cursor-pointer"
      onClick={handleClick}
    >
      {/* IMAGE */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={portfolio.image}
          alt={portfolio.slug}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />

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
        {portfolio.description && (
          <p
            className={`line-clamp-3 text-base ${getSecondaryColor(isOdd)} mb-4`}
          >
            {modifiedDescription}
          </p>
        )}
      </div>
    </div>
  );
};

export default PortfolioCard;
