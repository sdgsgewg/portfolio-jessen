"use client";

import { PORTFOLIO_ENTRIES } from "@/lib/portfolio-data";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";
import TechBadge from "@/components/shared/TechBadge";
import { FaGithub, FaFileAlt, FaCheckCircle } from "react-icons/fa";
import { MdPublic } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";
import BackSection from "@/components/shared/BackSection";

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
      className={`${btnType} min-w-[120px] flex flex-col items-center justify-center gap-1`}
      href={link}
      target="_blank"
    >
      <div className="text-xl">{icon}</div>
      <span className="text-sm">{text}</span>
    </a>
  );
};

export default function PortfolioDetailPage() {
  const tProjects = useTranslations("portfolio.projects");
  const { slug } = useParams();

  const project = PORTFOLIO_ENTRIES.find((p) => p.slug === slug);

  if (!project) return notFound();

  const content = tProjects.raw(project.slug);

  return (
    <div className="container py-16">
      <div className="max-w-4xl mx-auto">
        <BackSection />

        {/* HERO */}
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden mb-10">
          <Image
            src={project.image}
            alt={project.slug}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
        </div>

        {/* HEADER */}
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{content.name}</h1>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>

        {/* CTA buttons */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full px-4 z-50">
          <div className="max-w-4xl mx-auto bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg rounded-full px-4 py-3 flex flex-wrap justify-center gap-3 border border-white/20">
            {project.links.github && (
              <CtaButton
                link={project.links.github}
                icon={<FaGithub />}
                text="Github"
                btnType="btn-dark"
              />
            )}

            {project.type === "ai-model" && project.links.paper && (
              <CtaButton
                link={project.links.paper}
                icon={<FaFileAlt />}
                text="Paper"
                btnType="btn-dark"
              />
            )}

            {project.type === "ai-model" && project.links.model && (
              <CtaButton
                link={project.links.model}
                icon={<GiArtificialIntelligence />}
                text="Model"
                btnType="btn-primary"
              />
            )}

            {project.type === "website" && project.links.web && (
              <CtaButton
                link={project.links.web}
                icon={<MdPublic />}
                text="Live Website"
                btnType="btn-primary"
              />
            )}
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="mt-8 space-y-4 text-lg text-secondary dark:text-gray-300 leading-relaxed">
          <p>{content.description.excerpt}</p>
          <p>{content.description.moreText}</p>
        </div>

        {/* FEATURES */}
        {content.features && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-4 text-primary">
              Key Features
            </h2>

            <ul className="grid sm:grid-cols-2 gap-3">
              {content.features.map((feature: string, index: number) => (
                <li
                  key={index}
                  className="flex items-start gap-2 bg-primary/5 border border-primary/10 rounded-lg p-3"
                >
                  <FaCheckCircle className="text-primary mt-1" />
                  <span className="text-sm text-secondary dark:text-gray-300">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* GALLERY */}
        {project.gallery && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-4 text-primary">Gallery</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {project.gallery.map((img: string, index: number) => (
                <div
                  key={index}
                  className="relative w-full h-48 rounded-xl overflow-hidden group"
                >
                  <Image
                    src={img}
                    alt={`gallery-${index}`}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />

                  {/* overlay hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
