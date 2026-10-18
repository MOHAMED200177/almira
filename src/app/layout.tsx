import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/outfit";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MobileBar from "@/components/MobileBar";
import { siteConfig } from "@/config/site";
import { theme, themeCss } from "@/config/theme";
import { getProducts } from "@/services/catalog";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.seo.homeTitle} | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.seo.homeDescription,
  keywords: [...siteConfig.seo.keywords],
  applicationName: siteConfig.name,
  icons: { icon: [{ url: "/favicon.png", type: "image/png", sizes: "512x512" }], apple: "/apple-touch-icon.png" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: siteConfig.locale.replace("-", "_"),
  },
};

export const viewport: Viewport = {
  themeColor: theme.primaryDeep,
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const products = (await getProducts()).map(({ id, name, accent }) => ({ id, name, accent }));
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <style dangerouslySetInnerHTML={{ __html: themeCss() }} />
      </head>
      <body>
        <a className="skip-link" href="#main">Skip to main content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileBar products={products} />
      </body>
    </html>
  );
}
