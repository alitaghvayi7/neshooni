import { mainConfig } from "./WebsiteMainConfigs";

export const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: mainConfig.WebsiteName,
  url: mainConfig.WebsiteDomain,
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.yourwebsite.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
  about: mainConfig.WebsiteDescription,
  hasPart: [
    {
      "@type": "WebPage",
      name: "Businesses",
      url: `${mainConfig.WebsiteDomain}/business`,
    },
    {
      "@type": "WebPage",
      name: "News",
      url: `${mainConfig.WebsiteDomain}/news`,
    },
    {
      "@type": "WebPage",
      name: "Tourism Locations",
      url: `${mainConfig.WebsiteDomain}/tourist`,
    },
  ],
};
