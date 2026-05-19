import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend('re_WwDxRkGC_MLGxrWZzE3oBwRaYMpADpgBB');

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();

  try {
    await resend.emails.send({
      from: 'Zad Way Contact <onboarding@resend.dev>',
      to: 'Laith@zad-way.com',
      subject: `[Zad Way] ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a5f;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Name:</td><td style="padding: 8px 0;">${name}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Subject:</td><td style="padding: 8px 0;">${subject}</td></tr>
          </table>
          <hr style="margin: 16px 0; border: none; border-top: 1px solid #eee;" />
          <p style="font-weight: bold; color: #555;">Message:</p>
          <p style="white-space: pre-line; color: #333;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
