import { Loader2, Monitor, Search, User } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";
import { Input } from "../../ui/input";
import { motion } from "framer-motion";
import { ProjectPlatform, ProjectRole } from "@/types/project";
import {
  PROJECT_PLATFORM_OPTIONS,
  PROJECT_ROLE_OPTIONS,
} from "@/constants/project-options";
import TechFilter from "./TechFilter";
import { PortfolioFilter } from "@/types/portfolio";
import { SelectField } from "../../fields";

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
        <SelectField<ProjectRole>
          value={filters.role}
          options={PROJECT_ROLE_OPTIONS}
          onChange={(value) => setFilter("role", value)}
          allLabel={tCommon("filter.allRoles")}
          getLabel={(role) => tProjectOptions(`role.${role}`)}
          icon={<User />}
          className="w-54"
        />

        {/* Platform Dropdown */}
        <SelectField<ProjectPlatform>
          value={filters.platform}
          options={PROJECT_PLATFORM_OPTIONS}
          onChange={(value) => setFilter("platform", value)}
          allLabel={tCommon("filter.allPlatforms")}
          getLabel={(platform) => tProjectOptions(`platform.${platform}`)}
          icon={<Monitor />}
          className="w-46"
        />

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
