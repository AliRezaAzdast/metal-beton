"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ---------- icons (move to your icons file if preferred) ----------
function IconMapPin() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 4L12 13 2 4" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

// reuse existing icon
function IconPhone() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

// ---------- component ----------
export default function Contact() {
  const rootRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={rootRef} id="contact" className="relative bg-navy-900">
      <div className="mx-auto max-w-[1500px] px-6 py-16 lg:px-10 lg:py-20">
        {/* section heading */}
        <div className="contact-heading mb-12 flex items-center gap-4">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            تماس با ما
          </h2>
          <span className="h-[3px] w-16 rounded bg-gold-500" />
        </div>

        {/* grid: map + contact info */}
        <div className="contact-grid grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* map */}
          <div className="contact-card overflow-hidden rounded-xl border border-white/10 bg-navy-850 h-[320px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3133.770564181313!2d46.054275999999994!3d38.238431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzjCsDE0JzE4LjQiTiA0NsKwMDMnMTUuNCJF!5e0!3m2!1sen!2s!4v1785828023169!5m2!1sen!2s"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>

          {/* info cards */}
          <div className="flex flex-col gap-5">
            {/* address */}
            <div className="contact-card group flex items-start gap-4 rounded-xl border border-white/10 bg-navy-850 p-6 transition duration-300 hover:-translate-y-1 hover:border-gold-500/40">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold-500/10 text-gold-500">
                <IconMapPin />
              </span>
              <div>
                <h3 className="text-sm font-bold text-white">
                  آدرس دفتر مرکزی
                </h3>
                <p className="mt-1.5 text-sm leading-7 text-ink-300">
                  تبریز،شبستر
                </p>
              </div>
            </div>

            {/* phone */}
            <div className="contact-card group flex items-start gap-4 rounded-xl border border-white/10 bg-navy-850 p-6 transition duration-300 hover:-translate-y-1 hover:border-gold-500/40">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold-500/10 text-gold-500">
                <IconPhone />
              </span>
              <div>
                <h3 className="text-sm font-bold text-white">تلفن تماس</h3>
                <p className="mt-1.5 text-sm leading-7 text-ink-300">
                  <a
                    href="tel:04142527377"
                    className="font-bold text-gold-500 transition-colors hover:text-gold-400"
                  >
                    <span dir="ltr">۰۴۱۴۲۵۲۷۳۷۷</span>
                  </a>
                  <span className="mx-2">-</span>
                  <a
                    href="tel:09144188092"
                    className="font-bold text-gold-500 transition-colors hover:text-gold-400"
                  >
                    <span dir="ltr">۰۹۱۴۱۸۸۰۹۲</span>
                  </a>
                </p>
                <p className="text-sm leading-7 text-ink-300">
                  بهروز امیری زین آباد -{" "}
                  <a
                    href="tel:09144148621"
                    className="font-bold text-gold-500 transition-colors hover:text-gold-400"
                  >
                    <span dir="ltr">۰۹۱۴۴۱۸۶۲۱</span>
                  </a>
                </p>
                <p className="text-sm leading-7 text-ink-300">
                  صمد امیری زین آباد -{" "}
                  <a
                    href="tel:09144136587"
                    className="font-bold text-gold-500 transition-colors hover:text-gold-400"
                  >
                    <span dir="ltr">۰۹۱۴۴۱۳۶۵۸۷</span>
                  </a>
                </p>
                <p className="mt-1 text-sm leading-7 text-gold-500">
                  قسمت فروش و استعلام قیمت
                </p>
              </div>
            </div>

            {/* email */}
            {/* <div className="contact-card group flex items-start gap-4 rounded-xl border border-white/10 bg-navy-850 p-6 transition duration-300 hover:-translate-y-1 hover:border-gold-500/40">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold-500/10 text-gold-500">
                <IconMail />
              </span>
              <div>
                <h3 className="text-sm font-bold text-white">ایمیل</h3>
                <p className="mt-1.5 text-sm leading-7 text-ink-300" dir="ltr">
                  info@sazegostar.com
                </p>
              </div>
            </div> */}

            {/* working hours */}
            <div className="contact-card group flex items-start gap-4 rounded-xl border border-white/10 bg-navy-850 p-6 transition duration-300 hover:-translate-y-1 hover:border-gold-500/40">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold-500/10 text-gold-500">
                <IconClock />
              </span>
              <div>
                <h3 className="text-sm font-bold text-white">ساعت کاری</h3>
                <p className="mt-1.5 text-sm leading-7 text-ink-300">
                  شنبه تا چهارشنبه: ۸ صبح تا ۱۷
                </p>
                <p className="text-sm leading-7 text-ink-300">
                  پنجشنبه: ۸ صبح تا ۱۲
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
