"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Leaf, BarChart3, Route, Battery, DollarSign, Smartphone, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    id: 1,
    icon: Leaf,
    title: "Eco-Friendly Deliveries",
    description: "Zero carbon emissions",
    fullDescription:
      "Our electric bikes produce zero direct emissions, helping businesses reduce their carbon footprint while maintaining efficient delivery operations. Join the sustainable delivery revolution.",
    color: "bg-green-100 text-green-600",
  },
  {
    id: 2,
    icon: BarChart3,
    title: "Smart Fleet Management",
    description: "Real-time tracking & dashboard",
    fullDescription:
      "Monitor your entire fleet in real-time with our comprehensive dashboard. Track deliveries, manage riders, and optimize operations with detailed analytics and insights.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 3,
    icon: Route,
    title: "Optimized Delivery Routes",
    description: "AI-based route planning",
    fullDescription:
      "Our AI-powered routing system analyzes traffic patterns, delivery priorities, and rider locations to create the most efficient routes, saving time and energy.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 4,
    icon: Battery,
    title: "Battery & Charging Insights",
    description: "Live status and smart charging",
    fullDescription:
      "Monitor battery levels across your fleet with real-time insights. Our smart charging network ensures bikes are always ready for the next delivery.",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    id: 5,
    icon: DollarSign,
    title: "Affordable & Scalable",
    description: "Flexible pricing and operations",
    fullDescription:
      "Scale your delivery operations without breaking the bank. Our flexible pricing model grows with your business, from startup to enterprise.",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    id: 6,
    icon: Smartphone,
    title: "Rider App Integration",
    description: "Navigation, tasking, and payments",
    fullDescription:
      "Our intuitive rider app provides turn-by-turn navigation, task management, and seamless payment processing, making every delivery smooth and efficient.",
    color: "bg-indigo-100 text-indigo-600",
  },
]

export function Features() {
  const [selectedFeature, setSelectedFeature] = useState<(typeof features)[0] | null>(null)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Delivery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to run efficient, sustainable delivery operations
          </p>
        </motion.div>

        {/* Horizontal Scrolling Cards */}
        <div className="relative ">
          <div className="flex gap-6 overflow-x-auto no-scrollbar  pb-6 scrollbar-hide snap-x snap-mandatory">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-none w-80 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer snap-start"
                  onClick={() => setSelectedFeature(feature)}
                >
                  <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedFeature && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedFeature(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`w-16 h-16 rounded-2xl ${selectedFeature.color} flex items-center justify-center`}>
                  <selectedFeature.icon className="h-8 w-8" />
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedFeature(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedFeature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{selectedFeature.fullDescription}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
