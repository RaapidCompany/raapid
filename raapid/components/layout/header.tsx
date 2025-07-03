import Link from "next/link";
import NavbarMobile from "./navbar-mobile";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-black">
          Raapid
        </Link>
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-gray-700 hover:text-green-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <NavbarMobile />
      </div>
    </header>
  );
}