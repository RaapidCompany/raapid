import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raapid – Fast, Clean E-Bike Deliveries",
  description: "Revolutionizing delivery with ultra-fast, eco-friendly e-bike logistics for modern cities.",
  keywords: ["e-bike delivery", "electric bike logistics", "sustainable courier", "Raapid", "green delivery"],
  authors: [{ name: "Raapid" }],
  metadataBase: new URL("https://raapid.vercel.app"), // change to your live domain
  openGraph: {
    title: "Raapid – E-Bike Delivery Redefined",
    description: "Swift, reliable, and sustainable deliveries powered by electric bikes.",
    url: "https://raapid.vercel.app", // change to your live domain
    siteName: "Raapid",
    images: [
      {
        url: "/og-image.PNG", // Put og-image.jpg inside the public folder
        width: 1200,
        height: 630,
        alt: "Raapid delivery hero image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raapid – E-Bike Delivery Redefined",
    description: "Swift, reliable, and sustainable deliveries powered by electric bikes.",
    images: ["/og-image.PNG"],
    creator: "@RaapidHQ", // optional
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
