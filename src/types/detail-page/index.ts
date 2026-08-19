import { ExpandableText } from "../ExpandableText";
import { PortfolioGallery } from "../portfolio";
import { TechName } from "@/constants/tech-stack";

export type HeroSectionData = {
  image: string;
  slug: string;
};

export type HeaderSectionData = { text: string; children?: React.ReactNode };

export type TechStackSectionData = {
  data: TechName[];
};

export type DescriptionSectionData = {
  data: ExpandableText | string;
  showTitle?: boolean;
};

type GalleryType = string[] | PortfolioGallery;

export type ResponsibilitySectionData = {
  data: string[];
};

export type GallerySectionData = {
  data: GalleryType;
  slug: string;
};
