const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');
const msg = {
  to: 'adikrauza@gmail.com',
  from: 'adikrauza@gmail.com',
  subject: 'send',
  text: 'send',
  html: `send`,
};
sgMail.send(msg);