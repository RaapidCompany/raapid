"use client"

import { motion } from "framer-motion"
import { Search, Clock, Truck, UtensilsCrossed, Package, Pill } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Browse & Order",
    description: "Choose from restaurants, stores, or pharmacies and place your order in seconds",
    color: "bg-[#f4ebd3]",
    iconColor: "text-[#555879]",
  },
  {
    icon: Clock,
    title: "We Prepare Fast",
    description: "Your order is prepared immediately while we dispatch the nearest available rider",
    color: "bg-[#ded3c4]",
    iconColor: "text-[#555879]",
  },
  {
    icon: Truck,
    title: "Lightning Delivery",
    description: "Track your order in real-time as our electric bikes deliver directly to your door",
    color: "bg-[#98a1bc]",
    iconColor: "text-white",
  },
]

const deliveryTypes = [
  {
    icon: UtensilsCrossed,
    title: "Food Delivery",
    description: "Hot meals from 500+ restaurants",
    color: "text-[#555879]",
  },
  {
    icon: Package,
    title: "Package Delivery",
    description: "Secure parcel and e-commerce delivery",
    color: "text-[#98a1bc]",
  },
  {
    icon: Pill,
    title: "Pharmacy Delivery",
    description: "Prescription and health products",
    color: "text-[#555879]",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#f4ebd3]/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            From Order to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#555879] to-[#98a1bc]">
              Your Door
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting what you need has never been this simple or fast
          </p>
        </motion.div>

        {/* Delivery Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {deliveryTypes.map((type, index) => {
            const IconComponent = type.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center border border-[#ded3c4]/30"
              >
                <IconComponent className={`h-12 w-12 ${type.color} mx-auto mb-4`} />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-gray-600 text-sm">{type.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-24 h-24 ${step.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                >
                  <IconComponent className={`h-12 w-12 ${step.iconColor}`} />
                </motion.div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#ded3c4]/30">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full z-10">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                      viewport={{ once: true }}
                      className="w-full h-1 bg-gradient-to-r from-[#555879] to-[#98a1bc] relative origin-left"
                    >
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[#98a1bc] rounded-full"></div>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Time Promise */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-[#555879] to-[#98a1bc] text-white rounded-full px-8 py-4 text-lg font-bold shadow-xl">
            <Clock className="h-6 w-6 mr-3" />
            Average delivery time: 15 minutes
          </div>
        </motion.div>
      </div>
    </section>
  )
}
