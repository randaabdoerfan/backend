const nodemailer = require('nodemailer')
const dns = require('dns');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
  port: 587,
  secure: false,
    auth: {
        user: process.env.email_user || 'randaerfan12@gmail.com',
        pass: process.env.email_password || 'jebk lvnj ptpv oivo'
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
    lookup: (hostname, options, cb) => {
        dns.resolve4(hostname, (err, addresses) => {
            if (err) return cb(err);
            cb(null, addresses[0], 4);
        });
    }
})

module.exports = transporter