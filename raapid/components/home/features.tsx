"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Zap, TrendingUp, DollarSign, X, UtensilsCrossed, Package, Pill, MapPin, Clock, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    id: 1,
    icon: Zap,
    title: "Lightning Fast Delivery",
    description: "15-minute average for all deliveries",
    fullDescription:
      "Whether it's hot food, urgent packages, or prescription medicine, our electric bikes navigate through traffic faster than cars, ensuring everything arrives quickly and safely.",
    color: "bg-gradient-to-br from-gray-100 to-gray-200",
    iconColor: "text-gray-900",
    audience: "customers",
    benefit: "Get everything while it's fresh",
    serviceType: "all",
    mockup: "tracking",
  },
  {
    id: 2,
    icon: TrendingUp,
    title: "Boost Business Sales",
    description: "40% average revenue increase",
    fullDescription:
      "Restaurants, pharmacies, and retailers see significant growth with our fast delivery network. Happy customers mean more orders and better reviews across all business types.",
    color: "bg-gradient-to-br from-amber-100 to-amber-200",
    iconColor: "text-amber-600",
    audience: "businesses",
    benefit: "More orders, higher profits",
    serviceType: "all",
    mockup: "dashboard",
  },
  {
    id: 3,
    icon: DollarSign,
    title: "Earn More as a Rider",
    description: "$25-35/hour with flexible schedule",
    fullDescription:
      "Deliver food, packages, and prescriptions with higher pay rates than traditional services. No gas costs, optimized routes, and diverse delivery types mean consistent earnings.",
    color: "bg-gradient-to-br from-gray-50 to-gray-100",
    iconColor: "text-gray-900",
    audience: "riders",
    benefit: "Higher earnings, lower costs",
    serviceType: "all",
    mockup: "rider",
  },
  {
    id: 4,
    icon: UtensilsCrossed,
    title: "Hot Food Delivery",
    description: "From restaurants to your door",
    fullDescription:
      "Partner with 500+ local restaurants. Our insulated delivery bags and fast routes ensure your food arrives hot and fresh, maintaining quality from kitchen to table.",
    color: "bg-gradient-to-br from-gray-100 to-gray-200",
    iconColor: "text-gray-900",
    audience: "customers",
    benefit: "Always hot and fresh",
    serviceType: "food",
    mockup: "food",
  },
  {
    id: 5,
    icon: Package,
    title: "Package & Parcel Delivery",
    description: "Secure and tracked deliveries",
    fullDescription:
      "From e-commerce orders to personal packages, we handle all your delivery needs with real-time tracking, secure handling, and proof of delivery for complete peace of mind.",
    color: "bg-gradient-to-br from-amber-100 to-amber-200",
    iconColor: "text-amber-600",
    audience: "customers",
    benefit: "Safe and trackable",
    serviceType: "packages",
    mockup: "package",
  },
  {
    id: 6,
    icon: Pill,
    title: "Pharmacy & Medicine",
    description: "Prescription delivery you can trust",
    fullDescription:
      "Licensed for medical deliveries with temperature-controlled transport. Get your prescriptions, over-the-counter medicines, and health products delivered safely and discreetly.",
    color: "bg-gradient-to-br from-gray-50 to-gray-100",
    iconColor: "text-amber-500",
    audience: "customers",
    benefit: "Safe medical delivery",
    serviceType: "pharmacy",
    mockup: "pharmacy",
  },
]

