const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
});

const sendEmail = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
    
        const mailOptions = {
          from: req.body.email,
          to: process.env.SMTP_USER,
          subject: req.body.subject,
          text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
        };
    
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully.' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to send email.' });
      }
}

module.exports = { sendEmail }