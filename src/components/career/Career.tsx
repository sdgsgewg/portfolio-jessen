import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { CAREER_ENTRIES } from "@/lib/career-data";
import CareerCard from "./CareerCard";
import SectionWrapper from "../section/SectionWrapper";

const Career = () => {
  const t = useTranslations("career");
  const locale = useLocale();
  const careers = CAREER_ENTRIES;

  return (
    <SectionWrapper
      title={t("title")}
      subtitle={t("subtitle")}
      description={t("description")}
    >
      <div className="relative w-full xl:w-10/12 mx-auto">
        <div className="absolute left-4 top-0 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>

        <div className="flex flex-col gap-8">
          {careers.map((career) => {
            const content = t.raw(`entries.${career.slug}`);

            return (
              <CareerCard
                key={`${locale}-${career.slug}`}
                career={{
                  ...career,
                  company: content.company,
                  responsibilities: content.responsibilities,
                  projects: content.projects,
                }}
              />
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Career;
