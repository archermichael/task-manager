const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = process.env.SENDGRID_API_KEY

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'archer.v.michael@gmail.com',
        subject: 'Welcome to Task Manager!',
        text: `Welcome to the Task Manager app, ${name}! You're ready to get started creating tasks!`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'archer.v.michael@gmail.com',
        subject: 'Task Manager - Cancellation Confirmation',
        text: `We're sorry to see you go, ${name}. To create a better experience, we'd appreciate if you could let us know why you decided to cancel?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}