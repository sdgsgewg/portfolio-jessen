"use client";

import { PORTFOLIO_ENTRIES } from "@/lib/portfolio-data";
import { notFound, useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { HeroSectionData } from "@/types/detail-page/HeroSectionData";
import { HeaderSectionData } from "@/types/detail-page/HeaderSectionData";
import { CtaSectionData } from "@/types/detail-page/CtaSectionData";
import { GallerySectionData } from "@/types/detail-page/GallerySectionData";
import { TechStackSectionData } from "@/types/detail-page/TechStackSectionData";
import { Portfolio } from "@/types/portfolio";
import DetailPageWrapper from "@/components/detail-page/DetailPageWrapper";
import HeroSection from "@/components/detail-page/HeroSection";
import HeaderSection from "@/components/detail-page/HeaderSection";
import MetaSection from "@/components/detail-page/MetaSection";
import TechStackSection from "@/components/detail-page/TechStackSection";
import CTASection from "@/components/detail-page/CTASection";
import DescriptionSection from "@/components/detail-page/DescriptionSection";
import { DescriptionSectionData } from "@/types/detail-page/DescriptionSectionData";
import FeatureSection from "@/components/detail-page/FeatureSection";
import GallerySection from "@/components/detail-page/GallerySection";
import { FeatureSectionData } from "@/types/detail-page/FeatureSectionData";

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

  const meta: Portfolio["meta"] = project.meta;

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
        {meta && <MetaSection meta={meta} />}

        {/* Tech Stack */}
        {techStack && <TechStackSection {...techStack} />}
      </div>

      {/* CTA buttons */}
      {cta && <CTASection {...cta} />}

      {/* DESCRIPTION */}
      <DescriptionSection {...description} />

      {/* FEATURES */}
      {features && <FeatureSection {...features} />}

      {/* GALLERY */}
      {gallery && <GallerySection {...gallery} />}
    </DetailPageWrapper>
  );
}
