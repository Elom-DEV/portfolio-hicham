// pages/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.GMAIL_USER}>`, // ton adresse Gmail + nom de l'utilisateur
      to: process.env.RECEIVER_EMAIL,
      replyTo: email, // pour que tu puisses répondre à l'utilisateur
      subject: `Message de ${name}`,
      text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: 'Email envoyé avec succès !' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Erreur lors de l’envoi de l’email.' });
    }
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
}
