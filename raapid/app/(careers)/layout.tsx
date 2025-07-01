// app/careers/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at Raapid",
  description: "Join Raapid and help revolutionize eco-friendly last-mile delivery with e-bike logistics.",
  openGraph: {
    title: "Careers at Raapid",
    description: "We're hiring! Help us build the future of clean and efficient delivery.",
    url: "https://raapid.vercel.app/careers",
    images: [
      {
        url: "/og-image.PNG", // place this image in /public
        width: 1200,
        height: 630,
        alt: "Raapid Careers Hero Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Raapid",
    description: "We're hiring! Join our fast-growing e-bike logistics team.",
    images: ["/og-image.PNG"],
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
