import React from "react";

interface TechBadgeProps {
  tech: string;
}

const TechBadge = ({ tech }: TechBadgeProps) => {
  return (
    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md">
      {tech}
    </span>
  );
};

export default TechBadge;
