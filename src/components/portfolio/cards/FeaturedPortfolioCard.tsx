"use client";

import { useSafeSectionContext } from "@/hooks/useSafeSectionContext";
import { getPrimaryColor, getSecondaryColor } from "@/lib/utils/getTextColor";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants/routes";
import { PortfolioListItem } from "@/types/portfolio";
import ImageWrapper from "@/components/shared/ImageWrapper";
import TechBadge from "@/components/shared/TechBadge";
import { getPortfolioCardData } from "@/lib/portfolio/getPortfolioCardData";
import PortfolioCardActions from "./shared/PortfolioCardActions";

interface FeaturedPortfolioCardProps {
  portfolio: PortfolioListItem;
}

const FeaturedPortfolioCard = ({ portfolio }: FeaturedPortfolioCardProps) => {
  const locale = useLocale();
  const router = useRouter();

  const { isOdd } = useSafeSectionContext();

  const { slug, description, links, meta } = portfolio;

  const { techStack } = getPortfolioCardData(portfolio);

  const handleClick = () => {
    router.push(`/${locale}/${ROUTES.PORTFOLIO}/${slug}`);
  };

  return (
    <div
      className="group grid cursor-pointer items-center gap-6 overflow-hidden transition-all duration-300 hover:-translate-y-1 md:grid-cols-2"
      onClick={handleClick}
    >
      <ImageWrapper
        src={portfolio.image}
        alt={portfolio.slug}
        className={{
          container: "h-64 w-full rounded-2xl md:h-80",
        }}
      />

      <div>
        <h2
          className={`mb-3 text-2xl font-bold md:text-3xl ${getPrimaryColor(
            isOdd,
          )}`}
        >
          {portfolio.name}
        </h2>

        <div className="mb-4 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>

        {description && (
          <p
            className={`mb-4 line-clamp-3 text-base ${getSecondaryColor(
              isOdd,
            )}`}
          >
            {description}
          </p>
        )}

        <PortfolioCardActions
          links={links}
          platform={meta.platform}
          variant="overlay"
        />
      </div>
    </div>
  );
};

export default FeaturedPortfolioCard;
