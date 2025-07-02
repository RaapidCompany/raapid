"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Zap, TrendingUp, DollarSign, X, UtensilsCrossed, Package, Pill } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    id: 1,
    icon: Zap,
    title: "Lightning Fast Delivery",
    description: "15-minute average for all deliveries",
    fullDescription:
      "Whether it's hot food, urgent packages, or prescription medicine, our electric bikes navigate through traffic faster than cars, ensuring everything arrives quickly and safely.",
    color: "bg-gradient-to-br from-[#f4ebd3] to-[#ded3c4]",
    iconColor: "text-[#555879]",
    audience: "customers",
    benefit: "Get everything while it's fresh",
    serviceType: "all",
  },
  {
    id: 2,
    icon: TrendingUp,
    title: "Boost Business Sales",
    description: "40% average revenue increase",
    fullDescription:
      "Restaurants, pharmacies, and retailers see significant growth with our fast delivery network. Happy customers mean more orders and better reviews across all business types.",
    color: "bg-gradient-to-br from-[#98a1bc]/20 to-[#555879]/20",
    iconColor: "text-[#555879]",
    audience: "businesses",
    benefit: "More orders, higher profits",
    serviceType: "all",
  },
  {
    id: 3,
    icon: DollarSign,
    title: "Earn More as a Rider",
    description: "$25-35/hour with flexible schedule",
    fullDescription:
      "Deliver food, packages, and prescriptions with higher pay rates than traditional services. No gas costs, optimized routes, and diverse delivery types mean consistent earnings.",
    color: "bg-gradient-to-br from-[#ded3c4]/30 to-[#98a1bc]/30",
    iconColor: "text-[#555879]",
    audience: "riders",
    benefit: "Higher earnings, lower costs",
    serviceType: "all",
  },
  {
    id: 4,
    icon: UtensilsCrossed,
    title: "Hot Food Delivery",
    description: "From restaurants to your door",
    fullDescription:
      "Partner with 500+ local restaurants. Our insulated delivery bags and fast routes ensure your food arrives hot and fresh, maintaining quality from kitchen to table.",
    color: "bg-gradient-to-br from-[#f4ebd3] to-[#ded3c4]",
    iconColor: "text-[#98a1bc]",
    audience: "customers",
    benefit: "Always hot and fresh",
    serviceType: "food",
  },
  {
    id: 5,
    icon: Package,
    title: "Package & Parcel Delivery",
    description: "Secure and tracked deliveries",
    fullDescription:
      "From e-commerce orders to personal packages, we handle all your delivery needs with real-time tracking, secure handling, and proof of delivery for complete peace of mind.",
    color: "bg-gradient-to-br from-[#98a1bc]/20 to-[#555879]/20",
    iconColor: "text-[#555879]",
    audience: "customers",
    benefit: "Safe and trackable",
    serviceType: "packages",
  },
  {
    id: 6,
    icon: Pill,
    title: "Pharmacy & Medicine",
    description: "Prescription delivery you can trust",
    fullDescription:
      "Licensed for medical deliveries with temperature-controlled transport. Get your prescriptions, over-the-counter medicines, and health products delivered safely and discreetly.",
    color: "bg-gradient-to-br from-[#ded3c4]/30 to-[#f4ebd3]",
    iconColor: "text-[#98a1bc]",
    audience: "customers",
    benefit: "Safe medical delivery",
    serviceType: "pharmacy",
  },
]

export function Features() {
  const [selectedFeature, setSelectedFeature] = useState<(typeof features)[0] | null>(null)

  return (
    <section className="py-20 bg-gradient-to-br from-white to-[#f4ebd3]/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#555879] to-[#98a1bc]">
              Delivered Fast
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Food, packages, prescriptions - one platform for all your delivery needs
          </p>
        </motion.div>

        {/* Service Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <div className="flex items-center bg-[#555879] text-white rounded-full px-6 py-3">
            <UtensilsCrossed className="h-5 w-5 mr-2" />
            <span className="font-medium">Food & Restaurants</span>
          </div>
          <div className="flex items-center bg-[#98a1bc] text-white rounded-full px-6 py-3">
            <Package className="h-5 w-5 mr-2" />
            <span className="font-medium">Packages & Parcels</span>
          </div>
          <div className="flex items-center bg-[#ded3c4] text-[#555879] rounded-full px-6 py-3">
            <Pill className="h-5 w-5 mr-2" />
            <span className="font-medium">Pharmacy & Medicine</span>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-[#ded3c4]/30"
                onClick={() => setSelectedFeature(feature)}
              >
                <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}>
                  <IconComponent className={`h-8 w-8 ${feature.iconColor}`} />
                </div>

                <div className="mb-4">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      feature.audience === "customers"
                        ? "bg-[#98a1bc]/20 text-[#555879]"
                        : feature.audience === "businesses"
                          ? "bg-[#555879]/20 text-[#555879]"
                          : "bg-[#ded3c4] text-[#555879]"
                    }`}
                  >
                    For {feature.audience}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <p className="text-sm font-medium text-[#555879]">{feature.benefit}</p>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#555879] to-[#98a1bc] rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience the Difference?</h3>
            <p className="text-lg mb-6 text-[#f4ebd3]/90">
              Join thousands who trust Raapid for all their delivery needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#f4ebd3] text-[#555879] hover:bg-[#ded3c4] font-semibold">
                Start Ordering Today
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#f4ebd3] text-[#f4ebd3] hover:bg-[#f4ebd3] hover:text-[#555879] bg-transparent"
              >
                Become a Partner
              </Button>
            </div>
          </div>
        </motion.div>
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
              className="bg-white rounded-3xl p-8 max-w-md w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`w-16 h-16 rounded-2xl ${selectedFeature.color} flex items-center justify-center`}>
                  <selectedFeature.icon className={`h-8 w-8 ${selectedFeature.iconColor}`} />
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
              <div className="mb-4">
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    selectedFeature.audience === "customers"
                      ? "bg-[#98a1bc]/20 text-[#555879]"
                      : selectedFeature.audience === "businesses"
                        ? "bg-[#555879]/20 text-[#555879]"
                        : "bg-[#ded3c4] text-[#555879]"
                  }`}
                >
                  For {selectedFeature.audience}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedFeature.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{selectedFeature.fullDescription}</p>
              <p className="text-sm font-medium text-[#555879] bg-[#f4ebd3] rounded-lg p-3">
                💡 {selectedFeature.benefit}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
