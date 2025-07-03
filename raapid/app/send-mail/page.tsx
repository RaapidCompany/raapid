"use server";

import { Resend } from "resend";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { EmailTemplate } from "./email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmail(formData: FormData) {
  "use server";

  const senderName = formData.get("senderName") as string;
  const senderEmail = formData.get("senderEmail") as string;
  const recipientEmail = formData.get("recipientEmail") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!senderName || !senderEmail || !recipientEmail || !subject || !message) {
    return { success: false, error: "All fields are required" };
  }

  try {
    const data = await resend.emails.send({
      from: `${senderName} <${process.env.RESEND_FROM_EMAIL}>`,
      to: [recipientEmail],
      subject: subject,
      react: EmailTemplate({
        senderName,
        message,
        senderEmail,
      }),
    });

    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
}

export default async function SendMailPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Send Email</h1>

        <form action={sendEmail} className="space-y-6">
          <div>
            <Label htmlFor="senderName">Your Name</Label>
            <Input
              type="text"
              id="senderName"
              name="senderName"
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="senderEmail">Your Email</Label>
            <Input
              type="email"
              id="senderEmail"
              name="senderEmail"
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="recipientEmail">Recipient Email</Label>
            <Input
              type="email"
              id="recipientEmail"
              name="recipientEmail"
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="subject">Subject</Label>
            <Input
              type="text"
              id="subject"
              name="subject"
              required
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              rows={6}
              required
              className="mt-1"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-green-600 text-white"
          >
            Send Email
          </Button>
        </form>
      </div>
    </div>
  );
}