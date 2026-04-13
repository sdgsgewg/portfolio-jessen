import React from "react";
import TechnicalSkill from "./skills/TechnicalSkill";
import SoftSkill from "./skills/SoftSkill";
import { useTranslations } from "next-intl";
import SectionWrapper from "./section/SectionWrapper";

const Skills = () => {
  const t = useTranslations("skills");

  return (
    <SectionWrapper
      title={t("title")}
      subtitle={t("subtitle")}
      description={t("description")}
    >
      <div className="w-full flex flex-col lg:flex-row lg:gap-12">
        <TechnicalSkill />
        <SoftSkill />
      </div>
    </SectionWrapper>
  );
};

export default Skills;
