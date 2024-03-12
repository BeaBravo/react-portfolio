const router = require('express').Router();
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const emailjs = require('emailjs-com')


const transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL,
        password: process.env.PASSWORD
    }
});

router.route('/api/contact').post(async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const mailOptions = {
            from_name: name,
            from_email: email,
            message: message
        };
        const sentEmail = await emailjs.send('service_lp3hjml', 'template_vov4hdw', mailOptions, 'zQR0ZtteWD7GqU93U')
        console.log(sentEmail)
        const TTD = sentEmail.text;
        console.log(TTD)
        return res.status(200).json(`wants to send '${message}' to ${name}`)
    }
    catch (err) {
        console.log(err);
        return res.status(400).json(err)
    }
})

module.exports = router;