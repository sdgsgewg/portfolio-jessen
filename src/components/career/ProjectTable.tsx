import { Project } from "@/lib/career-data";
import { useTranslations } from "next-intl";

interface ProjectTableProps {
  projects?: Project[];
}

const ProjectTable = ({ projects }: ProjectTableProps) => {
  const t = useTranslations("career.detail");
  const tTable = useTranslations("career.detail.table");

  if (!projects) return null;

  return (
    <div className="mt-12">
      <h2 className="text-xl font-bold mb-4">{t("projects")}</h2>

      <div className="overflow-auto border rounded-xl">
        <table className="min-w-[1000px] w-full text-sm table-fixed">
          <thead className="bg-slate-100 dark:bg-slate-800 text-left">
            <tr>
              <th className="p-3 w-[140px]">{tTable("name")}</th>
              <th className="p-3 w-[180px]">{tTable("focus")}</th>
              <th className="p-3 w-[140px]">{tTable("role")}</th>
              <th className="p-3 w-[160px]">{tTable("period")}</th>
              <th className="p-3 w-[260px]">{tTable("description")}</th>
              <th className="p-3 w-[300px]">{tTable("contributions")}</th>
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
                <td className="p-3 align-top wrap-break-word">{proj.period}</td>
                <td className="p-3 align-top wrap-break-word">
                  {proj.description}
                </td>

                {/* Contributions */}
                <td className="p-3 align-top wrap-break-word">
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
