import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

const BackSection = () => {
  const t = useTranslations("common.cta");
  const router = useRouter();

  return (
    <div
      onClick={() => router.back()}
      className="text-primary mb-6 inline-flex items-center gap-1 hover:gap-2 transition-all duration-300 cursor-pointer"
    >
      <FaArrowLeft className="text-lg" />
      <span className="text-lg">{t("back")}</span>
    </div>
  );
};

export default BackSection;
