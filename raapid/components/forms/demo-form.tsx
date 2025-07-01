"use client"

import React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { X, ChevronLeft, ChevronRight, Building, Users, Package, Calendar } from "lucide-react"
import { supabase } from "@/lib/supabase"

interface DemoFormProps {
  isOpen: boolean
  onClose: () => void
}

const steps = [
  {
    id: 1,
    title: "Company Information",
    icon: Building,
    fields: ["companyName", "industry", "website"],
  },
  {
    id: 2,
    title: "Contact Details",
    icon: Users,
    fields: ["fullName", "email", "phone", "role"],
  },
  {
    id: 3,
    title: "Delivery Needs",
    icon: Package,
    fields: ["deliveryVolume", "currentSolution", "challenges"],
  },
  {
    id: 4,
    title: "Schedule Demo",
    icon: Calendar,
    fields: ["preferredDate", "timeSlot", "additionalNotes"],
  },
]

export function DemoForm({ isOpen, onClose }: DemoFormProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    website: "",
    fullName: "",
    email: "",
    phone: "",
    role: "",
    deliveryVolume: "",
    currentSolution: "",
    challenges: "",
    preferredDate: "",
    timeSlot: "",
    additionalNotes: "",
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
    // Validate preferredDate is not before 2026-02-01
    if (formData.preferredDate && new Date(formData.preferredDate) < new Date('2026-02-01')) {
      alert('Demo date cannot be before 1st February, 2026.')
      return
    }
    try {
      const { error } = await supabase.from('demos').insert([{ ...formData }])
      if (error) {
        console.error('Supabase insert error:', error)
        alert('There was an error submitting your demo request. Please try again.')
        return
      }
      console.log('Demo request submitted:', formData)
      onClose()
    } catch (err) {
      console.error('Unexpected error:', err)
      alert('There was an unexpected error. Please try again.')
    }
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
              <Input
                value={formData.companyName}
                onChange={(e) => handleInputChange("companyName", e.target.value)}
                placeholder="Enter your company name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Industry *</label>
              <select
                value={formData.industry}
                onChange={(e) => handleInputChange("industry", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              >
                <option value="">Select your industry</option>
                <option value="restaurant">Restaurant & Food</option>
                <option value="retail">Retail & E-commerce</option>
                <option value="pharmacy">Pharmacy & Healthcare</option>
                <option value="grocery">Grocery & Supermarket</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
              <Input
                value={formData.website}
                onChange={(e) => handleInputChange("website", e.target.value)}
                placeholder="https://yourcompany.com"
                type="url"
              />
            </div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
              <Input
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
              <Input
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="your.email@company.com"
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
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Role *</label>
              <Input
                value={formData.role}
                onChange={(e) => handleInputChange("role", e.target.value)}
                placeholder="e.g., Operations Manager, CEO"
                required
              />
            </div>
          </div>
        )
      case 3:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Delivery Volume *</label>
              <select
                value={formData.deliveryVolume}
                onChange={(e) => handleInputChange("deliveryVolume", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              >
                <option value="">Select delivery volume</option>
                <option value="1-50">1-50 deliveries/month</option>
                <option value="51-200">51-200 deliveries/month</option>
                <option value="201-500">201-500 deliveries/month</option>
                <option value="500+">500+ deliveries/month</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Current Delivery Solution</label>
              <Input
                value={formData.currentSolution}
                onChange={(e) => handleInputChange("currentSolution", e.target.value)}
                placeholder="e.g., In-house drivers, Third-party service"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Main Challenges</label>
              <Textarea
                value={formData.challenges}
                onChange={(e) => handleInputChange("challenges", e.target.value)}
                placeholder="What delivery challenges are you facing?"
                rows={3}
              />
            </div>
          </div>
        )
      case 4:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Demo Date *</label>
              <Input
                value={formData.preferredDate}
                onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                type="date"
                min="2026-02-01"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time Slot *</label>
              <select
                value={formData.timeSlot}
                onChange={(e) => handleInputChange("timeSlot", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              >
                <option value="">Select time slot</option>
                <option value="9-10am">9:00 AM - 10:00 AM</option>
                <option value="10-11am">10:00 AM - 11:00 AM</option>
                <option value="11-12pm">11:00 AM - 12:00 PM</option>
                <option value="2-3pm">2:00 PM - 3:00 PM</option>
                <option value="3-4pm">3:00 PM - 4:00 PM</option>
                <option value="4-5pm">4:00 PM - 5:00 PM</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
              <Textarea
                value={formData.additionalNotes}
                onChange={(e) => handleInputChange("additionalNotes", e.target.value)}
                placeholder="Any specific questions or requirements?"
                rows={3}
              />
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
              <h2 className="text-xl font-bold text-gray-900">Request a Demo</h2>
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
              Schedule Demo
            </Button>
          )}
        </div>
      </motion.div>
    </div>
  )
}
