"use client";

import { PORTFOLIO_ENTRIES } from "@/lib/portfolio-data";
import { notFound, useParams } from "next/navigation";
import { useTranslations } from "next-intl";

import { PortfolioListItem } from "@/types/portfolio";
import {
  DescriptionSectionData,
  GallerySectionData,
  HeaderSectionData,
  HeroSectionData,
  TechStackSectionData,
} from "@/types/detail-page";
import { CtaSectionData, FeatureSectionData } from "@/types/portfolio/detail";
import {
  DescriptionSection,
  DetailPageWrapper,
  GallerySection,
  HeaderSection,
  HeroSection,
  TechStackSection,
} from "@/components/detail-page";
import {
  CtaSection,
  FeatureSection,
  MetaSection,
} from "@/components/portfolio/detail";

export default function PortfolioDetailPage() {
  const tProjects = useTranslations("portfolio.projects");
  const { slug } = useParams();

  const project = PORTFOLIO_ENTRIES.find((p) => p.slug === slug);

  if (!project) return notFound();

  const { image, links } = project;
  const content = tProjects.raw(project.slug);

  const hero: HeroSectionData = {
    image,
    slug: slug as string,
  };

  const header: HeaderSectionData = {
    text: content.name,
  };

  const meta: PortfolioListItem["meta"] = project.meta;

  const techStack: TechStackSectionData = {
    data: project.techStack,
  };

  const cta: CtaSectionData = {
    links,
    platform: meta?.platform ?? "website",
  };

  const description: DescriptionSectionData = {
    data: content.description,
    showTitle: true,
  };

  const features: FeatureSectionData = {
    data: content.features,
  };

  const gallery: GallerySectionData = {
    data: project.gallery ?? [],
    slug: project.slug,
  };

  return (
    <DetailPageWrapper>
      {/* HERO */}
      <HeroSection {...hero} />

      <div className="flex flex-col gap-4">
        {/* HEADER */}
        <HeaderSection {...header} />

        {/* META */}
        {meta && (
          <MetaSection
            meta={meta}
            startDate={project.startDate}
            endDate={project.endDate}
          />
        )}

        {/* Tech Stack */}
        {techStack && <TechStackSection {...techStack} />}
      </div>

      {/* CTA buttons */}
      {cta && <CtaSection {...cta} />}

      {/* DESCRIPTION */}
      <DescriptionSection {...description} />

      {/* FEATURES */}
      {features && features.data && <FeatureSection {...features} />}

      {/* GALLERY */}
      {gallery && gallery.data && <GallerySection {...gallery} />}
    </DetailPageWrapper>
  );
}
