import { TechName } from "@/constants/tech-stack";
import { ExpandableText } from "../ExpandableText";

export type PortfolioLink = {
  github?: string;
  web?: string;
  paper?: string;
  model?: string;
};

export type PortfolioGallery = {
  key: string;
  images: string[];
}[];

export type Portfolio = {
  image: string;
  name?: string;
  slug: string;
  techStack: TechName[];
  date: string;

  description?: ExpandableText;

  features?: string[];
  gallery?: PortfolioGallery;
  links: PortfolioLink;

  meta?: {
    origin: "practice" | "assignment" | "real-world";
    platform: "website" | "ai-model";
    role: "frontend" | "backend" | "fullstack" | "ui-ux" | "ai";

    team?: "solo" | "team";
    difficulty?: "easy" | "medium" | "hard";

    featured?: boolean;
    status?: "completed" | "in-progress";

    impact?: string;
  };
};
