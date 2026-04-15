import { ResponsibilitySectionData } from "@/types/detail-page/ResponsibilitySectionData";
import { useTranslations } from "next-intl";
import SectionTitle from "./SectionTitle";

type ResponsibilitySectionProps = ResponsibilitySectionData;

const ResponsibilitySection = ({ data }: ResponsibilitySectionProps) => {
  const t = useTranslations("career.detail.sections");

  return (
    <div className="">
      <SectionTitle title={t("responsibilities")} />

      <ul className="space-y-2">
        {data.map((item: string, i: number) => (
          <li key={i} className="flex gap-2">
            <span className="text-primary">•</span>
            <span className="text-secondary">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResponsibilitySection;
