import { useTranslations } from "next-intl";
import { FaCheckCircle } from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import { FeatureSectionData } from "@/types/detail-page/FeatureSectionData";

type FeatureSectionProps = FeatureSectionData;

const FeatureSection = ({ data }: FeatureSectionProps) => {
  const t = useTranslations("portfolio.detail.sections");

  return (
    <div className="">
      <SectionTitle title={t("features")} />

      <ul className="grid sm:grid-cols-2 gap-3">
        {data.map((feature: string, index: number) => (
          <li
            key={index}
            className="flex items-start gap-2 bg-primary/5 border border-primary/10 rounded-lg p-3"
          >
            <FaCheckCircle className="text-primary w-4 h-4 mt-1 shrink-0" />
            <span className="text-sm text-secondary dark:text-gray-300 leading-relaxed">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureSection;
