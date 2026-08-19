"use client";

import { Button } from "@/components/ui/button";
import { PortfolioListItem } from "@/types/portfolio";
import { FaFileAlt, FaGithub } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdPublic } from "react-icons/md";

interface PortfolioCardActionsProps {
  links: PortfolioListItem["links"];
  platform?: PortfolioListItem["meta"]["platform"];
  variant?: "overlay" | "inline";
}

const PortfolioCardActions = ({
  links,
  platform,
  variant = "inline",
}: PortfolioCardActionsProps) => {
  const isAiModel = platform === "ai-model";

  const githubLink = links.github
    ? Object.values(links.github).find(Boolean)
    : undefined;

  const deployedLink = links.web || links.model;

  const paperLink = links.paper;

  const buttonClassName =
    variant === "overlay"
      ? "rounded-full! px-5! shadow-lg!"
      : "rounded-full! px-5!";

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <div className="flex flex-wrap gap-3">
      {isAiModel
        ? paperLink && (
            <Button
              asChild
              variant="secondary"
              className={buttonClassName}
              onClick={handleClick}
            >
              <a
                href={paperLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View paper"
              >
                <FaFileAlt />
                {variant === "inline" && <span>Paper</span>}
              </a>
            </Button>
          )
        : githubLink && (
            <Button
              asChild
              variant="secondary"
              className={buttonClassName}
              onClick={handleClick}
            >
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View GitHub repository"
              >
                <FaGithub />
                {variant === "inline" && <span>GitHub</span>}
              </a>
            </Button>
          )}

      {deployedLink && (
        <Button
          asChild
          className={buttonClassName}
          onClick={handleClick}
        >
          <a
            href={deployedLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={isAiModel ? "View AI model" : "View live website"}
          >
            {isAiModel ? <GiArtificialIntelligence /> : <MdPublic />}

            {variant === "inline" && (
              <span>{isAiModel ? "Model" : "Live Website"}</span>
            )}
          </a>
        </Button>
      )}
    </div>
  );
};

export default PortfolioCardActions;
