import React from "react";
import { useTranslations } from "next-intl";
import SectionWrapper from "./section/SectionWrapper";

const Contact = () => {
  const t = useTranslations("contact");

  return (
    <SectionWrapper
      title={t("title")}
      subtitle={t("subtitle")}
      description={t("description")}
    >
      <form action="">
        <div className="w-full lg:w-2/3 lg:mx-auto">
          <div className="w-full px-4 mb-8">
            <label htmlFor="name" className="text-base font-bold text-primary">
              {t("form.name")}
            </label>
            <input
              type="text"
              id="name"
              className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
            />
          </div>
          <div className="w-full px-4 mb-8">
            <label htmlFor="email" className="text-base font-bold text-primary">
              {t("form.email")}
            </label>
            <input
              type="text"
              id="email"
              className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
            />
          </div>
          <div className="w-full px-4 mb-8">
            <label
              htmlFor="message"
              className="text-base font-bold text-primary"
            >
              {t("form.message")}
            </label>
            <textarea
              id="message"
              className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32"
            ></textarea>
          </div>
          <div className="w-full px-4">
            <button className="w-full text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:opacity-80 hover:shadow-lg transition duration-500">
              {t("form.send")}
            </button>
          </div>
        </div>
      </form>
    </SectionWrapper>
  );
};

export default Contact;
