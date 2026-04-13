import { getRequestConfig } from "next-intl/server";
import { routing } from "./navigation";

async function getMessages(locale: string) {
  const messages = {
    hero: (await import(`./messages/${locale}/hero.json`)).default,
    about: (await import(`./messages/${locale}/about.json`)).default,
    skills: (await import(`./messages/${locale}/skills.json`)).default,
    portfolio: (await import(`./messages/${locale}/portfolio.json`)).default,
    career: (await import(`./messages/${locale}/career.json`)).default,
    education: (await import(`./messages/${locale}/education.json`)).default,
    community: (await import(`./messages/${locale}/community.json`)).default,
    contact: (await import(`./messages/${locale}/contact.json`)).default,
    navigation: (await import(`./messages/${locale}/navigation.json`)).default,
    footer: (await import(`./messages/${locale}/footer.json`)).default,
    theme: (await import(`./messages/${locale}/theme.json`)).default,
    common: (await import(`./messages/${locale}/common.json`)).default,
  };

  return messages;
}

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as "en" | "id")) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: await getMessages(locale),
  };
});
