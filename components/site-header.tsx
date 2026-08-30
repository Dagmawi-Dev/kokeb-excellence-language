"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { TrialDialog } from "@/components/trial-dialog";

const nav = [
  { label: "Home", href: "/#home" },
  { label: "Why Kokeb", href: "/#why-kokeb" },
  { label: "Languages", href: "/#languages" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Family Stories", href: "/#stories" },
  { label: "Contact", href: "/#contact" },
];

function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Kokeb Excellence home">
      <span className="brand-mark">
        <img src="/images/logo-navbar.png" alt="" />
      </span>
      <span>
        <strong><span>Kokeb</span> Excellence</strong>
        <small>Language Academy</small>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <>
      <div className="announcement">
        <span>Private live language classes · Ages 8+</span>
        <strong>1 week free trial</strong>
      </div>
      <header className="site-header">
        <div className="section-shell header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            {nav.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <ThemeToggle />
            <TrialDialog label="Free trial" className="header-cta" icon="message" />
            <Sheet>
              <SheetTrigger className="mobile-menu-button" aria-label="Open menu">
                <Menu aria-hidden="true" />
              </SheetTrigger>
              <SheetContent className="mobile-sheet">
                <SheetHeader>
                  <SheetTitle>Kokeb Excellence</SheetTitle>
                  <SheetDescription>One to one Ethiopian language classes</SheetDescription>
                </SheetHeader>
                <nav className="mobile-nav" aria-label="Mobile navigation">
                  {nav.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <Link href={item.href}>{item.label}</Link>
                    </SheetClose>
                  ))}
                </nav>
                <TrialDialog label="Book free trial" className="button button-gold mobile-sheet-cta" icon="message" />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
