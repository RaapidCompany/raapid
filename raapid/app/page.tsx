"use client"

import { Hero } from "@/components/home/hero"
import { Features } from "@/components/home/features"
import { HowItWorks } from "@/components/home/how-it-works"
import { Testimonials } from "@/components/home/testimonials"
import { EnvironmentalImpact } from "@/components/home/environmental-impact"
import { Pricing } from "@/components/home/pricing"
import { CallToAction } from "@/components/home/call-to-action"
import { Footer } from "@/components/layout/footer"
import Header from "@/components/layout/header"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <EnvironmentalImpact />
      <Pricing />
      <CallToAction />
      <Footer />
    </main>
  )
}
