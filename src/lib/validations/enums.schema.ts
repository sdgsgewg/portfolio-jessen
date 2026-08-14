import { TECH_STACK } from "@/constants/tech-stack";
import z from "zod";

// Portfolio

export const techNameSchema = z.enum(
  TECH_STACK.map((tech) => tech.name) as [
    (typeof TECH_STACK)[number]["name"],
    ...(typeof TECH_STACK)[number]["name"][],
  ],
);

export const projectRoleSchema = z.enum([
  "frontend",
  "backend",
  "fullstack",
  "ui-ux",
  "ai",
]);

export const projectPlatformSchema = z.enum(["mobile", "website", "ai-model"]);

export const projectDifficultySchema = z.enum(["easy", "medium", "hard"]);

export const portfolioSortBySchema = z.enum(["name", "start_date"]);

// Filter, Sort, Pagination

export const sortOrderSchema = z.enum(["asc", "desc"]);
