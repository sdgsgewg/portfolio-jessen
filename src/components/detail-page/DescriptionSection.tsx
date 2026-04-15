import SectionTitle from "./SectionTitle";
import { useTranslations } from "next-intl";
import { DescriptionSectionData } from "@/types/detail-page/DescriptionSectionData";
import { ExpandableText } from "@/types/ExpandableText";

type DescriptionSectionProps = DescriptionSectionData;

const DescriptionSection = ({
  data,
  showTitle = false,
}: DescriptionSectionProps) => {
  const t = useTranslations("common.detail.sections");
  const { excerpt, moreText } = data as ExpandableText;

  const isDataTypeString = (data: unknown) => {
    return typeof data === "string";
  };

  const isString = isDataTypeString(data);

  return (
    <div className="space-y-4 text-base text-secondary dark:text-gray-300 leading-relaxed">
      {showTitle && <SectionTitle title={t("description")} />}

      {isString ? <p>{data}</p> : <p>{`${excerpt} ${moreText}`}</p>}
    </div>
  );
};

export default DescriptionSection;
