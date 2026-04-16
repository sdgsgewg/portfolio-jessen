import { TechName } from "@/constants/tech-stack";
import { CareerProjectOrigin, ProjectPlatform, ProjectRole } from "../project";

export type Project = {
  key: string;
  name?: string;
  focus?: string;
  period?: string;

  origin: CareerProjectOrigin;

  platforms: ProjectPlatform[];

  role: ProjectRole;

  techStack: TechName[];

  description?: string;
  contributions?: string[];
};

export type Career = {
  slug: string;
  company?: {
    name: string;
    description: string;
  };
  position: string;
  joinDate: string;
  endDate: string;
  techStack: string[];
  responsibilities?: string[];
  projects?: Project[];
};
