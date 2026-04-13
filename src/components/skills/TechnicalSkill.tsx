import React from "react";
import TechIcons from "./TechIcons";
import SkillContentWrapper from "./SkillContentWrapper";
import { useTranslations } from "next-intl";

const TechnicalSkill = () => {
  const t = useTranslations("skills.technicalSkill");

  return (
    <SkillContentWrapper
      title={t("title")}
      description={t("description")}
      slide="slide-left"
    >
      <div className="relative w-full h-auto overflow-hidden mt-6">
        <div className="skills-content flex gap-6">
          <TechIcons />
          <TechIcons />
        </div>
      </div>
    </SkillContentWrapper>
  );
};

export default TechnicalSkill;
