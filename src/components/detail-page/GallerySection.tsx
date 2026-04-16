"use client";

import ImageWrapper from "../shared/ImageWrapper";
import { useTranslations } from "next-intl";
import { GallerySectionData } from "@/types/detail-page/GallerySectionData";
import SectionTitle from "./SectionTitle";
import { PortfolioGallery } from "@/types/portfolio";

type GallerySectionProps = GallerySectionData;

const GallerySection = ({ data, slug }: GallerySectionProps) => {
  function isStringArray(data: unknown): data is string[] {
    return (
      Array.isArray(data) && data.every((item) => typeof item === "string")
    );
  }

  const isStrings = isStringArray(data);
  const t = useTranslations(`portfolio.projects.${slug}.gallery`);
  const tCommonDetailSections = useTranslations("common.detail.sections");

  return (
    <div className="">
      <SectionTitle title={tCommonDetailSections("gallery")} />

      {/* ===== CASE 1: STRING ARRAY ===== */}
      {isStrings && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {(data as string[]).map((img: string, index: number) => (
            <ImageWrapper
              key={index}
              src={img}
              alt={`gallery-${index}`}
              gallery={data} // kirim semua gambar
              index={index} // posisi gambar
              className={{
                container: "w-full h-48 rounded-xl group",
              }}
              hoverOverlay
              clickable
            />
          ))}
        </div>
      )}

      {/* ===== CASE 2: GROUPED ===== */}
      {!isStrings && (
        <div className="space-y-10">
          {(data as PortfolioGallery).map((d, index) => {
            return (
              <div key={index}>
                {/* Title */}
                <h3 className="text-lg font-semibold mb-3 text-secondary">
                  {t(d.key)}
                </h3>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {d.images.map((img: string, index: number) => (
                    <ImageWrapper
                      key={index}
                      src={img}
                      alt={`${t(d.key)}-${index}`}
                      gallery={d.images} // kirim semua gambar
                      index={index} // posisi gambar
                      className={{
                        container: "w-full h-48 rounded-xl group",
                      }}
                      hoverOverlay
                      clickable
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default GallerySection;
