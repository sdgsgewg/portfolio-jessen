import { CtaSectionData } from "@/types/detail-page/CtaSectionData";
import React from "react";
import { FaFileAlt, FaGithub } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdPublic } from "react-icons/md";

const CtaButton = ({
  link,
  icon,
  text,
  btnType,
}: {
  link: string;
  icon: React.ReactNode;
  text: string;
  btnType: "btn-dark" | "btn-primary";
}) => {
  return (
    <a
      className={`${btnType} min-w-30 flex flex-col items-center justify-center gap-1`}
      href={link}
      target="_blank"
    >
      <div className="text-xl">{icon}</div>
      <span className="text-sm">{text}</span>
    </a>
  );
};

type CTASectionProps = CtaSectionData;

const CTASection = ({ links, platform = "website" }: CTASectionProps) => {
  return (
    <div className="fixed bottom-2 left-1/2 -translate-x-1/2 w-full px-4 z-50">
      <div className="max-w-4xl mx-auto bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg rounded-full px-4 py-3 flex flex-wrap justify-center gap-3 border border-white/20">
        {links.github && (
          <CtaButton
            link={links.github}
            icon={<FaGithub />}
            text="Github"
            btnType="btn-dark"
          />
        )}

        {platform === "ai-model" && links.paper && (
          <CtaButton
            link={links.paper}
            icon={<FaFileAlt />}
            text="Paper"
            btnType="btn-dark"
          />
        )}

        {platform === "ai-model" && links.model && (
          <CtaButton
            link={links.model}
            icon={<GiArtificialIntelligence />}
            text="Model"
            btnType="btn-primary"
          />
        )}

        {platform === "website" && links.web && (
          <CtaButton
            link={links.web}
            icon={<MdPublic />}
            text="Live Website"
            btnType="btn-primary"
          />
        )}
      </div>
    </div>
  );
};

export default CTASection;
