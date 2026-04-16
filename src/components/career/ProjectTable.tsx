import { Project } from "@/types/career";
import { useTranslations } from "next-intl";
import SectionTitle from "../detail-page/SectionTitle";

interface ProjectTableProps {
  projects?: Project[];
}

const TableHeader = ({ title }: { title: string }) => {
  const tProjectDataLabels = useTranslations("career.project.data.labels");

  const getWidthClass = () => {
    switch (title) {
      case tProjectDataLabels("focus"):
        return "min-w-48";
      case tProjectDataLabels("techStack"):
        return "min-w-48";
      case tProjectDataLabels("description"):
        return "min-w-64";
      case tProjectDataLabels("contributions"):
        return "min-w-80";
      default:
        return "min-w-40";
    }
  };

  return (
    <th className={`p-3 text-left whitespace-nowrap ${getWidthClass()}`}>
      {title}
    </th>
  );
};

const TableData = ({ children }: { children: React.ReactNode }) => {
  return (
    <td className="p-3 align-top wrap-break-word border-x border-slate-100 dark:border-slate-800/50">
      {children}
    </td>
  );
};

const ProjectTable = ({ projects }: ProjectTableProps) => {
  const tSections = useTranslations("career.detail.sections");
  const tProjectDataLabels = useTranslations("career.project.data.labels");
  const tProjectDataValues = useTranslations("career.project.data.values");

  if (!projects) return null;

  const getModifiedPlatforms = (proj: Project) => {
    if (proj.platforms.length > 1) {
      return proj.platforms
        .map((p) => tProjectDataValues(`platform.${p}`))
        .join(" & ");
    }
    return `${tProjectDataValues(`platform.${proj.platforms[0]}`)}`;
  };

  return (
    <div className="">
      <SectionTitle title={tSections("projects")} />

      <div className="overflow-auto max-h-[65vh] border rounded-xl">
        <table className="min-w-full text-sm border-collapse">
          <thead className="sticky top-0 z-20 bg-slate-100 dark:bg-slate-800 text-left">
            <tr>
              <th className="p-3 min-w-30 sticky left-0 z-30 bg-slate-100 dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700">
                {tProjectDataLabels("name")}
              </th>
              <TableHeader title={tProjectDataLabels("focus")} />
              <TableHeader title={tProjectDataLabels("origin")} />
              <TableHeader title={tProjectDataLabels("platform")} />
              <TableHeader title={tProjectDataLabels("role")} />
              <TableHeader title={tProjectDataLabels("techStack")} />
              <TableHeader title={tProjectDataLabels("period")} />
              <TableHeader title={tProjectDataLabels("description")} />
              <TableHeader title={tProjectDataLabels("contributions")} />
            </tr>
          </thead>

          <tbody>
            {projects.map((proj, i) => (
              <tr
                key={i}
                className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900/50 group"
              >
                <td className="p-3 font-semibold align-top wrap-break-word sticky left-0 z-10 bg-background group-hover:bg-slate-50 dark:group-hover:bg-slate-900 border-r border-slate-200 dark:border-slate-700">
                  {proj.name}
                </td>
                <TableData>{proj.focus}</TableData>
                <TableData>
                  {tProjectDataValues(`origin.${proj.origin}`)}
                </TableData>
                <TableData>{getModifiedPlatforms(proj)}</TableData>
                <TableData>{tProjectDataValues(`role.${proj.role}`)}</TableData>
                <TableData>{proj.techStack.join(", ")}</TableData>
                <TableData>{proj.period}</TableData>
                <TableData>{proj.description}</TableData>

                {/* Contributions */}
                <TableData>
                  {proj.contributions ? (
                    <div className="flex flex-col gap-2">
                      {proj.contributions.map((c, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-xs text-secondary leading-relaxed"
                        >
                          <span className="text-primary">•</span>
                          <span>{c}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div>
                      <span>{`-`}</span>
                    </div>
                  )}
                </TableData>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectTable;
