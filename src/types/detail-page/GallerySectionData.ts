import { PortfolioGallery } from "@/lib/portfolio-data";

type GalleryType = string[] | PortfolioGallery;

export type GallerySectionData = {
  data: GalleryType;
  slug: string;
};
