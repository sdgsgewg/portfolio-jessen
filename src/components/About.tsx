import React from "react";
import SocialLinks from "./shared/SocialLinks";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("about");

  return (
    <div className="container">
      <div className="flex flex-wrap">
        <div className="w-full px-4 mb-3">
          <h4 className="font-bold uppercase text-primary text-lg">
            {t("title")}
          </h4>
        </div>
        <div className="flex flex-wrap">
          <div className="slide-left w-full px-4 mb-10 lg:w-1/2">
            <h2 className="font-bold text-text-dark text-3xl mb-5 max-w-md lg:text-4xl">
              {t("subtitle")}
            </h2>
            <p className="font-medium text-base text-secondary max-w-xl lg:text-lg">
              {t("description")}
            </p>
          </div>
          <div className="slide-right w-full px-4 lg:w-1/2">
            <h3 className="font-semibold text-text-dark text-2xl mb-4 lg:text-3xl">
              {t("connect")}
            </h3>
            <p className="font-medium text-base text-secondary mb-6 lg:text-lg">
              {t("connectDescription")}
            </p>

            <div className="flex items-center justify-center mb-5">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
