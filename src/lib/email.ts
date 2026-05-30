import nodemailer from 'nodemailer'

interface SendEmailParams {
  subject: string
  text: string
  html?: string
}

export async function sendEmail({ subject, text, html }: SendEmailParams) {
  const service = process.env.SMTP_SERVICE || 'gmail'
  const user = process.env.SMTP_MAIL
  const pass = process.env.SMTP_PASSWORD

  if (!user || !pass) {
    throw new Error('SMTP credentials are not configured in environment variables.')
  }

  const transporter = nodemailer.createTransport({
    service,
    auth: {
      user,
      pass,
    },
  })

  const mailOptions = {
    from: `"VrindavanDev Lead Portal" <${user}>`,
    to: user, // Send lead notification emails to the owner's email
    subject,
    text,
    html,
  }

  return transporter.sendMail(mailOptions)
}
