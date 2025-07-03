"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function SendMailPage() {
  const [sending, setSending] = useState(false);

  async function handleSubmit(formData: FormData) {
    setSending(true);
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send email");
      }

      alert("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Send Email</h1>

        <form action={handleSubmit} className="space-y-6">
          {/* <div>
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
          </div> */}

          <div>
            <Label htmlFor="recipientEmail">Recipient Email</Label>
            <Input
              type="email"
              id="recipientEmail"
              name="recipientEmail"
              required
              placeholder="name@example.com"
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
              placeholder="Subject"
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
              placeholder="Type your message here..."
              className="mt-1"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-amber-600 text-white"
            disabled={sending}
          >
            {sending ? "Sending..." : "Send Email"}
          </Button>
        </form>
      </div>
    </div>
  );
}