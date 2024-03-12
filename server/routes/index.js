const router = require('express').Router();
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

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
            from: name + `<${email}>`,
            to: process.env.EMAIL,
            subject: 'Someone emailed you from your site',
            text: message
        };
        const info = await transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error(error);
                return error;
            } else {

                console.log(info.response)
                return info.response
            }
        })
        console.log(info)
        return res.status(200).json(`wants to send '${message}' to ${name}`)
    }
    catch (err) {
        console.log(err);
        return res.status(400).json(err)
    }
})

module.exports = router;