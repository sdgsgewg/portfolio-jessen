import { IMAGES } from "@/app/constants/images";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Hero = () => {
  const t = useTranslations("hero");

  return (
    <div className="container">
      <div className="flex flex-wrap">
        <div className="w-full self-center px-4 lg:w-1/2">
          <h1 className="text-base font-semibold text-primary md:text-xl">
            {t("greet")}
            <span className="block font-bold text-text-dark text-4xl mt-1 lg:text-5xl">
              {t("name")}
            </span>
          </h1>
          <h2 className="font-medium text-secondary text-lg mb-5 lg:text-2xl">
            {t("occupation")}
          </h2>
          <p className="font-medium text-secondary mb-10 leading-relaxed">
            {t("description")}
          </p>
          <a
            href="#contact"
            className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
          >
            {t("cta")}
          </a>
        </div>
        <div className="w-full self-end px-4 lg:w-1/2">
          <div className="relative mt-10 lg:mt-0 lg:right-0">
            <Image
              src={IMAGES.HERO.PROFILE}
              alt="Jessen"
              width={500}
              height={500}
              className="max-w-full mx-auto"
            />
            <span className="absolute bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-125">
              <svg
                width="400"
                height="400"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#14b8a6"
                  d="M53.6,-55.3C66.7,-40.5,72.6,-20.3,74.1,1.6C75.7,23.4,72.9,46.7,59.8,60.6C46.7,74.4,23.4,78.7,1.8,76.9C-19.8,75.1,-39.5,67.2,-53.5,53.3C-67.5,39.5,-75.8,19.8,-76.1,-0.3C-76.4,-20.4,-68.9,-40.9,-54.9,-55.6C-40.9,-70.3,-20.4,-79.3,-0.1,-79.2C20.3,-79.1,40.5,-70,53.6,-55.3Z"
                  transform="translate(100 100) scale(1)"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
