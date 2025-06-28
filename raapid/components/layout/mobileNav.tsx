"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function MobileNav() {
//   const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const genericHamburgerLine = `h-[2px] w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

  const handleLinkClick = () => {
    setOpen(false);
  };

  const navLinks = [
    {
      name: "About",
      href: "#about",
    //   isActive: pathname === "/",
    },
    {
      name: "Faqs",
      href: "#faqs",
    //   isActive: pathname === "/about",
    },
    {
      name: "Contact us",
      href: "#contact",
    //   isActive: pathname === "/catalogue",
    },
  ];

//   // Animation variants for the menu
//   const menuVariants = {
//     initial: {
//       opacity: 0,
//       scale: 1.5, // Start larger than normal
//       transformOrigin: "top center",
//     },
//     animate: {
//       opacity: 1,
//       scale: 1, // Zoom out to normal size
//       transition: {
//         duration: 0.4,
//         ease: [0.22, 1, 0.36, 1], // Custom easing for a nice zoom effect
//       },
//     },
//     exit: {
//       opacity: 0,
//       scale: 1.5,
//       transition: {
//         duration: 0.3,
//         ease: [0.22, 1, 0.36, 1],
//       },
//     },
//   };

//   // Animation variants for the links
//   const linkVariants = {
//     initial: { opacity: 0, y: 20 },
//     animate: (index: number) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: 0.1 + index * 0.1,
//         duration: 0.4,
//       },
//     }),
//     exit: { opacity: 0, y: 10, transition: { duration: 0.2 } },
//   };

  return (
    <div>
      <button
        aria-label="Toggle navigation"
        className="group flex h-7 w-8 flex-col items-center justify-center"
        onClick={() => setOpen(!open)}
      >
        <div
          className={`${genericHamburgerLine} ${
            open
              ? "translate-y-3 rotate-45 opacity-100 group-hover:opacity-100"
              : "opacity-100 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            open ? "opacity-0" : "opacity-100 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            open
              ? "-translate-y-3 -rotate-45 opacity-100 group-hover:opacity-100"
              : "opacity-100 group-hover:opacity-100"
          }`}
        />
      </button>

      <div>
        {open && (
          <div className="absolute left-1 translate-x-1/2 z-[9999] mt-[1rem] w-[98%] h-[65vh] rounded-xl bg-primaryColor py-10 text-center font-[500]">
            <div className="grid gap-5 h-full items-center justify-center">
              {navLinks.map(({ name, href }, index) => (
                <div
                  key={name}
                >
                  <Link href={href} onClick={handleLinkClick}>
                    <span className="text-base text-center text-white hover:text-white/80 transition-colors block py-2 px-4">
                      {name}
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}