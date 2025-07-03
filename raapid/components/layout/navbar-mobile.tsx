"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function NavbarMobile() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="md:hidden">
      <button
        className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <Menu className="h-6 w-6" />
      </button>
      {open && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end">
          <div className="w-64 bg-white h-full shadow-lg p-6 flex flex-col">
            <button
              className="self-end mb-8 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
            <ul className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-lg font-medium text-gray-900 hover:text-green-600 transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
