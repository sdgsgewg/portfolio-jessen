import React from "react";
import ImageWrapper from "../shared/ImageWrapper";
import { HeroSectionData } from "@/types/detail-page/HeroSectionData";

type HeroSectionProps = HeroSectionData;

const HeroSection = ({ image, slug }: HeroSectionProps) => {
  return (
    <ImageWrapper
      src={image}
      alt={slug}
      className={{
        container: "w-full h-100 rounded-2xl",
        overlay: "bg-linear-to-t from-black/60 via-black/20 to-transparent",
      }}
      priority
    />
  );
};

export default HeroSection;
