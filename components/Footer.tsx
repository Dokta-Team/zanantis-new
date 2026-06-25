import Image from "next/image";

const sitemap = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Platform", href: "#platform" },
  { label: "Solutions", href: "#solutions" },
  { label: "Quality", href: "#quality" },
  { label: "Impact", href: "#impact" },
  { label: "Investors", href: "#investors" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-zan-navy">
      <div className="mx-auto max-w-content px-6 py-14 sm:px-12">
        <div className="flex flex-col items-start justify-between gap-10 sm:flex-row">
          <div className="max-w-sm">
            <Image
              src="/logo/zan-wordmark-white.png"
              alt="Zanantis"
              height={24}
              width={120}
              className="h-6 w-auto"
            />
            <p className="mt-4 text-[14px] leading-[1.7] text-[#9fb3e0]">
              Africa&rsquo;s healthcare and wellness distribution platform — connecting people to
              trusted care, products, and services.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-3 sm:flex sm:gap-8">
              {sitemap.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[13.5px] font-semibold text-[#c4d3f5] transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-7 font-mono text-[12px] text-[#7388bd] sm:flex-row sm:items-center">
          <span>&copy; {new Date().getFullYear()} Zanantis. All rights reserved.</span>
          <span>Healthcare Access · Product Distribution · Partner Growth</span>
        </div>
      </div>
    </footer>
  );
}
