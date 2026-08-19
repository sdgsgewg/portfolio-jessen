"use client";

import { useSafeSectionContext } from "@/hooks/useSafeSectionContext";
import { getPrimaryColor, getSecondaryColor } from "@/lib/utils/getTextColor";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants/routes";
import { PortfolioListItem } from "@/types/portfolio";
import { Card, CardContent } from "@/components/ui/card";
import ImageWrapper from "@/components/shared/ImageWrapper";
import TechBadge from "@/components/shared/TechBadge";
import { getPortfolioCardData } from "@/lib/portfolio/getPortfolioCardData";
import PortfolioCardActions from "./shared/PortfolioCardActions";

interface PortfolioCardProps {
  portfolio: PortfolioListItem;
}

const PortfolioCard = ({ portfolio }: PortfolioCardProps) => {
  const locale = useLocale();
  const router = useRouter();

  const { isOdd } = useSafeSectionContext();

  const { slug, description, links, meta } = portfolio;

  const { techStack } = getPortfolioCardData(portfolio);

  const handleClick = () => {
    router.push(`/${locale}/${ROUTES.PORTFOLIO}/${slug}`);
  };

  return (
    <Card
      className="group relative cursor-pointer overflow-hidden rounded-2xl border-white/10 bg-white/5 py-0 shadow-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      onClick={handleClick}
    >
      <div className="relative h-56 w-full overflow-hidden">
        <ImageWrapper
          src={portfolio.image}
          alt={portfolio.slug}
          className={{
            image: "transition-transform duration-300 group-hover:scale-105",
            overlay: "bg-black/40 opacity-0 group-hover:opacity-100",
          }}
          hoverOverlay
        />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <PortfolioCardActions
            links={links}
            platform={meta.platform}
            variant="overlay"
          />
        </div>
      </div>

      <CardContent className="px-5 pb-2">
        <h3 className={`mb-2 text-lg font-semibold ${getPrimaryColor(isOdd)}`}>
          {portfolio.name}
        </h3>

        <div className="mb-3 flex flex-wrap gap-2">
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
      </CardContent>
    </Card>
  );
};

export default PortfolioCard;
