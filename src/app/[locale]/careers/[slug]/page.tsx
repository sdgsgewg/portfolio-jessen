"use client";

import ProjectTable from "@/components/career/ProjectTable";
import BackSection from "@/components/shared/BackSection";
import TechBadge from "@/components/shared/TechBadge";
import { CAREER_ENTRIES, Project } from "@/lib/career-data";
import { notFound, useParams } from "next/navigation";
import { useTranslations } from "next-intl";

const CareerDetailPage = () => {
  const { slug } = useParams();
  const t = useTranslations("career");
  const tDetail = useTranslations("career.detail");

  const baseCareer = CAREER_ENTRIES.find((c) => c.slug === slug);

  if (!baseCareer) return notFound();

  const content = t.raw(`entries.${baseCareer.slug}`);

  const career = {
    ...baseCareer,
    company: content.company,
    responsibilities: content.responsibilities,
    projects: Object.values(content.projects || {}),
  };

  return (
    <div className="container py-12 lg:py-16 mx-auto max-w-5xl">
      <BackSection />

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">
          {career.company?.name}
        </h1>

        <p className="text-primary font-semibold mt-1">{career.position}</p>

        <p className="text-sm text-secondary mt-1">
          {career.joinDate} - {career.endDate}
        </p>
      </div>

      {/* TECH STACK */}
      <div className="flex flex-wrap gap-2 mb-6">
        {career.techStack.map((tech) => (
          <TechBadge key={tech} tech={tech} />
        ))}
      </div>

      {/* DESCRIPTION */}
      <p className="text-secondary mb-8 leading-relaxed">
        {career.company?.description}
      </p>

      {/* RESPONSIBILITIES */}
      <div className="mb-10">
        <h2 className="text-xl font-bold mb-4">
          {tDetail("responsibilities")}
        </h2>

        <ul className="space-y-2">
          {career.responsibilities?.map((item: string, i: number) => (
            <li key={i} className="flex gap-2">
              <span className="text-primary">•</span>
              <span className="text-secondary">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* PROJECT TABLE */}
      {career.projects && career.projects.length > 0 && (
        <ProjectTable projects={career.projects as Project[]} />
      )}
    </div>
  );
};

export default CareerDetailPage;
