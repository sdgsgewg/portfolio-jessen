import { COMSERV_ENTRIES } from "@/lib/community-data";
import { useLocale, useTranslations } from "next-intl";
import React from "react";
import ComServCard from "./ComServCard";
import SectionWrapper from "../section/SectionWrapper";

const ComServ = () => {
  const t = useTranslations("community");
  const locale = useLocale();
  const comServs =
    COMSERV_ENTRIES[locale as keyof typeof COMSERV_ENTRIES] ||
    COMSERV_ENTRIES.en;

  return (
    <SectionWrapper
      title={t("title")}
      subtitle={t("subtitle")}
      description={t("description")}
    >
      {/* <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto"> */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-6 xl:w-10/12 xl:mx-auto">
        {comServs.map((comserv) => (
          <ComServCard key={`${locale}-${comserv.id}`} comserv={comserv} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ComServ;
