"use client"

import React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { X, ChevronLeft, ChevronRight, User, MapPin, Bike, FileText } from "lucide-react"
import { supabase } from "@/lib/supabase"

interface RiderFormProps {
  isOpen: boolean
  onClose: () => void
}

const steps = [
  {
    id: 1,
    title: "Personal Information",
    icon: User,
    fields: ["firstName", "lastName", "email", "phone", "dateOfBirth"],
  },
  {
    id: 2,
    title: "Location & Availability",
    icon: MapPin,
    fields: ["address", "city", "zipCode", "availability", "preferredHours"],
  },
  {
    id: 3,
    title: "Experience & Equipment",
    icon: Bike,
    fields: ["experience", "ownBike", "bikeType", "drivingLicense"],
  },
  {
    id: 4,
    title: "Additional Information",
    icon: FileText,
    fields: ["motivation", "references", "backgroundCheck"],
  },
]

export function RiderForm({ isOpen, onClose }: RiderFormProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: "",
    city: "",
    zipCode: "",
    availability: "",
    preferredHours: "",
    experience: "",
    ownBike: "",
    bikeType: "",
    drivingLicense: "",
    motivation: "",
    references: "",
    backgroundCheck: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    try {
      const { error } = await supabase.from("riders").insert([{ ...formData }])
      if (error) {
        console.error("Supabase insert error:", error)
        alert("There was an error submitting your application. Please try again.")
        return
      }
      console.log("Rider application submitted:", formData)
      onClose()
    } catch (err) {
      console.error("Unexpected error:", err)
      alert("There was an unexpected error. Please try again.")
    }
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                <Input
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                <Input
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
              <Input
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="your.email@example.com"
                type="email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
              <Input
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="+1 (555) 123-4567"
                type="tel"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth *</label>
              <Input
                value={formData.dateOfBirth}
                onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                type="date"
                required
              />
            </div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Street Address *</label>
              <Input
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                placeholder="123 Main Street"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                <Input
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  placeholder="San Francisco"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code *</label>
                <Input
                  value={formData.zipCode}
                  onChange={(e) => handleInputChange("zipCode", e.target.value)}
                  placeholder="94102"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Availability *</label>
              <select
                value={formData.availability}
                onChange={(e) => handleInputChange("availability", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              >
                <option value="">Select your availability</option>
                <option value="full-time">Full-time (40+ hours/week)</option>
                <option value="part-time">Part-time (20-39 hours/week)</option>
                <option value="flexible">Flexible (Less than 20 hours/week)</option>
                <option value="weekends">Weekends only</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Working Hours</label>
              <select
                value={formData.preferredHours}
                onChange={(e) => handleInputChange("preferredHours", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select preferred hours</option>
                <option value="morning">Morning (6 AM - 12 PM)</option>
                <option value="afternoon">Afternoon (12 PM - 6 PM)</option>
                <option value="evening">Evening (6 PM - 10 PM)</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Experience</label>
              <select
                value={formData.experience}
                onChange={(e) => handleInputChange("experience", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select your experience level</option>
                <option value="none">No delivery experience</option>
                <option value="some">Some delivery experience (1-2 years)</option>
                <option value="experienced">Experienced (3+ years)</option>
                <option value="professional">Professional courier</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Do you own a bike? *</label>
              <select
                value={formData.ownBike}
                onChange={(e) => handleInputChange("ownBike", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              >
                <option value="">Select an option</option>
                <option value="yes">Yes, I own a bike</option>
                <option value="no">No, I need a bike</option>
                <option value="electric">Yes, I own an electric bike</option>
              </select>
            </div>
            {formData.ownBike === "yes" || formData.ownBike === "electric" ? (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bike Type</label>
                <Input
                  value={formData.bikeType}
                  onChange={(e) => handleInputChange("bikeType", e.target.value)}
                  placeholder="e.g., Mountain bike, Road bike, Electric bike"
                />
              </div>
            ) : null}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Valid Driver's License *</label>
              <select
                value={formData.drivingLicense}
                onChange={(e) => handleInputChange("drivingLicense", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              >
                <option value="">Select an option</option>
                <option value="yes">Yes, I have a valid license</option>
                <option value="no">No, I don't have a license</option>
                <option value="expired">I have an expired license</option>
              </select>
            </div>
          </div>
        )
      case 4:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Why do you want to join Raapid? *</label>
              <Textarea
                value={formData.motivation}
                onChange={(e) => handleInputChange("motivation", e.target.value)}
                placeholder="Tell us about your motivation to become a Raapid rider..."
                rows={4}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">References</label>
              <Textarea
                value={formData.references}
                onChange={(e) => handleInputChange("references", e.target.value)}
                placeholder="Previous employer contacts or personal references (optional)"
                rows={3}
              />
            </div>
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="backgroundCheck"
                checked={formData.backgroundCheck === "agreed"}
                onChange={(e) => handleInputChange("backgroundCheck", e.target.checked ? "agreed" : "")}
                className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                required
              />
              <label htmlFor="backgroundCheck" className="text-sm text-gray-700">
                I agree to undergo a background check as part of the application process *
              </label>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              {React.createElement(steps[currentStep - 1].icon, { className: "h-5 w-5 text-green-600" })}
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Join as a Rider</h2>
              <p className="text-sm text-gray-600">{steps[currentStep - 1].title}</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">
              Step {currentStep} of {steps.length}
            </span>
            <span className="text-sm text-gray-600">{Math.round((currentStep / steps.length) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              className="bg-green-600 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(currentStep / steps.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Form Content */}
        <div className="px-6 py-4 max-h-96 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderStepContent()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t bg-gray-50">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="flex items-center bg-transparent"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Previous
          </Button>

          {currentStep < steps.length ? (
            <Button onClick={nextStep} className="bg-green-600 hover:bg-green-700 flex items-center">
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          ) : (
            <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700">
              Submit Application
            </Button>
          )}
        </div>
      </motion.div>
    </div>
  )
}
