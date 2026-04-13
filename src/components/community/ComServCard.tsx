import React, { useState } from "react";
import { ComServ } from "@/lib/community-data";
import Image from "next/image";
import { useSafeSectionContext } from "@/app/hooks/useSafeSectionContext";
import {
  getPrimaryColor,
  getReadMoreColor,
  getSecondaryColor,
} from "@/lib/utils/getTextColor";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

interface ComServCardProps {
  comserv: ComServ;
}

const ComServCard = ({ comserv }: ComServCardProps) => {
  const { slide, image, subject, title, date, location, excerpt, moreText } =
    comserv;

  const { isOdd } = useSafeSectionContext();

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`${slide} h-full p-4`}>
      <div className="h-full group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white/5 backdrop-blur-sm">
        {/* Image */}
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={image}
            alt={subject}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

          {/* Subject Badge */}
          <span className="absolute top-4 left-4 bg-primary text-white text-xs px-3 py-1 rounded-full shadow">
            {subject}
          </span>
        </div>

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
          <p className={`text-sm leading-relaxed ${getSecondaryColor(isOdd)}`}>
            {excerpt}
            {isExpanded && moreText}
          </p>

          {/* CTA */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`${getReadMoreColor(isOdd)} font-semibold text-sm mt-3 hover:underline`}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComServCard;
