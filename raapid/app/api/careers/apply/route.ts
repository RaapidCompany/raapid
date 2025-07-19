import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      job_id,
      first_name,
      last_name,
      email,
      phone,
      resume_url,
      cover_letter,
      experience_years,
      location,
      availability,
      technical,
      behavioral,
      situational,
      motivation,
    } = body;

    // Store application in DB
    const { error: dbError } = await supabase.from('job_applications').insert([
      {
        job_id,
        first_name,
        last_name,
        email,
        phone,
        resume_url,
        cover_letter,
        experience_years,
        location,
        availability,
        technical,
        behavioral,
        situational,
        motivation,
      },
    ]);
    if (dbError) throw dbError;

    // Send confirmation email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Your Application Has Been Received',
      text: `Dear ${first_name} ${last_name},\n\nThank you for applying for the position at Raapid. We have received your application and our team will carefully review your submission, including your responses to the interview questions.\n\nIf your qualifications match our requirements, we will contact you to discuss the next steps.\n\nWe appreciate your interest in joining our team and wish you the best of luck in the selection process.\n\nBest regards,\nRaapid Careers Team`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process application.' }, { status: 500 });
  }
}
