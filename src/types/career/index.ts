import { TechName } from "@/constants/tech-stack";

export type Project = {
  key: string;
  name?: string;
  focus?: string;
  period?: string;

  origin: "internal" | "external";

  platforms: ("mobile" | "website")[];

  role: "frontend" | "backend" | "fullstack";

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
