import { Education } from "@/lib/education-data";
import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { useSafeSectionContext } from "@/hooks/useSafeSectionContext";
import { getPrimaryColor, getSecondaryColor } from "@/lib/utils/getTextColor";

interface EduCardProps {
  edu: Education;
}

const EduCard = ({ edu }: EduCardProps) => {
  const { institutionName, degreeObtained, yearsAttended, description, gpa } =
    edu;
  const { isOdd } = useSafeSectionContext();

  const getGpaColor = (gpa: number) => {
    if (gpa >= 3.7) return "text-green-500 bg-green-500/10";
    if (gpa >= 3.3) return "text-blue-500 bg-blue-500/10";
    return "text-gray-500 bg-gray-200";
  };

  return (
    <div className="group relative rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 bg-white/5 backdrop-blur-sm overflow-hidden hover:-translate-y-1">
      {/* Accent bar */}
      <div className="absolute left-0 top-0 h-full w-1 bg-primary" />

      {/* Icon */}
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
        <FaGraduationCap className="text-primary text-lg" />
      </div>

      {/* Degree */}
      <h3 className={`font-bold text-lg ${getPrimaryColor(isOdd)} mb-1`}>
        {degreeObtained}
      </h3>

      {/* Institution */}
      <p className={`font-medium ${getSecondaryColor(isOdd)} mb-1`}>
        {institutionName}
      </p>

      {/* Years attended and gpa */}
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
          {yearsAttended}
        </span>

        {gpa && (
          <span
            className={`text-xs px-3 py-1 rounded-full ${getGpaColor(gpa)}`}
          >
            GPA: {gpa}/4.00
          </span>
        )}
      </div>

      {/* Description */}
      <p className={`text-sm leading-relaxed ${getSecondaryColor(isOdd)}`}>
        {description}
      </p>
    </div>
  );
};

export default EduCard;
