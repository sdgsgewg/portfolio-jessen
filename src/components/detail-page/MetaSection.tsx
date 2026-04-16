import { Portfolio } from "@/types/portfolio";
import { useTranslations } from "next-intl";

type Meta = Portfolio["meta"];

interface MetaSectionProps {
  meta: Meta;
}

const META_VALUE_STYLE: Record<string, string> = {
  practice: "bg-yellow-100 text-yellow-700",
  assignment: "bg-orange-100 text-orange-700",
  "real-world": "bg-green-100 text-green-700",

  frontend: "bg-blue-100 text-blue-700",
  backend: "bg-purple-100 text-purple-700",
  fullstack: "bg-indigo-100 text-indigo-700",
  "ui-ux": "bg-rose-100 text-rose-700",
  ai: "bg-pink-100 text-pink-700",

  solo: "bg-gray-100 text-gray-700",
  team: "bg-gray-200 text-gray-800",

  easy: "bg-green-100 text-green-700",
  medium: "bg-yellow-100 text-yellow-700",
  hard: "bg-red-100 text-red-700",

  completed: "bg-green-100 text-green-700",
  "in-progress": "bg-blue-100 text-blue-700",
};

const MetaBadge = ({ metaKey, value }: { metaKey: string; value: string }) => {
  const tLabel = useTranslations("portfolio.meta.labels");
  const tValue = useTranslations("portfolio.meta.values");

  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs text-muted-foreground">
        {tLabel(metaKey) || metaKey}
      </span>
      <span
        className={`text-xs px-2 py-1 rounded-md w-fit capitalize ${META_VALUE_STYLE[value] || "bg-gray-100"}`}
      >
        {tValue(`${metaKey}.${value}`) || value}
      </span>
    </div>
  );
};

const MetaSection = ({ meta }: MetaSectionProps) => {
  const t = useTranslations("portfolio.detail");
  const tBadges = useTranslations("common.badges");

  if (!meta) return null;

  return (
    <div className="relative border rounded-xl p-4 bg-muted/30">
      {/* FLOATING BADGE */}
      {meta.featured && (
        <span className="absolute top-3 right-3 text-xs bg-primary text-white px-2 py-1 rounded-full shadow">
          ⭐ {tBadges("featured")}
        </span>
      )}

      {/* TOP BAR */}
      <div className="mb-3">
        <h1 className="text-sm font-semibold text-muted-foreground">
          {t("sections.projectInfo")}
        </h1>
      </div>

      {/* META GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {Object.entries(meta).map(([key, value]) => {
          if (!value || key === "impact" || key === "featured") return null;

          return <MetaBadge key={key} metaKey={key} value={value as string} />;
        })}
      </div>

      {/* Impact highlight */}
      {meta.impact && (
        <div className="mt-4 p-3 rounded-lg bg-primary/5 border border-primary/20">
          <p className="text-sm font-medium">💡 Impact</p>
          <p className="text-sm text-muted-foreground mt-1">{meta.impact}</p>
        </div>
      )}
    </div>
  );
};

export default MetaSection;
