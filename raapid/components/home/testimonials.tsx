"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Busy Professional",
    company: "Downtown SF",
    content:
      "I ordered lunch and my prescription in one go - both arrived in 12 minutes! This service is a game-changer for busy people like me.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
    type: "customer",
    bgColor: "bg-gradient-to-br from-[#f4ebd3] to-[#ded3c4]",
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "Restaurant Owner",
    company: "Golden Wok",
    content:
      "Our food delivery orders doubled in the first month! Customers love the fast delivery and our ratings went from 4.2 to 4.8 stars.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
    type: "business",
    bgColor: "bg-gradient-to-br from-[#98a1bc]/20 to-[#555879]/20",
  },
  {
    id: 3,
    name: "Alex Rivera",
    role: "Delivery Rider",
    company: "Raapid",
    content:
      "Making $300+ per day with flexible hours. The electric bikes are amazing and I love delivering everything from food to medicine!",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
    type: "rider",
    bgColor: "bg-gradient-to-br from-[#ded3c4]/30 to-[#98a1bc]/30",
  },
  {
    id: 4,
    name: "Emma Davis",
    role: "Working Mom",
    company: "Mission District",
    content:
      "Game changer for busy weeknights! Hot dinner and kids' medicine delivered together in under 20 minutes. The tracking is so helpful.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
    type: "customer",
    bgColor: "bg-gradient-to-br from-[#f4ebd3] to-[#ded3c4]",
  },
  {
    id: 5,
    name: "Dr. Lisa Park",
    role: "Pharmacy Owner",
    company: "HealthFirst Pharmacy",
    content:
      "Prescription delivery was impossible before Raapid. Now we serve patients across the city safely and revenue is up 60%!",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
    type: "business",
    bgColor: "bg-gradient-to-br from-[#98a1bc]/20 to-[#555879]/20",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const getTypeInfo = (type: string) => {
    switch (type) {
      case "customer":
        return { label: "Happy Customer", color: "text-[#555879]", bg: "bg-[#f4ebd3]" }
      case "business":
        return { label: "Partner Business", color: "text-[#555879]", bg: "bg-[#98a1bc]/20" }
      case "rider":
        return { label: "Raapid Rider", color: "text-[#555879]", bg: "bg-[#ded3c4]" }
      default:
        return { label: "User", color: "text-gray-600", bg: "bg-gray-100" }
    }
  }

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
            Real Stories from{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#555879] to-[#98a1bc]">
              Real People
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">See how Raapid is making life better for everyone</p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className={`${testimonials[currentIndex].bgColor} rounded-3xl p-8 shadow-xl relative overflow-hidden border border-[#ded3c4]/30`}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 h-12 w-12 text-[#555879]/10" />

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-[#555879] fill-current" />
                  ))}
                </div>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${getTypeInfo(testimonials[currentIndex].type).bg} ${getTypeInfo(testimonials[currentIndex].type).color}`}
                >
                  {getTypeInfo(testimonials[currentIndex].type).label}
                </span>
              </div>

              <blockquote className="text-xl text-gray-800 mb-8 leading-relaxed font-medium">
                &quot;{testimonials[currentIndex].content}&quot;
              </blockquote>

              <div className="flex items-center">
                <img
                  src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-14 h-14 rounded-full mr-4 border-4 border-white shadow-lg"
                />
                <div>
                  <div className="font-bold text-gray-900 text-lg">{testimonials[currentIndex].name}</div>
                  <div className="text-gray-700">
                    {testimonials[currentIndex].role} • {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center mt-8 gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="rounded-full bg-white shadow-lg hover:shadow-xl border-[#ded3c4] hover:bg-[#f4ebd3]"
            >
              <ChevronLeft className="h-4 w-4 text-[#555879]" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-[#555879] to-[#98a1bc] scale-125"
                      : "bg-[#ded3c4] hover:bg-[#98a1bc]"
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="rounded-full bg-white shadow-lg hover:shadow-xl border-[#ded3c4] hover:bg-[#f4ebd3]"
            >
              <ChevronRight className="h-4 w-4 text-[#555879]" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
