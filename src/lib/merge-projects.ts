import { Project } from "@/types/career";

export const mergeProjects = (
  baseProjects: Project[] = [],
  contentProjects: Record<string, any> = {},
) => {
  return baseProjects.map((project) => ({
    ...project,
    ...(contentProjects[project.key] || {}),
  }));
};
