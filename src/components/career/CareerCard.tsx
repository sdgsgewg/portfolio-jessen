import { Career } from "@/lib/career-data";
import React from "react";
import TechBadge from "../shared/TechBadge";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

interface CareerCardProps {
  career: Career;
}

const CareerCard = ({ career }: CareerCardProps) => {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("common.cta");

  const handleClick = () => {
    router.push(`/${locale}/careers/${career.slug}`);
  };

  return (
    <div className="relative w-full mb-8">
      <div className="absolute -left-6 top-6 w-4 h-4 bg-primary rounded-full"></div>

      <div className="bg-white dark:bg-dark rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border-l-4 border-primary">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
          {career.company && (
            <h3 className="text-xl font-bold text-dark dark:text-white">
              {career.company.name}
            </h3>
          )}
          <span className="text-sm text-secondary mt-1 md:mt-0">
            {career.joinDate} - {career.endDate}
          </span>
        </div>

        {/* Position */}
        <h4 className="text-primary font-semibold mb-3">{career.position}</h4>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {career.techStack.map((tech, index) => (
            <TechBadge key={index} tech={tech} />
          ))}
        </div>

        {/* Company Description */}
        {career.company && (
          <p className="text-secondary text-sm mb-4 leading-relaxed">
            {career.company.description}
          </p>
        )}

        {/* Responsibilities */}
        {career.responsibilities && (
          <div className="space-y-3">
            {career.responsibilities.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 rounded-lg border border-primary/10 bg-primary/5 hover:bg-primary/10 transition"
              >
                {/* Icon */}
                <span className="text-primary mt-1">✔</span>

                {/* Text */}
                <p className="text-sm text-secondary leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        )}

        {/* CTA Button */}
        <button
          onClick={handleClick}
          className="mt-6 text-primary font-semibold text-sm hover:underline flex items-center gap-1 cursor-pointer"
        >
          {t("viewDetails")}
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default CareerCard;
