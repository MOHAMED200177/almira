import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/utils";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
