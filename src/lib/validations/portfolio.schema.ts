import { z } from "zod";
import { idSchema, slugSchema } from "./primitives.schema";
import { baseQuerySchema, sortingQuerySchema } from "./query.schema";
import {
  portfolioSortBySchema,
  projectDifficultySchema,
  projectPlatformSchema,
  projectRoleSchema,
  sortOrderSchema,
  techNameSchema,
} from "./enums.schema";

export const portfolioMutationSchema = z.object({
  image: z.string().nullable().optional(),
  name: z.string().min(1).max(255),
  fifa_code: z.string().min(1).max(3),
  confederation_id: z.string().nullable().optional(),
});

export const createPortfolioSchema = portfolioMutationSchema;

export const updatePortfolioSchema = portfolioMutationSchema;

export const portfolioSchema = portfolioMutationSchema.extend({
  id: idSchema,
  slug: slugSchema,
  created_at: z.string(),
  updated_at: z.string().nullable(),
});

export const portfolioListSchema = z.array(portfolioSchema);

export const portfolioListQuerySchema = baseQuerySchema
  .merge(sortingQuerySchema)
  .extend({
    tech: z.string().optional(),

    role: projectRoleSchema.optional(),

    platform: projectPlatformSchema.optional(),

    difficulty: projectDifficultySchema.optional(),

    sortBy: portfolioSortBySchema.default("start_date"),
  });

export const portfolioFilterSchema = z.object({
  search: z.string().default(""),
  tech: z.array(techNameSchema).default([]),

  role: projectRoleSchema.optional(),
  platform: projectPlatformSchema.optional(),
  difficulty: projectDifficultySchema.optional(),

  sortBy: portfolioSortBySchema.default("start_date"),
  sortOrder: sortOrderSchema.default("asc"),
});
