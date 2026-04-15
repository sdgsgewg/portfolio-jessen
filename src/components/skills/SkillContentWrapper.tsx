import { useSafeSectionContext } from "@/hooks/useSafeSectionContext";
import { getPrimaryColor, getSecondaryColor } from "@/lib/utils/getTextColor";
import { SlideType } from "@/types/SlideType";
import React from "react";

interface SkillContentWrapperProps {
  title: string;
  description: string;
  slide: SlideType;
  children?: React.ReactNode;
}

const SkillContentWrapper = ({
  title,
  description,
  slide,
  children,
}: SkillContentWrapperProps) => {
  const { isOdd } = useSafeSectionContext();

  return (
    <div className={`${slide} w-full px-4 mb-10 lg:w-1/2`}>
      <h3
        className={`font-semibold text-2xl mb-5 lg:text-3xl ${getPrimaryColor(isOdd)}`}
      >
        {title}
      </h3>
      <p
        className={`font-medium text-base ${getSecondaryColor(isOdd)} lg:text-lg`}
      >
        {description}
      </p>

      {children}
    </div>
  );
};

export default SkillContentWrapper;
