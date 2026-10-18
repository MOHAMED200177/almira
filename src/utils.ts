import { siteConfig } from "@/config/site";

/** Turns "/products/x" into "https://your-domain.com/products/x". */
export const absoluteUrl = (path: string) => `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
