import { TechName } from "@/constants/tech-stack";
import { ExpandableText } from "../ExpandableText";
import { ProjectDifficulty, ProjectOrigin, ProjectPlatform, ProjectRole, ProjectStatus, ProjectTeam } from "../project";

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
  startDate: string;
  endDate: string;

  description?: ExpandableText;

  features?: string[];
  gallery?: PortfolioGallery;
  links: PortfolioLink;

  meta?: {
    origin: ProjectOrigin;
    platform: ProjectPlatform;
    role: ProjectRole;

    team?: ProjectTeam;
    difficulty?: ProjectDifficulty;

    featured?: boolean;
    status?: ProjectStatus;

    impact?: string;
  };
};
