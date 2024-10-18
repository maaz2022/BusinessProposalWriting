import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  console.log(req.method);
  
  try {
    const { firstName, lastName, email, phone, city, reason, businessLevel } = await req.json();

    const toEmail = process.env.SMTPEMAIL;
    const password = process.env.SMTPPASSWORD;
    const fromEmail = process.env.FROMEMAIL;

    // Ensure environment variables are defined
    if (!toEmail || !password) {
      return NextResponse.json({ message: 'SMTP credentials not set' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp-relay.sendinblue.com',
      port: 587,
      secure: false,
      auth: {
        user: fromEmail,
        pass: password,
      },
    });

    await transporter.sendMail({
      from: toEmail,
      to: toEmail,
      subject: 'New Contact Form Submission',
      html: `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Reason for Business Plan:</strong> ${reason}</p>
        <p><strong>Business Level:</strong> ${businessLevel}</p>
      `,
    });

    return NextResponse.json({ message: 'Query Sent' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to submit form' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
}
