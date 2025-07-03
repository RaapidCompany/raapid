import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '@/app/send-mail/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    // Hardcoded sender details
    const senderName = "Raapid Team";
    const senderEmail = "oyebamijo@raapid.company";
    const recipientEmail = formData.get('recipientEmail') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    if (!recipientEmail || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: `${senderName} <${process.env.RESEND_FROM_EMAIL}>`,
      to: [recipientEmail],
      subject: subject,
      react: await Promise.resolve(EmailTemplate({
        senderName,
        message,
        senderEmail
      })),
    });

    return NextResponse.json({ success: true, data });
  } catch  {
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
