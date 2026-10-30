"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms" },
  { href: "/amenities", label: "Amenities" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-stone-200">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl tracking-wide">The Fernstay</Link>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
        <ul className="hidden md:flex gap-6">
          {links.map((l) => (
            <li key={l.href}><Link href={l.href} className="hover:text-emerald-700 transition">{l.label}</Link></li>
          ))}
        </ul>
      </nav>
      {open && (
        <ul className="md:hidden px-4 pb-4 flex flex-col gap-3">
          {links.map((l) => (
            <li key={l.href}><Link href={l.href} onClick={() => setOpen(false)}>{l.label}</Link></li>
          ))}
        </ul>
      )}
    </header>
  );
}
