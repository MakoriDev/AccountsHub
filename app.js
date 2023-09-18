const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-email', (req, res) => {
    const { name, email, subject, message } = req.body;
    const recipientEmail = req.body.recipientEmail; // Assuming you have an input field with name "recipientEmail"
    const recipientPassword = req.body.recipientPassword; // Assuming you have an input field with name "recipientPassword"

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: recipientEmail, // Use the recipient's email from the form
            pass: recipientPassword // Use the recipient's password from the form
        }
    });

    const mailOptions = {
        from: recipientEmail, // Use the recipient's email from the form
        to: 'onesmusmakori@gmail.com',
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.error(error);
        }
        console.log('Email sent:', info.response);
        res.send('Email sent successfully!');
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
