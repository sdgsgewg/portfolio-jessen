import {
  ProjectPlatform,
  ProjectRole,
  ProjectDifficulty,
  ProjectTeam,
  ProjectStatus,
  ProjectOrigin,
} from "@/types/project";

export const PROJECT_ROLE_OPTIONS: ProjectRole[] = [
  "frontend",
  "backend",
  "fullstack",
  "ui-ux",
  "ai",
];

export const PROJECT_PLATFORM_OPTIONS: ProjectPlatform[] = [
  "website",
  "mobile",
  "ai-model",
];

export const PROJECT_DIFFICULTY_OPTIONS: ProjectDifficulty[] = [
  "easy",
  "medium",
  "hard",
];

export const PROJECT_TEAM_OPTIONS: ProjectTeam[] = ["solo", "team"];

export const PROJECT_STATUS_OPTIONS: ProjectStatus[] = [
  "completed",
  "in-progress",
];

export const PROJECT_ORIGIN_OPTIONS: ProjectOrigin[] = [
  "practice",
  "assignment",
  "real-world",
  "internal",
  "external",
];
