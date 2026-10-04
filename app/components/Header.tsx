import { IconChevronLeft, IconPhone } from "../icons";

const navItems = [
  { label: "صفحه اصلی", href: "#", active: true },
  { label: "محصولات", href: "#products" },
  { label: "مزایا", href: "#features" },
  { label: "پروژه‌ ما", href: "#" },
  { label: "تماس با ما", href: "#" },
];

export default function Header() {
  return (
    <header className="relative z-30 border-b border-white/5">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-6 px-6 py-5 lg:px-10">
        {/* logo */}
        <a href="#" className="flex shrink-0 items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg">
           <img src="/logo.svg" alt="" />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-bold text-white">متال بتن</span>
            <span className="block text-[11px] text-ink-300">تولید کننده و خریا تیرچه و خرپا صنعتی</span>
          </span>
        </a>

        {/* nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`relative pb-1 text-sm transition-colors ${
                item.active ? "text-white" : "text-ink-200 hover:text-white"
              }`}
            >
              {item.label}
              {item.active && (
                <span className="absolute -bottom-[1px] right-0 h-[2px] w-full bg-gold-500" />
              )}
            </a>
          ))}
        </nav>

        {/* actions */}
        <div className="flex shrink-0 items-center gap-5">
          <a href="tel:02191005555" className="hidden items-center gap-2 text-sm text-ink-200 hover:text-white sm:flex">
            <IconPhone className="h-4 w-4 text-gold-500" />
            <span dir="ltr">۰۹۱۴۴۱۳۶۵۸۷</span>
          </a>
          <a
            href="tel:+989144148621"
            className="md:hidden flex items-center gap-2 rounded-md bg-gold-500 px-5 py-2.5 text-sm font-bold text-navy-950 transition hover:bg-gold-400"
          >
            <IconChevronLeft className="h-4 w-4" />
            درخواست قیمت
          </a>
          <a
            href="#footer"
            className="hidden md:flex items-center gap-2 rounded-md bg-gold-500 px-5 py-2.5 text-sm font-bold text-navy-950 transition hover:bg-gold-400"
          >
            <IconChevronLeft className="h-4 w-4" />
            درخواست قیمت
          </a>
        </div>
      </div>
    </header>
  );
}
