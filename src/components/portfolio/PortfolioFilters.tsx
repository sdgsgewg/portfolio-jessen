import { Loader2, Monitor, Search, User } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";
import { Input } from "../ui/input";
import { motion } from "framer-motion";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import { ProjectPlatform, ProjectRole } from "@/types/project";
import {
  PROJECT_PLATFORM_OPTIONS,
  PROJECT_ROLE_OPTIONS,
} from "@/constants/project-options";
import TechFilter from "./TechFilter";
import { PortfolioFilter } from "@/types/portfolio";

interface PortfolioFiltersProps {
  filters: PortfolioFilter;
  setFilter: <K extends keyof PortfolioFilter>(
    key: K,
    value: PortfolioFilter[K],
  ) => void;
  isSearching: boolean;
}

const PortfolioFilters = ({
  filters,
  setFilter,
  isSearching,
}: PortfolioFiltersProps) => {
  const tCommon = useTranslations("common");
  const tProjectOptions = useTranslations("project.options");

  return (
    <div className="flex flex-col gap-4 mb-4">
      {/* Search */}
      <div className="w-full relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder={tCommon("search.placeholder")}
          className="pl-9 h-9"
          value={filters.search}
          onChange={(e) => setFilter("search", e.target.value)}
        />

        {isSearching && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isSearching ? 1 : 0 }}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            <Loader2 className="w-4 h-4 animate-spin" />
          </motion.div>
        )}
      </div>

      {/* Filter */}
      <div className="flex flex-wrap items-center gap-2">
        {/* Role Dropdown */}
        <Select
          value={filters.role ?? "all"}
          onValueChange={(val) => {
            const value = val === "all" ? undefined : (val as ProjectRole);
            setFilter("role", value);
          }}
        >
          <SelectTrigger className="w-54 h-9 text-sm focus:ring-0">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-muted-foreground" />
              <span className="truncate">
                {filters.role
                  ? tProjectOptions(`role.${filters.role}`)
                  : tCommon("filter.allRoles")}
              </span>
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{tCommon("filter.allRoles")}</SelectItem>
            {PROJECT_ROLE_OPTIONS.map((role) => (
              <SelectItem key={role} value={role}>
                {tProjectOptions(`role.${role}`)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Platform Dropdown */}
        <Select
          value={filters.platform ?? "all"}
          onValueChange={(val) => {
            const value = val === "all" ? undefined : (val as ProjectPlatform);
            setFilter("platform", value);
          }}
        >
          <SelectTrigger className="w-46 h-9 text-sm focus:ring-0">
            <div className="flex items-center gap-2">
              <Monitor className="w-4 h-4 text-muted-foreground" />
              <span className="truncate">
                {filters.platform
                  ? tProjectOptions(`platform.${filters.platform}`)
                  : tCommon("filter.allPlatforms")}
              </span>
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">
              {tCommon("filter.allPlatforms")}
            </SelectItem>
            {PROJECT_PLATFORM_OPTIONS.map((platform) => (
              <SelectItem key={platform} value={platform}>
                {tProjectOptions(`platform.${platform}`)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Tech Stack Filter */}
        <TechFilter
          value={filters.tech ?? []}
          onChange={(newTech) => setFilter("tech", newTech)}
        />
      </div>
    </div>
  );
};

export default PortfolioFilters;
