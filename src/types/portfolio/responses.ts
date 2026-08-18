import { TechName } from "@/constants/tech-stack";
import {
  ProjectDifficulty,
  ProjectOrigin,
  ProjectPlatform,
  ProjectRole,
  ProjectStatus,
  ProjectTeam,
} from "../project";

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

export type PortfolioListItem = {
  image: string;
  name: string;
  slug: string;
  techStack: TechName[];
  startDate: string;
  endDate: string;

  description?: string;

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
