"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { X, Upload, CheckCircle } from "lucide-react"
import { supabase, type Job, type JobApplication } from "@/lib/supabase"

interface JobApplicationFormProps {
  job: Job
  isOpen: boolean
  onClose: () => void
}

export function JobApplicationForm({ job, isOpen, onClose }: JobApplicationFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    coverLetter: "",
    experienceYears: "",
    location: "",
    availability: "",
    preferredSalary: "", // new field
  })
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [interviewAnswers, setInterviewAnswers] = useState({
    technical: "",
    behavioral: "",
    situational: "",
    motivation: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError("Resume file must be less than 5MB")
        return
      }
      // Check file type
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ]
      if (!allowedTypes.includes(file.type)) {
        setError("Resume must be a PDF or Word document")
        return
      }
      setResumeFile(file)
      setError("")
    }
  }

  const uploadResume = async (file: File): Promise<string | null> => {
    try {
      const fileExt = file.name.split(".").pop()
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`
      const filePath = `resumes/${fileName}`

      const { error: uploadError } = await supabase.storage.from("job-applications").upload(filePath, file)

      if (uploadError) throw uploadError

      const { data } = supabase.storage.from("job-applications").getPublicUrl(filePath)

      return data.publicUrl
    } catch (error) {
      console.error("Error uploading resume:", error)
      return null
    }
  }

  const handleInterviewChange = (field: string, value: string) => {
    setInterviewAnswers((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      let resumeUrl = null
      if (resumeFile) {
        resumeUrl = await uploadResume(resumeFile)
        if (!resumeUrl) {
          throw new Error("Failed to upload resume")
        }
      }

      const applicationData: Omit<JobApplication, "id" | "created_at"> = {
        job_id: job.id === "other" ? null : job.id,
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        resume_url: resumeUrl ?? undefined,
        cover_letter: formData.coverLetter,
        experience_years: Number.parseInt(formData.experienceYears) || 0,
        location: formData.location,
        availability: formData.availability,
        technical: interviewAnswers.technical,
        behavioral: interviewAnswers.behavioral,
        situational: interviewAnswers.situational,
        motivation: interviewAnswers.motivation,
        preferred_salary: formData.preferredSalary,
      }

      const { error: insertError } = await supabase.from("job_applications").insert([applicationData])

      if (insertError) throw insertError

      // Send application data to API for email notification
      await fetch("/api/careers/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(applicationData),
      })

      setIsSubmitted(true)
    } catch (error: any) {
      console.error("Error submitting application:", error, error?.message, error?.response);
      setError("Failed to submit application. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-2xl p-8 max-w-md w-full text-center"
        >
          <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
          <p className="text-gray-600 mb-6">
            Thank you for your interest in the {job.title} position. We&apos;ll review your application and get back to you
            soon.
          </p>
          <Button onClick={onClose} className="bg-[#101010] text-white">
            Close
          </Button>
        </motion.div>
      </div>
    )
  }

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
          <div>
            <h2 className="text-xl font-bold text-gray-900">Apply for {job.title}</h2>
            <p className="text-[12px] text-gray-700 pb-1">{job.description}</p>
            <p className="text-sm text-gray-600">
              {job.department} • {job.location}
            </p>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="relative p-6 max-h-96 overflow-y-auto">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                <Input
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                <Input
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Years of Experience *</label>
              <Input
                type="number"
                min="0"
                value={formData.experienceYears}
                onChange={(e) => handleInputChange("experienceYears", e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
              <Input
                value={formData.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
                placeholder="City, State"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Availability *</label>
              <select
                value={formData.availability}
                onChange={(e) => handleInputChange("availability", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              >
                <option value="">Select availability</option>
                <option value="immediate">Immediate</option>
                <option value="2-weeks">2 weeks notice</option>
                <option value="1-month">1 month notice</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Resume</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                  id="resume-upload"
                />
                <label htmlFor="resume-upload" className="cursor-pointer">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">
                    {resumeFile ? resumeFile.name : "Click to upload resume (PDF, DOC, DOCX)"}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Max file size: 5MB</p>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Cover Letter *</label>
              <Textarea
                value={formData.coverLetter}
                onChange={(e) => handleInputChange("coverLetter", e.target.value)}
                placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                rows={4}
                required
              />
            </div>

            {/* Interview Questions */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Technical Question *</label>
              <Textarea
                value={interviewAnswers.technical}
                onChange={(e) => handleInterviewChange("technical", e.target.value)}
                placeholder="Describe a technical challenge you've solved."
                rows={3}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Behavioral Question *</label>
              <Textarea
                value={interviewAnswers.behavioral}
                onChange={(e) => handleInterviewChange("behavioral", e.target.value)}
                placeholder="Tell us about a time you worked in a team."
                rows={3}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Situational Question *</label>
              <Textarea
                value={interviewAnswers.situational}
                onChange={(e) => handleInterviewChange("situational", e.target.value)}
                placeholder="How would you handle a tight deadline?"
                rows={3}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Motivation Question *</label>
              <Textarea
                value={interviewAnswers.motivation}
                onChange={(e) => handleInterviewChange("motivation", e.target.value)}
                placeholder="Why do you want to work here?"
                rows={3}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Monthly Salary Range</label>
              <Input
                value={formData.preferredSalary}
                onChange={(e) => handleInputChange("preferredSalary", e.target.value)}
                placeholder="e.g. NGN40,000 - NGN60,000"
              />
            </div>

            {error && <div className="text-red-600 text-sm bg-red-50 p-3 rounded-md">{error}</div>}
          </div>

          <div className="flex items-center justify-between py-6 w-full">
            <Button variant="outline" onClick={onClose} className="bg-transparent">
              Cancel
            </Button>
            <Button onClick={handleSubmit} disabled={isSubmitting} className="bg-[#101010] text-white">
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </div>
        </form>
  
      </motion.div>
    </div>
  )
}
