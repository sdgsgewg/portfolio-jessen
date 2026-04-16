"use client";

import PortfolioCard from "@/components/portfolio/PortfolioCard";
import { PORTFOLIO_ENTRIES } from "@/lib/portfolio-data";
import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import { Filter, usePortfolioFilter } from "@/hooks/usePortfolioFilter";
import { ProjectPlatform, ProjectRole } from "@/types/project";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { motion } from "framer-motion";
import TechFilter from "@/components/portfolio/TechFilter";
import {
  PROJECT_PLATFORM_OPTIONS,
  PROJECT_ROLE_OPTIONS,
} from "@/constants/project-options";
import DataNotFound from "@/components/shared/DataNotFound";
import { Loader2, Search, User, Monitor, ArrowUpDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import ActiveFiltersBar from "@/components/portfolio/ActiveFiltersBar";
import { TechName } from "@/constants/tech-stack";
import { SortType } from "@/types/SortType";

const PortfolioPage = () => {
  const router = useRouter();

  const t = useTranslations("portfolio");
  const tPortfolioProjects = useTranslations("portfolio.projects");
  const tProjectValues = useTranslations("project.values");
  const tCommon = useTranslations("common");
  const myPortfolio = PORTFOLIO_ENTRIES;

  const { filters, setFilters, sortedData, isSearching } = usePortfolioFilter(
    myPortfolio,
    tPortfolioProjects,
  );

  const clearFilters = () => {
    const reset: Filter = {
      search: "",
      tech: [],
      role: undefined,
      platform: undefined,
      difficulty: undefined,
      sort: "newest",
    };

    setFilters(reset);
    router.push("?"); // reset URL
  };

  const getTitleClassName = (): string => {
    return "text-primary";
  };

  const getSubtitleClassName = (): string => {
    return "text-text-dark dark:text-white";
  };

  const getDescriptionClassName = (): string => {
    return "text-secondary dark:text-gray-300";
  };

  const updateQuery = (newFilters: Filter) => {
    const params = new URLSearchParams();

    if (newFilters.sort) params.set("sort", newFilters.sort);
    if (newFilters.search) params.set("search", newFilters.search);
    if (newFilters.role) params.set("role", newFilters.role);
    if (newFilters.platform) params.set("platform", newFilters.platform);
    if (newFilters.tech.length > 0)
      params.set("tech", newFilters.tech.join(","));

    router.push(`?${params.toString()}`);
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    setFilters((prev) => ({
      ...prev,
      role: (params.get("role") as ProjectRole) || undefined,
      platform: (params.get("platform") as ProjectPlatform) || undefined,
      tech: (params.get("tech")?.split(",") as TechName[]) || [],
      sort: (params.get("sort") as SortType) || "newest",
      search: params.get("search") || "",
    }));
  }, []);

  return (
    <div className="container pt-12 pb-20">
      <div className="flex flex-col gap-2 mb-8">
        <h4 className={`font-semibold text-lg ${getTitleClassName()}`}>
          {t("title")}
        </h4>
        <h2
          className={`font-bold ${getSubtitleClassName()} text-3xl sm:text-4xl lg:text-5xl`}
        >
          {t("subtitle")}
        </h2>
        <p
          className={`w-full font-medium text-md md:text-lg ${getDescriptionClassName()}`}
        >
          {t("description")}
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-12">
        <div className="flex flex-col gap-4 mb-4">
          {/* Search */}
          <div className="w-full relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder={tCommon("search.placeholder")}
              className="pl-9 h-9"
              value={filters.search}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  search: e.target.value,
                }))
              }
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
                setFilters((prev) => {
                  const updated = { ...prev, role: value };
                  updateQuery(updated);
                  return updated;
                });
              }}
            >
              <SelectTrigger className="w-40 h-9 text-sm focus:ring-0">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-muted-foreground" />
                  <span className="truncate">
                    {filters.role
                      ? tProjectValues(`role.${filters.role}`)
                      : tCommon("filter.allRoles")}
                  </span>
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">
                  {tCommon("filter.allRoles")}
                </SelectItem>
                {PROJECT_ROLE_OPTIONS.map((role) => (
                  <SelectItem key={role} value={role}>
                    {tProjectValues(`role.${role}`)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Platform Dropdown */}
            <Select
              value={filters.platform ?? "all"}
              onValueChange={(val) => {
                const value =
                  val === "all" ? undefined : (val as ProjectPlatform);
                setFilters((prev) => {
                  const updated = { ...prev, platform: value };
                  updateQuery(updated);
                  return updated;
                });
              }}
            >
              <SelectTrigger className="w-46 h-9 text-sm focus:ring-0">
                <div className="flex items-center gap-2">
                  <Monitor className="w-4 h-4 text-muted-foreground" />
                  <span className="truncate">
                    {filters.platform
                      ? tProjectValues(`platform.${filters.platform}`)
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
                    {tProjectValues(`platform.${platform}`)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Tech Stack Filter */}
            <TechFilter
              value={filters.tech}
              onChange={(newTech) =>
                setFilters((prev) => {
                  const updated = { ...prev, tech: newTech };
                  updateQuery(updated);
                  return updated;
                })
              }
            />

            {/* Sort Dropdown */}
            <Select
              value={filters.sort}
              onValueChange={(val) => {
                setFilters((prev) => {
                  const updated = { ...prev, sort: val as SortType };
                  updateQuery(updated);
                  return updated;
                });
              }}
            >
              <SelectTrigger className="w-[130px] h-9 text-sm focus:ring-0">
                <div className="flex items-center gap-2">
                  <ArrowUpDown className="w-4 h-4 text-muted-foreground" />
                  <span className="truncate">
                    {tCommon(`sort.${filters.sort}`)}
                  </span>
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">{tCommon("sort.newest")}</SelectItem>
                <SelectItem value="oldest">{tCommon("sort.oldest")}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <ActiveFiltersBar
          filters={filters}
          setFilters={(updater) =>
            setFilters((prev) => {
              const updated =
                typeof updater === "function" ? updater(prev) : updater;

              updateQuery(updated);
              return updated;
            })
          }
          onClearAll={clearFilters}
          tProjectValues={tProjectValues}
          tCommon={tCommon}
        />
      </div>

      <motion.div layout className="w-full">
        {sortedData.length === 0 ? (
          <DataNotFound message={t("noProjects")} />
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {sortedData.map((portfolio) => {
              const content = tPortfolioProjects.raw(portfolio.slug);

              return (
                <PortfolioCard
                  key={portfolio.slug}
                  portfolio={{
                    ...portfolio,
                    name: content.name,
                    description: content.description,
                  }}
                />
              );
            })}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default PortfolioPage;
