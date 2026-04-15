"use client";

import { notFound, useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { COMSERV_ENTRIES } from "@/lib/community-data";
import { HeroSectionData } from "@/types/detail-page/HeroSectionData";
import { HeaderSectionData } from "@/types/detail-page/HeaderSectionData";
import { GallerySectionData } from "@/types/detail-page/GallerySectionData";
import DetailPageWrapper from "@/components/detail-page/DetailPageWrapper";
import BackSection from "@/components/detail-page/BackSection";
import HeroSection from "@/components/detail-page/HeroSection";
import HeaderSection from "@/components/detail-page/HeaderSection";
import DescriptionSection from "@/components/detail-page/DescriptionSection";
import { DescriptionSectionData } from "@/types/detail-page/DescriptionSectionData";
import GallerySection from "@/components/detail-page/GallerySection";

export default function CommunityDetailPage() {
  const tCommunities = useTranslations("community.communities");
  const { slug } = useParams();

  const comserv = COMSERV_ENTRIES.find((p) => p.slug === slug);

  if (!comserv) return notFound();

  const content = tCommunities.raw(comserv.slug);

  const hero: HeroSectionData = {
    image: comserv.image,
    slug: slug as string,
  };

  const header: HeaderSectionData = {
    text: content.title,
  };

  const description: DescriptionSectionData = {
    data: content.description,
  };

  const gallery: GallerySectionData = {
    data: comserv.gallery ?? [],
    slug: comserv.slug,
  };

  return (
    <DetailPageWrapper>
      {/* HERO */}
      <HeroSection {...hero} />

      {/* HEADER */}
      <HeaderSection {...header} />

      {/* DESCRIPTION */}
      <DescriptionSection {...description} />

      {/* GALLERY */}
      {gallery && <GallerySection {...gallery} />}
    </DetailPageWrapper>
  );
}