// Phone mockup components
const PhoneMockup = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative mx-auto ${className}`}>
    <div className="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
      <div className="bg-white rounded-[2rem] overflow-hidden h-[600px] w-[300px]">
        <div className="bg-gray-900 h-6 flex items-center justify-center">
          <div className="w-16 h-1 bg-gray-600 rounded-full"></div>
        </div>
        <div className="h-full bg-white overflow-hidden">{children}</div>
      </div>
    </div>
  </div>
)

const TrackingMockup = () => (
  <div className="p-4 h-full bg-gradient-to-b from-gray-50 to-white">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-lg font-bold text-gray-900">Track Order</h3>
      <div className="text-sm text-gray-600">15:32</div>
    </div>

    <div className="bg-white rounded-2xl p-4 mb-4 shadow-sm border border-gray-200">
      <div className="flex items-center mb-3">
        <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mr-3">
          <UtensilsCrossed className="h-6 w-6 text-white" />
        </div>
        <div>
          <div className="font-semibold text-gray-900">Spicy Ramen Bowl</div>
          <div className="text-sm text-gray-600">Golden Dragon Restaurant</div>
        </div>
      </div>
      <div className="flex items-center text-sm text-amber-600">
        <Clock className="h-4 w-4 mr-1" />
        <span>Arriving in 8 minutes</span>
      </div>
    </div>

    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200">
      <div className="space-y-3">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-gray-900 rounded-full mr-3"></div>
          <span className="text-sm text-gray-900">Order confirmed</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-gray-900 rounded-full mr-3"></div>
          <span className="text-sm text-gray-900">Being prepared</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-amber-500 rounded-full mr-3 animate-pulse"></div>
          <span className="text-sm text-amber-600 font-medium">Out for delivery</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-gray-300 rounded-full mr-3"></div>
          <span className="text-sm text-gray-400">Delivered</span>
        </div>
      </div>
    </div>
  </div>
)

const FoodMockup = () => (
  <div className="p-4 h-full bg-gradient-to-b from-gray-50 to-white">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-lg font-bold text-gray-900">Food Delivery</h3>
      <MapPin className="h-5 w-5 text-gray-600" />
    </div>

    <div className="space-y-3">
      <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-200 flex items-center">
        <div className="w-12 h-12 bg-gray-900 rounded-lg mr-3"></div>
        <div className="flex-1">
          <div className="font-medium text-gray-900">Pizza Palace</div>
          <div className="text-sm text-gray-600">Italian • 4.8 ⭐</div>
        </div>
        <div className="text-sm text-amber-600">12 min</div>
      </div>

      <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-200 flex items-center">
        <div className="w-12 h-12 bg-amber-500 rounded-lg mr-3"></div>
        <div className="flex-1">
          <div className="font-medium text-gray-900">Sushi Express</div>
          <div className="text-sm text-gray-600">Japanese • 4.9 ⭐</div>
        </div>
        <div className="text-sm text-amber-600">8 min</div>
      </div>

      <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-200 flex items-center">
        <div className="w-12 h-12 bg-gray-400 rounded-lg mr-3"></div>
        <div className="flex-1">
          <div className="font-medium text-gray-900">Burger Hub</div>
          <div className="text-sm text-gray-600">American • 4.7 ⭐</div>
        </div>
        <div className="text-sm text-amber-600">15 min</div>
      </div>
    </div>

    <div className="mt-6 bg-gradient-to-r from-gray-900 to-black rounded-xl p-4 text-white">
      <div className="text-sm text-gray-300">Special Offer</div>
      <div className="font-bold">Free delivery on orders over $25</div>
    </div>
  </div>
)

const PharmacyMockup = () => (
  <div className="p-4 h-full bg-gradient-to-b from-gray-50 to-white">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-lg font-bold text-gray-900">Pharmacy</h3>
      <div className="text-sm text-amber-600">Secure Delivery</div>
    </div>

    <div className="space-y-3">
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
        <div className="flex items-center mb-2">
          <Pill className="h-5 w-5 text-amber-500 mr-2" />
          <span className="font-medium text-gray-900">Prescription Ready</span>
        </div>
        <div className="text-sm text-gray-600 mb-3">Dr. Smith - Antibiotics</div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-amber-600">Temperature controlled</span>
          <span className="text-sm font-medium text-amber-600">10 min</span>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
        <div className="font-medium text-gray-900 mb-2">Health Essentials</div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Vitamins & Supplements</span>
            <span className="text-amber-600">Available</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">First Aid Supplies</span>
            <span className="text-amber-600">Available</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Personal Care</span>
            <span className="text-amber-600">Available</span>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-6 bg-amber-50 rounded-xl p-4 border border-amber-200">
      <div className="text-sm text-amber-700 font-medium">🔒 HIPAA Compliant</div>
      <div className="text-xs text-gray-600 mt-1">Your medical information is secure</div>
    </div>
  </div>
)

const PackageMockup = () => (
  <div className="p-4 h-full bg-gradient-to-b from-gray-50 to-white">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-lg font-bold text-gray-900">Package Delivery</h3>
      <Package className="h-5 w-5 text-gray-600" />
    </div>

    <div className="space-y-3">
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <span className="font-medium text-gray-900">Amazon Package</span>
          <span className="text-xs bg-gray-900 text-white px-2 py-1 rounded-full">In Transit</span>
        </div>
        <div className="text-sm text-gray-600 mb-3">Electronics • Fragile</div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-gradient-to-r from-gray-900 to-amber-500 h-2 rounded-full w-3/4"></div>
        </div>
        <div className="text-xs text-amber-600 mt-2">ETA: 12 minutes</div>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <span className="font-medium text-gray-900">Local Store Pickup</span>
          <span className="text-xs bg-amber-500 text-black px-2 py-1 rounded-full">Ready</span>
        </div>
        <div className="text-sm text-gray-600">Clothing • Standard</div>
      </div>
    </div>

    <div className="mt-6 bg-white rounded-xl p-4 shadow-sm border border-gray-200">
      <div className="flex items-center mb-2">
        <Star className="h-4 w-4 text-amber-500 mr-1" />
        <span className="text-sm font-medium text-gray-900">Delivery Features</span>
      </div>
      <div className="space-y-1 text-xs text-gray-600">
        <div>✓ Real-time GPS tracking</div>
        <div>✓ Photo proof of delivery</div>
        <div>✓ Secure handling guarantee</div>
      </div>
    </div>
  </div>
)

const DashboardMockup = () => (
  <div className="p-4 h-full bg-gradient-to-b from-gray-900 to-black text-white">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-lg font-bold">Business Dashboard</h3>
      <div className="text-sm text-gray-300">Today</div>
    </div>

    <div className="space-y-4">
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
        <div className="text-2xl font-bold mb-1">$2,847</div>
        <div className="text-sm text-gray-300">Today's Revenue</div>
        <div className="text-xs text-amber-400 mt-1">↗ +23% vs yesterday</div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
          <div className="text-lg font-bold">127</div>
          <div className="text-xs text-gray-300">Orders</div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
          <div className="text-lg font-bold">4.8</div>
          <div className="text-xs text-gray-300">Rating</div>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
        <div className="text-sm font-medium mb-3">Recent Orders</div>
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span>Spicy Ramen Bowl</span>
            <span className="text-amber-400">$18.50</span>
          </div>
          <div className="flex justify-between text-xs">
            <span>Prescription Delivery</span>
            <span className="text-amber-400">$5.00</span>
          </div>
          <div className="flex justify-between text-xs">
            <span>Package Pickup</span>
            <span className="text-amber-400">$12.00</span>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const RiderMockup = () => (
  <div className="p-4 h-full bg-gradient-to-b from-gray-50 to-white">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-lg font-bold text-gray-900">Rider App</h3>
      <div className="text-sm text-amber-600">Online</div>
    </div>

    <div className="bg-gradient-to-r from-gray-900 to-black rounded-xl p-4 text-white mb-4">
      <div className="text-2xl font-bold mb-1">$127.50</div>
      <div className="text-sm text-gray-300">Today's Earnings</div>
      <div className="text-xs text-amber-400 mt-1">5.5 hours • $23.18/hour</div>
    </div>

    <div className="space-y-3">
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <span className="font-medium text-gray-900">New Delivery</span>
          <span className="text-sm text-amber-600">$8.50</span>
        </div>
        <div className="text-sm text-gray-600 mb-3">Food • 1.2 miles • 15 min</div>
        <div className="flex gap-2">
          <button className="flex-1 bg-gray-900 text-white py-2 rounded-lg text-sm">Accept</button>
          <button className="px-4 bg-gray-200 text-gray-700 py-2 rounded-lg text-sm">Decline</button>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
        <div className="text-sm font-medium text-gray-900 mb-2">Delivery Stats</div>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-lg font-bold text-gray-900">23</div>
            <div className="text-xs text-gray-600">Deliveries</div>
          </div>
          <div>
            <div className="text-lg font-bold text-amber-500">4.9</div>
            <div className="text-xs text-gray-600">Rating</div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const getMockupComponent = (mockupType: string) => {
  switch (mockupType) {
    case "tracking":
      return <TrackingMockup />
    case "food":
      return <FoodMockup />
    case "pharmacy":
      return <PharmacyMockup />
    case "package":
      return <PackageMockup />
    case "dashboard":
      return <DashboardMockup />
    case "rider":
      return <RiderMockup />
    default:
      return <TrackingMockup />
  }
}

export function Features() {
  const [selectedFeature, setSelectedFeature] = useState<(typeof features)[0] | null>(null)

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50">
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-amber-500">
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
          <div className="flex items-center bg-gray-900 text-white rounded-full px-6 py-3">
            <UtensilsCrossed className="h-5 w-5 mr-2" />
            <span className="font-medium">Food & Restaurants</span>
          </div>
          <div className="flex items-center bg-amber-500 text-black rounded-full px-6 py-3">
            <Package className="h-5 w-5 mr-2" />
            <span className="font-medium">Packages & Parcels</span>
          </div>
          <div className="flex items-center bg-gray-400 text-white rounded-full px-6 py-3">
            <Pill className="h-5 w-5 mr-2" />
            <span className="font-medium">Pharmacy & Medicine</span>
          </div>
        </motion.div>

        {/* Features with Phone Mockups */}
        <div className="space-y-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:grid-flow-col-dense" : ""}`}
              >
                {/* Content */}
                <div className={`${!isEven ? "lg:col-start-2" : ""}`}>
                  <div className="mb-6">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        feature.audience === "customers"
                          ? "bg-gray-100 text-gray-900"
                          : feature.audience === "businesses"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-gray-200 text-gray-900"
                      }`}
                    >
                      For {feature.audience}
                    </span>
                  </div>

                  <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}>
                    <IconComponent className={`h-8 w-8 ${feature.iconColor}`} />
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-lg text-gray-600 mb-6">{feature.fullDescription}</p>

                  <div className="bg-amber-50 rounded-lg p-4 mb-6 border border-amber-200">
                    <p className="text-sm font-medium text-amber-700">💡 {feature.benefit}</p>
                  </div>

                  <Button
                    onClick={() => setSelectedFeature(feature)}
                    className="bg-gradient-to-r from-gray-900 to-black hover:from-gray-800 hover:to-gray-900 text-white"
                  >
                    See It In Action
                  </Button>
                </div>

                {/* Phone Mockup */}
                <div className={`${!isEven ? "lg:col-start-1 lg:row-start-1" : ""} flex justify-center`}>
                  <motion.div whileHover={{ scale: 1.05, rotateY: 5 }} transition={{ duration: 0.3 }}>
                    <PhoneMockup>{getMockupComponent(feature.mockup)}</PhoneMockup>
                  </motion.div>
                </div>
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
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Experience the Difference?</h3>
            <p className="text-lg mb-6 text-gray-300">Join thousands who trust Raapid for all their delivery needs</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-500 text-black hover:bg-amber-400 font-semibold">
                Start Ordering Today
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent"
              >
                Become a Partner
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Modal */}
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
              className="bg-white rounded-3xl max-w-4xl w-full mx-4 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid md:grid-cols-2">
                {/* Phone Mockup */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex items-center justify-center">
                  <PhoneMockup className="scale-90">{getMockupComponent(selectedFeature.mockup)}</PhoneMockup>
                </div>

                {/* Content */}
                <div className="p-8">
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
                          ? "bg-gray-100 text-gray-900"
                          : selectedFeature.audience === "businesses"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-gray-200 text-gray-900"
                      }`}
                    >
                      For {selectedFeature.audience}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedFeature.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{selectedFeature.fullDescription}</p>

                  <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                    <p className="text-sm font-medium text-amber-700">💡 {selectedFeature.benefit}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
