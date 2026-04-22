import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, organization, phone, tier, useCase, preferredDate } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Send confirmation email to user
    const userEmailResult = await resend.emails.send({
      from: 'Indy Law <admin@indylaw.in>',
      to: email, //  to: ['admin@indylaw.in'],
      subject: 'Demo Request Received - Indy Law',
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color: #1A237E;">Thank You for Your Interest in Indy Law</h2>
          <p>Hi ${name},</p>
          <p>We've received your demo request and appreciate your interest in transforming your legal research with Indy Law.</p>
          <p><strong>Request Details:</strong></p>
          <ul>
            <li>Organization: ${organization || 'Not provided'}</li>
            <li>Phone: ${phone || 'Not provided'}</li>
            <li>Tier: ${tier || 'Not specified'}</li>
            <li>Preferred Demo Date: ${preferredDate || 'Not specified'}</li>
          </ul>
          <p>Our team will review your request and reach out within 24-48 hours to schedule your personalized demo.</p>
          <p>If you have any urgent questions, feel free to contact us at <strong>admin@indylaw.in</strong></p>
          <br/>
          <p>Best regards,<br/>The Indy Law Team</p>
        </div>
      `,
    });

    // Send notification email to admin
    const adminEmailResult = await resend.emails.send({
      from: 'Indy Law <admin@indylaw.in>',
      to: 'admin@indylaw.in',
      subject: `New Demo Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color: #1A237E;">New Demo Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Organization:</strong> ${organization || 'Not provided'}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Tier of Interest:</strong> ${tier || 'Not specified'}</p>
          <p><strong>Preferred Demo Date:</strong> ${preferredDate || 'Not specified'}</p>
          <p><strong>Use Case:</strong></p>
          <p>${useCase || 'Not provided'}</p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">Please follow up with this lead promptly.</p>
        </div>
      `,
    });

    if (userEmailResult.error || adminEmailResult.error) {
      console.error('Email sending error:', userEmailResult.error || adminEmailResult.error);
      return NextResponse.json(
        { error: 'Failed to send emails' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: 'Demo request received successfully. Check your email for confirmation.',
        success: true
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact request:', error);
    return NextResponse.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    );
  }
}
