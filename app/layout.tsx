import type { Metadata, Viewport } from "next";
import "@fontsource/vazirmatn/300.css";
import "@fontsource/vazirmatn/400.css";
import "@fontsource/vazirmatn/500.css";
import "@fontsource/vazirmatn/600.css";
import "@fontsource/vazirmatn/700.css";
import "@fontsource/vazirmatn/800.css";
import "@fontsource/vazirmatn/900.css";
import "./globals.css";
import {
  SITE_URL,
  SITE_NAME,
  SITE_TITLE_DEFAULT,
  SITE_TITLE_TEMPLATE,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  getJsonLdSchema,
} from "./site-config";

export const viewport: Viewport = {
  themeColor: "#0c1524",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE_DEFAULT,
    template: SITE_TITLE_TEMPLATE,
  },
  description: SITE_DESCRIPTION,
  applicationName: "متال بتن",
  authors: [{ name: "متال بتن", url: SITE_URL }],
  generator: "Next.js",
  keywords: SITE_KEYWORDS,
  referrer: "origin-when-cross-origin",
  creator: "متال بتن",
  publisher: "متال بتن",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "fa-IR": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "/",
    siteName: SITE_NAME,
    title: SITE_TITLE_DEFAULT,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/hero.webp",
        width: 1677,
        height: 936,
        alt: "کارخانه تولید تیرچه و خرپا صنعتی متال بتن در تبریز و شبستر",
      },
      {
        url: "/about.webp",
        width: 1200,
        height: 800,
        alt: "خط تولید تمام اتوماتیک تیرچه و خرپا صنعتی متال بتن",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE_DEFAULT,
    description: SITE_DESCRIPTION,
    images: ["/hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/logo.webp", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },
  category: "صنعت و ساختمان",
  classification: "تولید تیرچه صنعتی، خرپا صنعتی و مصالح ساختمانی مقاوم",
  other: {
    "geo.region": "IR-03",
    "geo.placename": "Shabestar, Tabriz",
    "geo.position": "38.238431;46.054276",
    ICBM: "38.238431, 46.054276",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = getJsonLdSchema();

  return (
    <html lang="fa" dir="rtl" className="h-full antialiased scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0c1524] font-sans">
        {children}
      </body>
    </html>
  );
}
