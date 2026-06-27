import { NextResponse } from 'next/server'

const RESEND_API_URL = 'https://api.resend.com/emails'

export async function POST(request: Request) {
  const data = await request.json()
  const { firstName, lastName, email, phone, message } = data || {}

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json({ error: 'Please fill in all required fields.' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const fromEmail = process.env.RESEND_SENDER_EMAIL ?? 'onboarding@resend.dev'
  const toEmail = process.env.CONTACT_RECEIVER_EMAIL ?? 'rcmalpha@gmail.com'

  if (!apiKey) {
    return NextResponse.json({ error: 'Resend API key is not configured.' }, { status: 500 })
  }

  const htmlBody = `
    <h1>New RCMAlpha inquiry</h1>
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, '<br/>')}</p>
  `

  const response = await fetch(RESEND_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject: `New inquiry from ${firstName} ${lastName}`,
      html: htmlBody,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    return NextResponse.json({ error: `Email send failed: ${errorText}` }, { status: 502 })
  }

  return NextResponse.json({ success: true })
}
