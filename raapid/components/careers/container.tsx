"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, ArrowUpRight } from "lucide-react"
import { supabase, type Job } from "@/lib/supabase"
import { JobApplicationForm } from "@/components/careers/job-application-form"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Container() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [isApplicationFormOpen, setIsApplicationFormOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("all")

  useEffect(() => {
    fetchJobs()
  }, [])

  useEffect(() => {
    filterJobs()
  }, [jobs, searchTerm, selectedDepartment, selectedLocation])

  const fetchJobs = async () => {
    try {
      const { data, error } = await supabase
        .from("jobs")
        .select("*")
        .eq("is_active", true)
        .order("created_at", { ascending: false })

      if (error) throw error
      setJobs(data || [])
    } catch (error) {
      console.error("Error fetching jobs:", error)
    } finally {
      setLoading(false)
    }
  }

  const filterJobs = () => {
    let filtered = jobs

    if (searchTerm) {
      filtered = filtered.filter(
        (job) =>
          job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (selectedDepartment !== "all") {
      filtered = filtered.filter((job) => job.department === selectedDepartment)
    }

    if (selectedLocation !== "all") {
      filtered = filtered.filter((job) => job.location.includes(selectedLocation))
    }

    setFilteredJobs(filtered)
  }

  const departments = [...new Set(jobs.map((job) => job.department))]
  const locations = [...new Set(jobs.map((job) => job.location.split(",")[0].trim()))]

  // Filter jobs by active tab (department)
  const jobsByTab = activeTab === "all"
    ? jobs
    : jobs.filter((job) => job.department === activeTab)

  const handleApplyClick = (job: Job) => {
    setSelectedJob(job)
    setIsApplicationFormOpen(true)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#101010]"></div>
      </div>
    )
  }

  return (
    <section id="jobs">
      <div className="w-11/12 mx-auto">
          <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab} className="md:pb-6 pb-14">
            <TabsList className="grid grid-cols-2 md:grid-cols-6 gap-2 mx-auto">
              <TabsTrigger value="all" className="">
                View all
              </TabsTrigger>
              {departments.map((dept) => (
                <TabsTrigger key={dept} value={dept} className="py-2 px-3">
                  {dept}
                </TabsTrigger>
              ))}
              <TabsTrigger value="others" className="py-2 px-3">
                Others
              </TabsTrigger>
            </TabsList>
            {(["all", ...departments]).map((tab) => (
              <TabsContent key={tab} value={tab}>
                <div className="space-y-6 pt-36 md:pt-14">
                  {jobs.filter(job => tab === "all" || job.department === tab).map((job) => (
                    <div
                      key={job.id}
                      className="pt-10 pb-4 border-[#101010]/20 border-t-[1px]"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="md:text-4xl text-2xl font-semibold text-[#101010]">{job.title}</h3>
                          </div>
                          <p className="text-stone-500 line-clamp-2 w-9/12">{job.description}</p>
                          <div className="flex gap-2">
                            <Badge className="mt-2 border-[1px] rounded-full px-2 text-[#101010] border-[#101010] md:text-[12px] text-[10px] flex items-center">
                              <MapPin/>
                              <span>100% remote</span>
                            </Badge>
                             <Badge className="mt-2 border-[1px] rounded-full px-2 text-[#101010] border-[#101010] md:text-[12px] text-[10px] flex items-center">
                              <Clock/>
                              <span>Internship</span>
                            </Badge>
                          </div>
                        </div>
                        <div className="mt-4 lg:mt-0 lg:ml-6">
                          <button
                            onClick={() => handleApplyClick(job)}
                            className="font-semibold flex items-center text-2xl"
                          >
                            <span>Apply</span>
                            <ArrowUpRight size={26}/>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  {jobs.filter(job => tab === "all" || job.department === tab).length === 0 && (
                    <div className="text-center py-12">
                      <p className="text-gray-600 text-lg">No jobs found in this category.</p>
                    </div>
                  )}
                </div>
              </TabsContent>
            ))}
            <TabsContent key="others" value="others">
              <div className="space-y-6 pt-36 md:pt-14">
                <div className="pt-10 pb-4 border-[#101010]/20 border-t-[1px]">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="md:text-4xl text-2xl font-semibold text-[#101010]">Other Position or Skill</h3>
                      </div>
                      <p className="text-stone-500 w-9/12 mb-4">If you don&apos;t see a position or skill that matches your interest, let us know what you&apos;re looking for!</p>
                      <input
                        type="text"
                        placeholder="Enter desired position or skill..."
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        // You may want to handle this input with state and submission logic
                      />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
      </div>

      {(selectedJob !== null) && (
          <JobApplicationForm
            job={selectedJob}
            isOpen={isApplicationFormOpen}
            onClose={() => {
              setIsApplicationFormOpen(false)
              setSelectedJob(null)
            }}
          />
      )}
    </section>
  )
}
