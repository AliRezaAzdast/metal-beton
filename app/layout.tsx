import type { Metadata } from "next";
import "@fontsource/vazirmatn/300.css";
import "@fontsource/vazirmatn/400.css";
import "@fontsource/vazirmatn/500.css";
import "@fontsource/vazirmatn/600.css";
import "@fontsource/vazirmatn/700.css";
import "@fontsource/vazirmatn/800.css";
import "@fontsource/vazirmatn/900.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "سازه‌گستر پارس | تیرچه و خرپا صنعتی",
  description:
    "تولید کننده انواع تیرچه و خرپا صنعتی با بالاترین استاندارد کیفیت برای ساخت سازه‌های مدرن و مقاوم",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#0c1524] font-sans">{children}</body>
    </html>
  );
}
