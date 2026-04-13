import SkillContentWrapper from "./SkillContentWrapper";
import { useTranslations } from "next-intl";

const SoftSkill = () => {
  const t = useTranslations("skills.softSkill");

  return (
    <SkillContentWrapper
      title={t("title")}
      description={t("description")}
      slide="slide-right"
    />
  );
};

export default SoftSkill;
