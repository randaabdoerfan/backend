const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service: "gmail",
    port: 587,
    secure: false,
    auth: {
        user: process.env.email_user || 'randaerfan12@gmail.com',
        pass: process.env.email_password || 'jebk lvnj ptpv oivo'
    }
})

module.exports = transporter