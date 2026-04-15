import { PortfolioGallery } from "../portfolio";

type GalleryType = string[] | PortfolioGallery;

export type GallerySectionData = {
  data: GalleryType;
  slug: string;
};
