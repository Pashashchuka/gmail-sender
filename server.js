const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json({ limit: '10mb' })); 
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(express.static('public'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password'
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/send-email', async (req, res) => {
  try {
    const { subject, htmlContent } = req.body;

    const recipientEmail = process.env.EMAIL_USER || 'your-email@gmail.com';
    
    if (!htmlContent) {
      return res.status(400).json({ 
        success: false, 
        message: 'HTML content is required.' 
      });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: recipientEmail,
      subject: subject || 'HTML Email from Email Sender',
      html: htmlContent
    };

    const info = await transporter.sendMail(mailOptions);
    
    console.log('Email sent:', info.messageId);
    res.json({ 
      success: true, 
      message: 'Email sent successfully to yourself!',
      messageId: info.messageId 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error sending email: ' + error.message 
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
  console.log(`Open http://localhost:${PORT} in your browser`);
}); 