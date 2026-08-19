import { CtaSectionData } from "@/types/portfolio/detail";
import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdPublic } from "react-icons/md";
import CtaButton from "./CtaButton";
import GithubButton from "./GithubButton";

type CtaSectionProps = CtaSectionData;

const CtaSection = ({ links, platform = "website" }: CtaSectionProps) => {
  return (
    <div className="fixed bottom-2 left-1/2 -translate-x-1/2 w-full px-4 z-50">
      <div className="max-w-4xl mx-auto bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg rounded-full px-4 py-3 flex flex-wrap justify-center gap-3 border border-white/20">
        {links.github && <GithubButton github={links.github} />}

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

export default CtaSection;
