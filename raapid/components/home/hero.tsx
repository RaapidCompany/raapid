"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Clock, Star, MapPin, Package, Pill, UtensilsCrossed } from "lucide-react"
import { DemoForm } from "@/components/forms/demo-form"
import { RiderForm } from "@/components/forms/rider-form"

export function Hero() {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false)
  const [isRiderFormOpen, setIsRiderFormOpen] = useState(false)

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 md:py-0 py-10">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-amber-500/10 rounded-full"
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
            className="absolute top-40 right-20 w-24 h-24 bg-gray-900/10 rounded-full"
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
            className="absolute bottom-32 left-1/4 w-20 h-20 bg-amber-500/20 rounded-full"
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

        <div className="md:container w-11/12 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 md:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <div className="inline-flex items-center bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 md:mb-6 mb-3 shadow-lg border border-gray-200">
                <Star className="h-4 w-4 text-amber-500 mr-2" />
                <span className="md:text-sm text-[12px] font-medium text-gray-700">Trusted by 50,000+ customers</span>
              </div>

              <h1 className="text-3xl md:text-6xl font-bold text-gray-900 md:mb-6 mb-3 leading-tight">
                Everything You Need,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-amber-500">
                  Delivered Fast
                </span>
              </h1>

              <p className="md:text-xl text-gray-600 mb-8 max-w-lg">
                Food, packages, prescriptions - get everything delivered to your door in minutes. Sustainable, reliable,
                and lightning fast.
              </p>

              {/* Delivery Types */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-gray-200">
                  <UtensilsCrossed className="h-4 w-4 text-gray-900 mr-2" />
                  <span className="md:text-sm text-[12px] font-medium text-gray-700">Food & Restaurants</span>
                </div>
                <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-gray-200">
                  <Package className="h-4 w-4 text-gray-900 mr-2" />
                  <span className="text-[12px] md:text-sm font-medium text-gray-700">Packages & Parcels</span>
                </div>
                <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-gray-200">
                  <Pill className="h-4 w-4 text-amber-500 mr-2" />
                  <span className="text-[12px] md:text-sm font-medium text-gray-700">Pharmacy & Medicine</span>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-amber-500 mr-2" />
                  <span className="text-sm font-medium text-gray-700">15-min average delivery</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-gray-600 mr-2" />
                  <span className="text-sm font-medium text-gray-700">City-wide coverage</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-amber-500 mr-2" />
                  <span className="text-sm font-medium text-gray-700">4.9/5 rating</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row md:gap-4 gap-2">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-gray-900 to-black hover:from-gray-800 hover:to-gray-900 text-white px-8 py-4 text-lg shadow-lg"
                >
                  Start Ordering
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-amber-500 text-amber-600 hover:bg-amber-50 px-8 py-4 text-lg bg-white/80 backdrop-blur-sm"
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
              className="relative pt-10 md:pt-0"
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
                    className="w-full max-w-md mx-auto rounded-3xl shadow-2xl border border-gray-200"
                  />
                </motion.div>

                {/* Floating Service Cards */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-gray-200"
                >
                  <div className="flex items-center gap-2">
                    <UtensilsCrossed className="h-5 w-5 text-gray-900" />
                    <span className="text-sm font-medium text-gray-700">Hot food delivered</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-gray-200"
                >
                  <div className="flex items-center gap-2">
                    <Pill className="h-5 w-5 text-amber-500" />
                    <span className="text-sm font-medium text-gray-700">Prescription ready</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="absolute top-1/2 -left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-gray-200"
                >
                  <div className="flex items-center gap-2">
                    <Package className="h-5 w-5 text-gray-900" />
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
        className="bg-gradient-to-r from-gray-900 to-black text-white py-8"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Business Owner?</h3>
              <p className="text-gray-300">Boost your sales by 40% with our delivery network</p>
            </div>
            <Button
              size="lg"
              className="bg-amber-500 text-black hover:bg-amber-400 mt-4 md:mt-0 font-semibold"
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

