import SessionWrapper from "@/components/SessionWrapper";
import { Toaster } from "@/components/ui/toaster";
import { googleAnalyticsConfig } from "@/configs/WebsiteMainConfigs";
import "@/styles/globals.css";
import { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import NextTopLoader from "nextjs-toploader";

const fonst = localFont({
  src: [
    {
      path: "../../public/assets/fonts/peyda-extralight.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Peyda-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Peyda-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Peyda-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Peyda-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },

    {
      path: "../../public/assets/fonts/Peyda-Thin.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Peyda-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/peyda-light.ttf",
      weight: "200",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "نشونی، ابزار اکتشاف شهر",
  description: "نشونی، ابزار اکتشاف شهر",
  openGraph: {
    type: "website",
    url: process.env.NEXTAUTH_URL,
    title: "نشونی، ابزار اکتشاف شهر",
    description: "نشونی، ابزار اکتشاف شهر",
    images: `${process.env.NEXTAUTH_URL}/favicon.ico`,
    siteName: "نشونی، ابزار اکتشاف شهر",
    locale: "fa-IR",
  },
  metadataBase: new URL("https://neshooni.city"), // Replace with your website URL
  robots: {
    index: false,
  },
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html dir="rtl" lang="fa-IR">
      <body className={`${fonst.className}`}>
        <NextTopLoader showSpinner={false} />
        <Toaster />
        <SessionWrapper>{children}</SessionWrapper>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script async src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsConfig.id}`}></Script>
        <Script id="google-analytics">
          {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${googleAnalyticsConfig.id}');`}
        </Script>
      </body>
    </html>
  );
}
