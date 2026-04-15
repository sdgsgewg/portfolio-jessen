import { Project } from "@/types/career";
import { useTranslations } from "next-intl";
import SectionTitle from "../detail-page/SectionTitle";

interface ProjectTableProps {
  projects?: Project[];
}

const ProjectTable = ({ projects }: ProjectTableProps) => {
  const tSections = useTranslations("career.detail.sections");
  const tTable = useTranslations("career.detail.table");

  if (!projects) return null;

  return (
    <div className="">
      <SectionTitle title={tSections("projects")} />

      <div className="overflow-auto border rounded-xl">
        <table className="min-w-250 w-full text-sm table-fixed">
          <thead className="bg-slate-100 dark:bg-slate-800 text-left">
            <tr>
              <th className="p-3 w-35">{tTable("name")}</th>
              <th className="p-3 w-45">{tTable("focus")}</th>
              <th className="p-3 w-35">{tTable("role")}</th>
              <th className="p-3 w-40">{tTable("techStack")}</th>
              <th className="p-3 w-40">{tTable("period")}</th>
              <th className="p-3 w-65">{tTable("description")}</th>
              <th className="p-3 w-75">{tTable("contributions")}</th>
            </tr>
          </thead>

          <tbody>
            {projects.map((proj, i) => (
              <tr
                key={i}
                className="border-t hover:bg-slate-50 dark:hover:bg-slate-900 transition"
              >
                <td className="p-3 font-semibold align-top wrap-break-word">
                  {proj.name}
                </td>
                <td className="p-3 align-top wrap-break-word">{proj.focus}</td>
                <td className="p-3 text-primary align-top wrap-break-word">
                  {proj.role}
                </td>
                <td className="p-3 text-primary align-top wrap-break-word">
                  {proj.techStack.join(", ")}
                </td>
                <td className="p-3 align-top wrap-break-word">{proj.period}</td>
                <td className="p-3 align-top wrap-break-word">
                  {proj.description}
                </td>

                {/* Contributions */}
                <td className="p-3 align-top wrap-break-word">
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectTable;
