"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrussArt, BlockArt, CustomArt } from "./ProductArt";
import BuildingArt from "./BuildingArt";
import { IconChevronLeft, IconArrowLeft, IconUsers, IconMedal, IconBuilding, IconHandshake } from "../icons";

const products = [
  {
    title: "تیرچه صنعتی",
    desc: "انواع تیرچه با مقاومت بالا و کیفیت تضمینی",
    Art: TrussArt,
  },
  {
    title: "خرپا صنعتی",
    desc: "خرپای صنعتی در انواع مختلف و سفارشی",
    Art: BlockArt,
  },
  {
    title: "سفارشی‌سازی",
    desc: "تولید مطابق با نیاز پروژه شما",
    Art: CustomArt,
  },
];

const stats = [
  { icon: IconUsers, value: "۲۵۰+", label: "پروژه موفق" },
  { icon: IconMedal, value: "۱۵+", label: "سال سابقه" },
  { icon: IconBuilding, value: "۱۲۰۰۰+", label: "متر مربع تولید روزانه" },
  { icon: IconHandshake, value: "۵۰۰+", label: "مشتری راضی" },
];

export default function ProductsAbout() {
  const rootRef = useRef<HTMLDivElement>(null);

  

  return (
    <section ref={rootRef} className="relative bg-navy-900">
      <div className="mx-auto max-w-[1500px] px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-12 xl:grid-cols-[1fr_1.05fr]">
          {/* products column */}
          <div id="products">
            <div className="sec-heading mb-8 flex items-center gap-4">
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">محصولات ما</h2>
              <span className="h-[3px] w-16 rounded bg-gold-500" />
            </div>

            <div className="products-grid grid grid-cols-1 gap-6 sm:grid-cols-3 xl:grid-cols-3">
              {products.map(({ title, desc, Art }) => (
                <div
                  key={title}
                  className="product-card group overflow-hidden rounded-xl border border-white/10 bg-navy-850 transition duration-300 hover:-translate-y-1.5 hover:border-gold-500/40"
                >
                  <div className="h-40 w-full overflow-hidden">
                    <Art className="h-full w-full transition duration-500 group-hover:scale-110" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-[15px] font-bold text-white">{title}</h3>
                    <p className="mt-2 text-xs leading-6 text-ink-300">{desc}</p>
                    <a
                      href="#"
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-gold-500 transition group-hover:gap-2.5"
                    >
                      مشاهده جزئیات
                      <IconArrowLeft className="h-3.5 w-3.5 rotate-180" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* about column */}
          <div id="features">
            <div className="about-card overflow-hidden rounded-2xl border border-white/10 bg-navy-850">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 sm:p-10">
                  <div className="mb-3 flex items-center gap-3 text-xs font-bold tracking-wide text-gold-500">
                    <span className="h-px w-6 bg-gold-500" />
                    درباره ما
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">سازه‌گستر پارس</h3>
                  <p className="mt-4 text-sm leading-8 text-ink-300">
                    با سال‌ها تجربه در زمینه تولید تیرچه و خرپا صنعتی، به عنوان
                    یکی از پیشگامان این صنعت، همواره در تلاشیم تا با ارائه
                    محصولات باکیفیت، در ساخت سازه‌های مقاوم و ایمن، همراه شما
                    باشیم.
                  </p>
                  <a
                    href="#"
                    className="mt-7 inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 text-xs font-bold text-white transition hover:bg-white/10"
                  >
                    <IconChevronLeft className="h-4 w-4" />
                    بیشتر درباره ما
                  </a>
                </div>
                <div className="relative min-h-[220px] md:min-h-full">
                  {/* <BuildingArt className="absolute inset-0 h-full w-full object-cover" /> */}
                  <img src="/about.webp" alt="about" />
                </div>
              </div>

              <div className="about-stats grid grid-cols-2 gap-6 border-t border-white/10 p-8 sm:grid-cols-4 sm:p-10">
                {stats.map(({ icon: Icon, value, label }) => (
                  <div key={label} className="about-stat text-center">
                    <span className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-gold-500/10 text-gold-500">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="text-xl font-extrabold text-white sm:text-2xl">{value}</div>
                    <div className="mt-1 text-[11px] text-ink-300">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
