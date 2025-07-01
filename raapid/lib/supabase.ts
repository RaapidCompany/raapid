import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database tables
export interface JobApplication {
  id?: string
  job_id: string
  first_name: string
  last_name: string
  email: string
  phone: string
  resume_url?: string
  cover_letter: string
  experience_years: number
  location: string
  availability: string
  created_at?: string
}

export interface Job {
  id: string
  title: string
  department: string
  location: string
  type: string
  description: string
  requirements: string[]
  benefits: string[]
  salary_range?: string
  is_active: boolean
  created_at: string
}
export interface RiderApplication {
  id?: string
  first_name: string
  last_name: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zip_code: string
  bike_type: string
  experience_years: number
  availability: string
  resume_url?: string
  created_at?: string
}