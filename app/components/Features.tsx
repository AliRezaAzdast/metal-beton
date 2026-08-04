"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ---------- in‑file icons (you can move these to your icons file) ----------
function IconRuler() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 3h16v18H4z" />
      <path d="M8 3v3" /><path d="M12 3v5" /><path d="M16 3v3" />
      <path d="M8 18v-3" /><path d="M12 18v-5" /><path d="M16 18v-3" />
    </svg>
  );
}

function IconShieldCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function IconTruck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" rx="2" />
      <circle cx="16" cy="18" r="2" /><circle cx="6" cy="18" r="2" />
      <path d="M16 8h4l3 4v4h-2" />
    </svg>
  );
}

function IconLayers() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 22 8.5 12 15 2 8.5 12 2" />
      <polygon points="2 12.5 12 19 22 12.5" />
    </svg>
  );
}

function IconWrench() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function IconCertificate() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 15l-2 5 2-1 2 1-2-5z" />
      <circle cx="12" cy="8" r="6" />
      <path d="M19 8v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8" />
    </svg>
  );
}

// ------------------------------------------------
const features = [
  {
    icon: IconRuler,
    title: "محاسبات مهندسی دقیق",
    desc: "طراحی و آنالیز سازه‌ای با نرم‌افزارهای روز دنیا و استانداردهای ملی",
  },
  {
    icon: IconShieldCheck,
    title: "کیفیت مواد اولیه",
    desc: "استفاده از فولاد و بتن با گرید تضمینی و مقاومت بالا",
  },
  {
    icon: IconTruck,
    title: "تحویل سریع و ایمن",
    desc: "حمل تخصصی و بسته‌بندی مهندسی‌شده برای پروژه‌های سراسر کشور",
  },
  {
    icon: IconLayers,
    title: "تنوع محصولات",
    desc: "تولید تیرچه‌های بتنی، فلزی، خرپاهای ویژه و سفارشی‌سازی کامل",
  },
  {
    icon: IconWrench,
    title: "تکنولوژی ساخت پیشرفته",
    desc: "خطوط تولید تمام‌اتوماتیک با کنترل کیفیت در هر مرحله",
  },
  {
    icon: IconCertificate,
    title: "گواهینامه‌ها و تاییدیه‌ها",
    desc: "دارای استانداردهای ملی و بین‌المللی و تاییدیه نظام مهندسی",
  },
];

export default function Features() {
  const rootRef = useRef<HTMLDivElement>(null);

 
  return (
    <section ref={rootRef} id="features" className="relative bg-navy-900">
      <div className="mx-auto max-w-[1500px] px-6 py-16 lg:px-10 lg:py-20">
        {/* section header */}
        <div className="features-heading mb-12 flex items-center gap-4">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            چرا متال بتن؟
          </h2>
          <span className="h-[3px] w-16 rounded bg-gold-500" />
        </div>

        {/* features grid */}
        <div className="features-grid grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="feature-card group flex gap-5 rounded-xl border border-white/10 bg-navy-850 p-6 transition duration-300 hover:-translate-y-1.5 hover:border-gold-500/40"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-500/10 text-gold-500 transition-colors group-hover:bg-gold-500 group-hover:text-navy-950">
                <Icon />
              </span>
              <div>
                <h3 className="text-[15px] font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-ink-300">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}