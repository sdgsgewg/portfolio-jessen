"use client";

import ProjectTable from "@/components/career/ProjectTable";
import { CAREER_ENTRIES } from "@/lib/career-data";
import { notFound, useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { Project } from "@/types/career";
import { mergeProjects } from "@/lib/merge-projects";
import DetailPageWrapper from "@/components/detail-page/DetailPageWrapper";
import TechStackSection from "@/components/detail-page/TechStackSection";
import DescriptionSection from "@/components/detail-page/DescriptionSection";
import { DescriptionSectionData } from "@/types/detail-page/DescriptionSectionData";
import HeaderSection from "@/components/detail-page/HeaderSection";
import { ResponsibilitySectionData } from "@/types/detail-page/ResponsibilitySectionData";
import ResponsibilitySection from "@/components/detail-page/ResponsibilitySection";

const CareerDetailPage = () => {
  const { slug } = useParams();
  const t = useTranslations("career");

  const baseCareer = CAREER_ENTRIES.find((c) => c.slug === slug);

  if (!baseCareer) return notFound();

  const content = t.raw(`entries.${baseCareer.slug}`);

  const career = {
    ...baseCareer,
    company: content.company,
    responsibilities: content.responsibilities,
    projects: mergeProjects(baseCareer.projects, content.projects),
  };

  const description: DescriptionSectionData = {
    data: career.company?.description ?? "",
    showTitle: true,
  };

  const responsibilities: ResponsibilitySectionData = {
    data: career.responsibilities,
  };

  return (
    <DetailPageWrapper>
      {/* HEADER */}
      <HeaderSection text={career.company?.name}>
        <p className="text-primary font-semibold mt-1">{career.position}</p>

        <p className="text-sm text-secondary mt-1">
          {career.joinDate} - {career.endDate}
        </p>
      </HeaderSection>

      {/* TECH STACK */}
      <TechStackSection data={career.techStack} />

      {/* DESCRIPTION */}
      <DescriptionSection {...description} />

      {/* RESPONSIBILITIES */}
      <ResponsibilitySection {...responsibilities} />

      {/* PROJECT TABLE */}
      {career.projects && career.projects.length > 0 && (
        <ProjectTable projects={career.projects as Project[]} />
      )}
    </DetailPageWrapper>
  );
};

export default CareerDetailPage;
