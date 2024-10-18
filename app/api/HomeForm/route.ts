import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  console.log(req.method);
  
  try {

    const { name, email, phone } = await req.json();

    const toEmail = process.env.SMTPEMAIL;
    const password = process.env.SMTPPASSWORD;
    const fromEmail = process.env.FROMEMAIL;


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
      subject: 'HomePage Form Submission',
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      `,
    });

    return NextResponse.json({ message: 'Query Sent' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to submit form' }, { status: 500 });
  }
}

