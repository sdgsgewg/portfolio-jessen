import { useSafeSectionContext } from "@/hooks/useSafeSectionContext";
import { getPrimaryColor, getSecondaryColor } from "@/lib/utils/getTextColor";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import ImageWrapper from "../shared/ImageWrapper";
import { ROUTES } from "@/constants/routes";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ComServ } from "@/types/community";

interface ComServCardProps {
  comserv: ComServ;
  slide: "slide-left" | "slide-right";
}

const ComServCard = ({ comserv, slide }: ComServCardProps) => {
  const locale = useLocale();
  const router = useRouter();

  const { isOdd } = useSafeSectionContext();

  const { image, subject, title, slug, date, location, description } = comserv;

  const modifiedDescription = description
    ? `${description.excerpt} ${description.moreText}`
    : "";

  const handleClick = () => {
    router.push(`/${locale}/${ROUTES.COMMUNITY}/${slug}`);
  };

  return (
    <div className={`${slide} h-full p-4 cursor-pointer`} onClick={handleClick}>
      <div className="h-full group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white/5 backdrop-blur-sm">
        {/* Image */}
        <ImageWrapper
          src={image}
          alt={subject}
          className={{
            container: "h-64",
            overlay: "bg-linear-to-t from-black/60 via-black/20 to-transparent",
          }}
        >
          {/* Subject Badge */}
          <span className="absolute top-4 left-4 bg-primary text-white text-xs px-3 py-1 rounded-full shadow">
            {subject}
          </span>
        </ImageWrapper>

        {/* Content */}
        <div className="p-5">
          {/* Title */}
          <h3
            className={`font-semibold text-xl ${getPrimaryColor(isOdd)} mb-2`}
          >
            {title}
          </h3>

          {/* Meta Info */}
          <div
            className={`flex flex-col gap-2 text-sm ${getSecondaryColor(isOdd)} mb-3`}
          >
            <div className="flex items-center gap-2 group-hover:translate-x-1 transition">
              <FaCalendarAlt className="text-primary/80 text-sm" />
              <span>{date}</span>
            </div>

            <div className="flex items-center gap-2 group-hover:translate-x-1 transition">
              <FaMapMarkerAlt className="text-primary/80 text-sm" />
              <span>{location}</span>
            </div>
          </div>

          {/* Description */}
          <p
            className={`line-clamp-3 text-sm leading-relaxed ${getSecondaryColor(isOdd)}`}
          >
            {modifiedDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComServCard;
