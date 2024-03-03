// const BASE_URL = 'https://avir.co.com'

import { MetadataRoute } from "next";

export default function sitemap(data: any): MetadataRoute.Sitemap {
  const allPaths = [
    "/",
    "/tourist",
    "/tourist/id",
    "/tourist/id/comment",
    "/business",
    "/business/id",
    "/business/id/comment",
    "/news",
    "/news/social-media",
    "/news/social-media/id",
    "/news/wire-service",
    "/news/wire-service/id",
    "/news/organization",
    "/news/organization/id",
    "/auth",
    "/profile",
    "/profile?tab=info",
    "/profile?tab=your-introduction",
    "/profile?tab=your-bookmark",
    "/introduction",
  ];
  return allPaths.map((path) => ({
    url: path,
  }));
}
