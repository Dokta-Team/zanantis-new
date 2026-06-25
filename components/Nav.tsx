"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/Button";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#platform", label: "Platform" },
  { href: "#solutions", label: "Solutions" },
  { href: "#investors", label: "Investors" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        className="mx-auto max-w-content rounded-lg border border-ink-200 bg-white/95 shadow-sm backdrop-blur"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/" aria-label="Zanantis — home" className="flex-shrink-0">
            <Image
              src="/logo/zan-wordmark.png"
              alt="Zanantis"
              height={26}
              width={130}
              className="h-[26px] w-auto"
              priority
            />
          </Link>

          <ul className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[14.5px] font-semibold text-ink-800 transition-colors hover:text-zan-blue"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 sm:flex">
            <Button href="#contact" variant="ghost" size="sm">
              Contact
            </Button>
            <Button href="#partners" variant="primary" size="sm">
              Partner With Us
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-md text-ink-800 transition-colors hover:bg-ink-100 sm:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              {open ? (
                <path
                  d="M5 5L15 15M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3 5.5H17M3 10H17M3 14.5H17"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="border-t border-ink-100 px-4 pb-5 pt-2 sm:hidden">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-2 py-2 text-[15px] font-semibold text-ink-800 transition-colors hover:bg-ink-100 hover:text-zan-blue"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex flex-col gap-2">
              <Button href="#contact" variant="ghost" size="sm" onClick={() => setOpen(false)}>
                Contact
              </Button>
              <Button href="#partners" variant="primary" size="sm" onClick={() => setOpen(false)}>
                Partner With Us
              </Button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
