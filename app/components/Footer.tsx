// No "use client" needed – this is a pure presentational component
import { IconPhone } from "../icons"; // reuse the phone icon you already have

// ---------- simple social SVGs (in‑file, no extra dependencies) ----------
function IconLocation() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 4L12 13 2 4" />
    </svg>
  );
}

// placeholder social icons
const socialLinks = [
  { label: "Instagram", href: "#", icon: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" />
    </svg>
  )},
  { label: "Telegram", href: "#", icon: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  )},
  { label: "LinkedIn", href: "#", icon: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )},
];

const footerLinks = {
  "دسترسی سریع": [
    { label: "صفحه اصلی", href: "#" },
    { label: "محصولات", href: "#products" },
    { label: "مزایا", href: "#features" },
    { label: "تماس با ما", href: "#contact" },
  ],
  "محصولات": [
    { label: "تیرچه صنعتی", href: "#products" },
    { label: "خرپا صنعتی", href: "#products" },
    { label: "سفارشی‌سازی", href: "#products" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-950">
      <div className="mx-auto max-w-[1500px] px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* logo / about */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-gold-400 to-gold-600">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-navy-900" fill="none">
                  <path
                    d="M4 20V9l5-3 5 3v11M14 20v-6l6-3v9"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M4 20h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </span>
              <span className="leading-tight">
                <span className="block text-lg font-bold text-white">سازه‌گستر پارس</span>
                <span className="block text-[11px] text-ink-300">تولید تیرچه و خرپا صنعتی</span>
              </span>
            </a>
            <p className="mt-5 text-sm leading-7 text-ink-300">
              با سال‌ها تجربه در صنعت ساختمان، بهترین محصولات تیرچه و خرپا را با کیفیت تضمینی و استانداردهای روز دنیا عرضه می‌کنیم.
            </p>
          </div>

          {/* quick links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-5 text-sm font-bold text-white">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-ink-200 transition-colors hover:text-gold-500"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* contact + social */}
          <div>
            <h4 className="mb-5 text-sm font-bold text-white">ارتباط با ما</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-ink-200">
                <span className="mt-0.5 shrink-0 text-gold-500"><IconLocation /></span>
                <span>تهران، خیابان ولیعصر، بالاتر از میدان ونک، پلاک ۱۲۳۴</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-ink-200">
                <span className="shrink-0 text-gold-500"><IconPhone /></span>
                <span dir="ltr">۰۹۱۴۴۱۳۶۵۸۷</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-ink-200">
                <span className="shrink-0 text-gold-500"><IconMail /></span>
                <span dir="ltr">info@sazegostar.com</span>
              </li>
            </ul>
            {/* social icons */}
            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-ink-200 transition-colors hover:text-gold-500"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* copyright */}
        <div className="mt-12 border-t border-white/5 pt-6 text-center text-xs text-ink-300">
          © {new Date().getFullYear()} سازه‌گستر پارس. تمامی حقوق محفوظ است.
        </div>
      </div>
    </footer>
  );
}