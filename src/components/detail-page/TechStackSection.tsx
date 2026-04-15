import React from "react";
import { TechStackSectionData } from "@/types/detail-page/TechStackSectionData";
import TechBadge from "../shared/TechBadge";
import { groupTechStack } from "@/lib/group-tech-stack";
import { useTranslations } from "next-intl";

type TechStackSectionProps = TechStackSectionData;

const CATEGORY_LABEL: Record<string, string> = {
  language: "Language",
  framework: "Framework",
  library: "Library",
  database: "Database",
  tool: "Tools",
  platform: "Platform",
};

const CATEGORY_ORDER = [
  "language",
  "framework",
  "library",
  "database",
  "platform",
  "tool",
];

const CATEGORY_ICON: Record<string, string> = {
  language: "🧠",
  framework: "🏗️",
  library: "📦",
  database: "🗄️",
  platform: "☁️",
  tool: "🛠️",
};

const TechStackSection = ({ data }: TechStackSectionProps) => {
  const t = useTranslations("portfolio.detail.sections");

  const grouped = groupTechStack(data);

  return (
    <div className="rounded-xl bg-muted/20 p-4">
      <div className="mb-3">
        <h1 className="text-sm font-semibold text-muted-foreground">
          {t("techStack")}
        </h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
        {CATEGORY_ORDER.map((category) => {
          const techs = grouped[category];
          if (!techs) return null;

          return (
            <div key={category}>
              <h3 className="text-xs text-muted-foreground mb-2">
                {CATEGORY_ICON[category]} {CATEGORY_LABEL[category]}
              </h3>

              <div className="flex flex-wrap gap-2">
                {techs
                  .slice()
                  .sort()
                  .map((tech) => (
                    <TechBadge key={tech} tech={tech} />
                  ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechStackSection;
