const nodemailer = require('nodemailer');

const { EMAIL_ID, EMAIL_PASS } = require('./serverConfig');
// console.log(EMAIL_ID, EMAIL_PASS);
const sender = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: EMAIL_ID,
        pass: EMAIL_PASS
    }
});

module.exports = sender;