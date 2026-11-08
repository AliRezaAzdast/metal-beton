/**
 * Site configuration and SEO constants for Metal Beton / Sazeh Gostar
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://sazegostar.com");

export const SITE_NAME = "متال بتن | سازه‌گستر";
export const SITE_TITLE_DEFAULT =
  "متال بتن | کارخانه تولید تیرچه و خرپا صنعتی در تبریز و شبستر";
export const SITE_TITLE_TEMPLATE = "%s | متال بتن";

export const SITE_DESCRIPTION =
  "کارخانه متال بتن (سازه‌گستر)، تولید کننده انواع تیرچه صنعتی و خرپا با استانداردهای ملی و تکنولوژی تمام‌اتوماتیک در تبریز و شبستر. تحویل فوری در سراسر کشور، استعلام قیمت روز و مشاوره فنی رایگان.";

export const SITE_KEYWORDS = [
  "متال بتن",
  "تیرچه صنعتی",
  "خرپا صنعتی",
  "تولید تیرچه صنعتی",
  "تولید خرپا صنعتی",
  "قیمت تیرچه صنعتی",
  "خرید تیرچه صنعتی تبریز",
  "تیرچه بتنی",
  "تیرچه استاندارد",
  "کارخانه تیرچه شبستر",
  "کارخانه تیرچه تبریز",
  "سازه گستر",
  "سازه‌گستر پارس",
  "میلگرد زیگزاگ",
  "خرپای تیرچه ماشینی",
  "تیرچه پاشنه بتنی",
  "تیرچه فلزی",
  "سقف تیرچه بلوک",
  "استعلام قیمت تیرچه",
  "قیمت روز تیرچه ساختمانی",
  "مصالح ساختمانی تبریز",
  "اسکلت سقف",
  "جوش مقاومتی تیرچه",
  "تولید تیرچه سفارشی",
  "industrial truss girder",
  "metal beton",
];

export const CONTACT_INFO = {
  companyName: "متال بتن",
  legalName: "سازه‌گستر پارس (متال بتن)",
  address: {
    street: "شبستر، زین آباد",
    city: "شبستر",
    province: "آذربایجان شرقی",
    country: "IR",
    postalAddressFa: "ایران، آذربایجان شرقی، شبستر، زین آباد",
  },
  geo: {
    latitude: 38.238431,
    longitude: 46.054276,
  },
  phones: [
    { label: "دفتر مرکزی", number: "+984142527377", display: "۰۴۱۴۲۵۲۷۳۷۷" },
    { label: "مدیریت فروش", number: "+989144188092", display: "۰۹۱۴۴۱۸۸۰۹۲" },
    { label: "بهروز امیری (مشاوره فنی)", number: "+989144148621", display: "۰۹۱۴۴۱۴۸۶۲۱" },
    { label: "صمد امیری (استعلام قیمت)", number: "+989144136587", display: "۰۹۱۴۴۱۳۶۵۸۷" },
  ],
  email: "info@sazegostar.com",
};

/**
 * Schema.org JSON-LD graph for search engine indexing and rich snippets.
 */
export function getJsonLdSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        inLanguage: "fa-IR",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
      {
        "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
        "@id": `${SITE_URL}/#organization`,
        name: CONTACT_INFO.companyName,
        alternateName: [
          CONTACT_INFO.legalName,
          "Metal Beton",
          "سازه‌گستر",
          "کارخانه تولید تیرچه و خرپا صنعتی متال بتن",
        ],
        url: SITE_URL,
        logo: `${SITE_URL}/logo.svg`,
        image: [`${SITE_URL}/hero.webp`, `${SITE_URL}/about.webp`],
        description: SITE_DESCRIPTION,
        telephone: CONTACT_INFO.phones[0].number,
        email: CONTACT_INFO.email,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: CONTACT_INFO.address.street,
          addressLocality: CONTACT_INFO.address.city,
          addressRegion: CONTACT_INFO.address.province,
          addressCountry: CONTACT_INFO.address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: CONTACT_INFO.geo.latitude,
          longitude: CONTACT_INFO.geo.longitude,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Saturday",
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
            ],
            opens: "08:00",
            closes: "17:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Thursday"],
            opens: "08:00",
            closes: "12:00",
          },
        ],
        contactPoint: CONTACT_INFO.phones.map((phone) => ({
          "@type": "ContactPoint",
          telephone: phone.number,
          contactType: phone.label,
          areaServed: "IR",
          availableLanguage: ["Persian", "Azerbaijani"],
        })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "محصولات و خدمات تیرچه و خرپا صنعتی",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "تولید تیرچه صنعتی استاندارد",
                description: "انواع تیرچه صنعتی با مقاومت بالا و کیفیت تضمینی مطابق استاندارد ملی ایران",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "تولید خرپا صنعتی",
                description: "خرپای صنعتی در انواع مختلف و سفارشی با جوش نقطه‌ای مقاومتی تمام‌اتوماتیک",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "تولید سفارشی تیرچه و خرپا",
                description: "طراحی، محاسبه و تولید مطابق با نقشه و نیازهای فنی پروژه‌های ساختمانی",
              },
            },
          ],
        },
      },
    ],
  };
}
