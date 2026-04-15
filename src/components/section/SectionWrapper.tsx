import { SECTION_NAME } from "@/constants/section-names";
import { useSafeSectionContext } from "@/hooks/useSafeSectionContext";
import { useRouter } from "next/navigation";
import React from "react";
import { IoLinkOutline } from "react-icons/io5";

interface SectionWrapperProps {
  title: string;
  subtitle: string;
  description: string;
  cta?: {
    label: string;
    url: string;
  };
  children: React.ReactNode;
}

const SectionWrapper = ({
  title,
  subtitle,
  description,
  cta,
  children,
}: SectionWrapperProps) => {
  const { section, isOdd, variant } = useSafeSectionContext();
  const router = useRouter();

  if (!section) return;

  const getContainerClassName = () => {
    return section.name === SECTION_NAME.EDUCATION ? "mx-auto" : "";
  };

  const getSubContainerClassName = () => {
    return section.name === SECTION_NAME.EDUCATION
      ? "text-center mb-16"
      : "w-full px-4";
  };

  const getContentWrapperClassName = () => {
    const hasMaxWidthContentWrapperSECTION_NAME = [
      SECTION_NAME.PORTFOLIO,
      SECTION_NAME.CONTACT,
    ];
    return hasMaxWidthContentWrapperSECTION_NAME.includes(section.name)
      ? "max-w-xl"
      : "";
  };

  const getTitleClassName = (): string => {
    return "text-primary";
  };

  const getSubtitleClassName = (): string => {
    return variant === "dark" ? "text-white" : "text-text-dark";
  };

  const getDescriptionClassName = (): string => {
    return variant === "dark" ? "text-gray-300" : "text-secondary";
  };

  const handleClickCTA = () => {
    if (!cta) return;
    router.push(cta.url);
  };

  return (
    <div className={`container ${getContainerClassName()}`}>
      <div className={`${getSubContainerClassName()}`}>
        <div
          className={`${getContentWrapperClassName()} mx-auto text-center mb-16`}
        >
          <h4 className={`font-semibold text-lg ${getTitleClassName()}`}>
            {title}
          </h4>
          <h2
            className={`font-bold ${getSubtitleClassName()} text-3xl sm:text-4xl lg:text-5xl mb-4`}
          >
            {subtitle}
          </h2>
          <p
            className={`w-full font-medium text-md md:text-lg ${getDescriptionClassName()}`}
          >
            {description}
          </p>
        </div>
      </div>

      {children}

      {cta && (
        <div
          className="flex flex-row items-center justify-center gap-1 text-primary text-base font-semibold mt-8 sm:mt-16 cursor-pointer hover:underline"
          onClick={handleClickCTA}
        >
          <IoLinkOutline size={20} />
          <p>{cta.label}</p>
        </div>
      )}
    </div>
  );
};

export default SectionWrapper;
