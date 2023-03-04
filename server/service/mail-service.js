const nodemailer = require('nodemailer');

class MailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            service: 'gmail',
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            }
        })
    }
    async sendActivationMail(to, link) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: process.env.API_URL + ': account confirmation',
            text: '',
            html: 
            `
                  <div>
                    <h1>Account confirmation</h1>
                    <p>Hello, please confirm your new account with Saylor Academy by clicking the link below:</p>
                    <a href="${link}">${link}</a>
                    <p>(If you cannot click on the link, copy and paste the link into the address bar of your web browser.)</p>
                    <br>
                    <p>---</p>
                    <p>Welcome to ${process.env.SERVICE_NAME}!</p>
                    <p>${process.env.SERVICE_NAME} team</p>
                  </div>
            `,
    })
    }
}

module.exports = new MailService();