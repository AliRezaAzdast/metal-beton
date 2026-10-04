"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import HeroBeams from "./HeroBeams";
import {
  IconChevronLeft,
  IconPhone,
  IconBadge,
  IconClock,
  IconGear,
  IconHeadset,
} from "../icons";

const features = [
  {
    icon: IconBadge,
    title: "کیفیت تضمینی",
    desc: "تولید با استانداردهای ملی و بین‌المللی",
  },
  {
    icon: IconClock,
    title: "تحویل به موقع",
    desc: "پایبند به زمان‌بندی و تعهدات",
  },
  {
    icon: IconGear,
    title: "تکنولوژی پیشرفته",
    desc: "استفاده از تجهیزات مدرن روز دنیا",
  },
  { icon: IconHeadset, title: "پشتیبانی فنی", desc: "مشاوره و پشتیبانی تخصصی" },
];

export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={rootRef} className="relative overflow-hidden">
      {/* background illustration */}
      <div className="hero-bg absolute inset-0">
        <HeroBeams className="h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-l from-navy-900/10 via-navy-900/70 to-navy-900" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-navy-900/40" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-6 pb-16 pt-16 lg:px-10 lg:pb-20 lg:pt-20">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:gap-8 lg:gap-12">
          <div className="mb-6 md:mb-20">
            <h1 className="text-4xl font-extrabold leading-[1.35] text-white sm:text-5xl">
              <span className="hero-title-line block">تیرچه و خرپا صنعتی</span>
              <span className="hero-title-line mt-2 block text-gold-500">
                سازه‌ای مطمئن، آینده‌ای پایدار
              </span>
            </h1>

            <p className="hero-desc mt-6 max-w-xl text-base leading-8 text-ink-200 sm:text-[17px]">
              تولید کننده انواع تیرچه و خرپا صنعتی با بالاترین استاندارد کیفیت
              برای ساخت‌وسازهای مدرن و مقاوم
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#products"
                className="hero-cta flex items-center gap-2 rounded-md border border-white/25 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
              >
                <IconChevronLeft className="h-4 w-4" />
                مشاهده محصولات
              </a>
              <a
                href="tel:+989144148621"
                className="md:hidden hero-cta flex items-center gap-2 rounded-md bg-gold-500 px-6 py-3.5 text-sm font-bold text-navy-950 transition hover:bg-gold-400"
              >
                دریافت مشاوره رایگان
                <IconPhone className="h-4 w-4" />
              </a>
              <a
                href="#footer"
                className="hidden md:flex hero-cta items-center gap-2 rounded-md bg-gold-500 px-6 py-3.5 text-sm font-bold text-navy-950 transition hover:bg-gold-400"
              >
                دریافت مشاوره رایگان
                <IconPhone className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:max-w-[720px]">
            <img
              src="/hero.webp"
              alt="تیرچه و خرپا صنعتی"
              width={1677}
              height={936}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="aspect-[16/11] w-full rounded-3xl object-cover shadow-[0_20px_60px_-20px_rgba(0,0,0,0.65)] md:aspect-[1677/936]"
            />
          </div>
        </div>

        {/* feature strip */}
        <div className="mt-14 grid grid-cols-1 gap-6 rounded-2xl border border-white/10 bg-navy-950/50 p-6 backdrop-blur-sm sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-x-reverse lg:divide-white/10">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`hero-feature flex items-center gap-4 ${i !== 0 ? "lg:pr-6" : ""}`}
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-500/10 text-gold-500">
                <Icon className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-[15px] font-bold text-white">
                  {title}
                </span>
                <span className="block text-xs text-ink-300">{desc}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
