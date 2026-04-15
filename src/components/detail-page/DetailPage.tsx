import BackSection from "./BackSection";
import HeroSection from "./HeroSection";
import CTASection from "@/components/detail-page/CTASection";
import { ExpandableText } from "@/types/ExpandableText";
import FeatureSection from "@/components/detail-page/FeatureSection";
import DescriptionSection from "./DescriptionSection";
import GallerySection from "./GallerySection";
import { HeroSectionData } from "@/types/detail-page/HeroSectionData";
import { HeaderSectionData } from "@/types/detail-page/HeaderSectionData";
import { CtaSectionData } from "@/types/detail-page/CtaSectionData";
import { GallerySectionData } from "@/types/detail-page/GallerySectionData";
import TechStackSection from "./TechStackSection";
import { TechStackSectionData } from "@/types/detail-page/TechStackSectionData";
import HeaderSection from "./HeaderSection";
import MetaSection from "./MetaSection";
import { Portfolio } from "@/types/portfolio";

interface DetailPageProps {
  hero: HeroSectionData;
  header: HeaderSectionData;
  meta?: Portfolio["meta"];
  techStack?: TechStackSectionData;
  cta?: CtaSectionData;
  description: ExpandableText;
  features?: string[];
  gallery?: GallerySectionData;
}

const DetailPage = ({
  hero,
  header,
  meta,
  techStack,
  cta,
  description,
  features,
  gallery,
}: DetailPageProps) => {
  return (
    <div className="container py-16">
      <div className="max-w-4xl space-y-12 mx-auto">
        <BackSection />

        {/* HERO */}
        <HeroSection image={hero.image} slug={hero.slug} />
        
        <div className="flex flex-col gap-4">
          {/* HEADER */}
          <HeaderSection text={header.text} />

          {/* META */}
          {meta && <MetaSection meta={meta} />}

          {/* Tech Stack */}
          {techStack && <TechStackSection data={techStack.data} />}
        </div>

        {/* CTA buttons */}
        {cta && <CTASection links={cta.links} type={cta.type} />}

        {/* DESCRIPTION */}
        <DescriptionSection
          excerpt={description.excerpt}
          moreText={description.moreText}
        />

        {/* FEATURES */}
        {features && <FeatureSection features={features} />}

        {/* GALLERY */}
        {gallery && <GallerySection data={gallery.data} slug={gallery.slug} />}
      </div>
    </div>
  );
};

export default DetailPage;
