import { EDUCATION_ENTRIES } from "@/lib/education-data";
import { useLocale, useTranslations } from "next-intl";
import React from "react";
import EduCard from "./EduCard";
import SectionWrapper from "../section/SectionWrapper";

const Education = () => {
  const t = useTranslations("education");
  const locale = useLocale();
  const educations =
    EDUCATION_ENTRIES[locale as keyof typeof EDUCATION_ENTRIES] ||
    EDUCATION_ENTRIES.en;

  return (
    <SectionWrapper
      title={t("title")}
      subtitle={t("subtitle")}
      description={t("description")}
    >
      <div className="slide-left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
        {educations.map((edu) => (
          <EduCard key={`${locale}-${edu.id}`} edu={edu} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Education;
