"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Clock, Star, MapPin, Package, Pill, UtensilsCrossed } from "lucide-react"
import { DemoForm } from "@/components/forms/demo-form"
import { RiderForm } from "@/components/forms/rider-form"

function Hero() {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false)
  const [isRiderFormOpen, setIsRiderFormOpen] = useState(false)

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f4ebd3] via-[#ded3c4] to-[#98a1bc]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-[#555879]/20 rounded-full"
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-24 h-24 bg-[#98a1bc]/30 rounded-full"
            animate={{
              y: [0, 25, 0],
              x: [0, -15, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-32 left-1/4 w-20 h-20 bg-[#555879]/25 rounded-full"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <div className="inline-flex items-center bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-lg">
                <Star className="h-4 w-4 text-[#555879] mr-2" />
                <span className="text-sm font-medium text-gray-700">Trusted by 50,000+ customers</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Everything You Need,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#555879] to-[#98a1bc]">
                  Delivered Fast
                </span>
              </h1>

              <p className="text-xl text-gray-700 mb-8 max-w-lg">
                Food, packages, prescriptions - get everything delivered to your door in minutes. Sustainable, reliable,
                and lightning fast.
              </p>

              {/* Delivery Types */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
                  <UtensilsCrossed className="h-4 w-4 text-[#555879] mr-2" />
                  <span className="text-sm font-medium text-gray-700">Food & Restaurants</span>
                </div>
                <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
                  <Package className="h-4 w-4 text-[#555879] mr-2" />
                  <span className="text-sm font-medium text-gray-700">Packages & Parcels</span>
                </div>
                <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
                  <Pill className="h-4 w-4 text-[#555879] mr-2" />
                  <span className="text-sm font-medium text-gray-700">Pharmacy & Medicine</span>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-[#555879] mr-2" />
                  <span className="text-sm font-medium text-gray-700">15-min average delivery</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-[#98a1bc] mr-2" />
                  <span className="text-sm font-medium text-gray-700">City-wide coverage</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-[#555879] mr-2" />
                  <span className="text-sm font-medium text-gray-700">4.9/5 rating</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#555879] to-[#98a1bc] hover:from-[#4a4d6b] hover:to-[#8a94b0] text-white px-8 py-4 text-lg shadow-lg"
                >
                  Start Ordering
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#555879] text-[#555879] hover:bg-[#555879]/10 px-8 py-4 text-lg bg-white/80 backdrop-blur-sm"
                  onClick={() => setIsRiderFormOpen(true)}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Earn with Us
                </Button>
              </div>
            </motion.div>

            {/* Right Content - Service Images */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Main Service Image */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="relative z-10"
                >
                  <img
                    src="/placeholder.svg?height=400&width=400"
                    alt="Raapid delivery services"
                    className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
                  />
                </motion.div>

                {/* Floating Service Cards */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <UtensilsCrossed className="h-5 w-5 text-[#555879]" />
                    <span className="text-sm font-medium text-gray-700">Hot food delivered</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <Pill className="h-5 w-5 text-[#98a1bc]" />
                    <span className="text-sm font-medium text-gray-700">Prescription ready</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="absolute top-1/2 -left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <Package className="h-5 w-5 text-[#555879]" />
                    <span className="text-sm font-medium text-gray-700">Package en route</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business CTA Strip */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-[#555879] to-[#98a1bc] text-white py-8"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Business Owner?</h3>
              <p className="text-[#f4ebd3]/90">Boost your sales by 40% with our delivery network</p>
            </div>
            <Button
              size="lg"
              className="bg-[#f4ebd3] text-[#555879] hover:bg-[#ded3c4] mt-4 md:mt-0 font-semibold"
              onClick={() => setIsDemoFormOpen(true)}
            >
              Partner with Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Forms */}
      <DemoForm isOpen={isDemoFormOpen} onClose={() => setIsDemoFormOpen(false)} />
      <RiderForm isOpen={isRiderFormOpen} onClose={() => setIsRiderFormOpen(false)} />
    </>
  )
}

export default Hero
