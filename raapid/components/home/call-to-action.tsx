"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Smartphone, Store, UtensilsCrossed, Package, Pill } from "lucide-react"

export function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#555879] via-[#98a1bc] to-[#555879] text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-10 left-10 w-32 h-32 bg-[#f4ebd3]/10 rounded-full"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-10 right-10 w-24 h-24 bg-[#ded3c4]/10 rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Join the <span className="text-[#f4ebd3]">Raapid Revolution?</span>
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Whether you need fast delivery, want to grow your business, or looking to earn money - we've got you
            covered.
          </p>

          {/* Service Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center bg-[#f4ebd3]/20 backdrop-blur-sm rounded-full px-4 py-2">
              <UtensilsCrossed className="h-4 w-4 text-[#f4ebd3] mr-2" />
              <span className="text-[#f4ebd3] text-sm font-medium">Food Delivery</span>
            </div>
            <div className="flex items-center bg-[#f4ebd3]/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Package className="h-4 w-4 text-[#f4ebd3] mr-2" />
              <span className="text-[#f4ebd3] text-sm font-medium">Package Delivery</span>
            </div>
            <div className="flex items-center bg-[#f4ebd3]/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Pill className="h-4 w-4 text-[#f4ebd3] mr-2" />
              <span className="text-[#f4ebd3] text-sm font-medium">Pharmacy Delivery</span>
            </div>
          </div>

          {/* Three CTA Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 text-center border border-[#f4ebd3]/20"
            >
              <Smartphone className="h-12 w-12 mx-auto mb-4 text-[#f4ebd3]" />
              <h3 className="text-xl font-bold mb-2">For Customers</h3>
              <p className="text-white/80 mb-4 text-sm">Get everything delivered in minutes</p>
              <Button className="bg-[#f4ebd3] text-[#555879] hover:bg-[#ded3c4] w-full font-semibold">Order Now</Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 text-center border border-[#f4ebd3]/20"
            >
              <Store className="h-12 w-12 mx-auto mb-4 text-[#f4ebd3]" />
              <h3 className="text-xl font-bold mb-2">For Businesses</h3>
              <p className="text-white/80 mb-4 text-sm">Boost your sales with faster delivery</p>
              <Button className="bg-[#f4ebd3] text-[#555879] hover:bg-[#ded3c4] w-full font-semibold">
                Partner with Us
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 text-center border border-[#f4ebd3]/20"
            >
              <ArrowRight className="h-12 w-12 mx-auto mb-4 text-[#f4ebd3]" />
              <h3 className="text-xl font-bold mb-2">For Riders</h3>
              <p className="text-white/80 mb-4 text-sm">Earn $25-35/hour with flexible schedule</p>
              <Button className="bg-[#f4ebd3] text-[#555879] hover:bg-[#ded3c4] w-full font-semibold">
                Start Earning
              </Button>
            </motion.div>
          </div>

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              className="bg-[#f4ebd3] text-[#555879] hover:bg-[#ded3c4] px-12 py-6 text-xl font-bold shadow-2xl"
            >
              Get Started Today
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
