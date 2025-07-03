"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Starter",
    price: "$99",
    period: "/month",
    description: "Perfect for small businesses getting started",
    features: [
      "Up to 100 deliveries/month",
      "Basic fleet tracking",
      "Email support",
      "Mobile app access",
      "Standard reporting",
    ],
    popular: false,
    bgColor: "bg-white",
    borderColor: "border-gray-200",
  },
  {
    name: "Business",
    price: "$299",
    period: "/month",
    description: "Ideal for growing businesses",
    features: [
      "Up to 1,000 deliveries/month",
      "Advanced fleet management",
      "Priority support",
      "API access",
      "Advanced analytics",
      "Route optimization",
      "Custom branding",
    ],
    popular: true,
    bgColor: "bg-gradient-to-br from-gray-900 to-black",
    borderColor: "border-gray-900",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large-scale operations",
    features: [
      "Unlimited deliveries",
      "Full fleet management suite",
      "Dedicated account manager",
      "Custom integrations",
      "White-label solution",
      "SLA guarantees",
      "Advanced security",
    ],
    popular: false,
    bgColor: "bg-white",
    borderColor: "border-gray-200",
  },
]

export function Pricing() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-amber-500">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your business needs. Scale up or down anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative ${plan.bgColor} rounded-3xl p-8 shadow-lg border-2 ${plan.borderColor} ${
                plan.popular ? "ring-4 ring-amber-500/20 scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-black px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className={`text-4xl font-bold ${plan.popular ? "text-white" : "text-gray-900"}`}>
                    {plan.price}
                  </span>
                  <span className={`${plan.popular ? "text-gray-300" : "text-gray-600"}`}>{plan.period}</span>
                </div>
                <p className={`${plan.popular ? "text-gray-300" : "text-gray-600"}`}>{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check
                      className={`h-5 w-5 mr-3 flex-shrink-0 ${plan.popular ? "text-amber-400" : "text-gray-900"}`}
                    />
                    <span className={`${plan.popular ? "text-white" : "text-gray-700"}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-amber-500 hover:bg-amber-400 text-black"
                    : "bg-gradient-to-r from-gray-900 to-black hover:from-gray-800 hover:to-gray-900 text-white"
                }`}
                size="lg"
              >
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
