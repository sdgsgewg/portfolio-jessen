import React from "react";
import BackSection from "./BackSection";

interface DetailPageWrapperProps {
  children: React.ReactNode;
}

const DetailPageWrapper = ({ children }: DetailPageWrapperProps) => {
  return (
    <div className="container py-12 lg:py-16">
      <div className="max-w-4xl space-y-10 mx-auto">
        <BackSection />
        {children}
      </div>
    </div>
  );
};

export default DetailPageWrapper;
