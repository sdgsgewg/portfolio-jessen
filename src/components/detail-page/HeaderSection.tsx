import { HeaderSectionData } from "@/types/detail-page/HeaderSectionData";
import React from "react";

type HeaderSectionProps = HeaderSectionData;

const HeaderSection = ({ text, children }: HeaderSectionProps) => {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-3xl md:text-4xl font-bold">{text}</h1>

      {children}
    </div>
  );
};

export default HeaderSection;
