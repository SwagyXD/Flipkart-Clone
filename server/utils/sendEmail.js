const nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");
require("dotenv").config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mitraswat999@gmail.com",
      pass: 12345678,
    },
  });

  const mailOptions = {
    from: "mitraswat999@gmail.com",
    to: options.email,
    subject: "HI",
    html: options.data.reset_url,
  };
  
  console.log("Message sent: %s", info.messageId);
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error occurred while sending email:", error.message);
    } else {
      console.log("OTP code sent successfully!", info, mailOptions);
    }
  });
};

module.exports = sendEmail;
