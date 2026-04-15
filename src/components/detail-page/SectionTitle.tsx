import React from "react";

interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return <h2 className="text-2xl font-bold mb-4 text-primary">{title}</h2>;
};

export default SectionTitle;
