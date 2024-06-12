/* eslint-disable no-undef */
// Used the following resources to help me set up the OAuth2 and nodemailer:
// https://dev.to/jlong4223/how-to-implement-email-functionality-with-node-js-react-js-nodemailer-and-oauth2-2h7m
// https://graycode.ie/blog/setting-up-an-email-server-for-react-apps-with-express-nodemailer-and-postfix/#envvars
const nodemailer = require("nodemailer");
const fs = require("fs");
// const { google } = require("googleapis");
const aws = require("@aws-sdk/client-ses");

const logToFile = (message) => {
  const logMessage = `[${new Date().toISOString()}] ${message}\n`;
  fs.appendFile("sendMail.log", logMessage, (err) => {
    if (err) {
      console.error("Error writing to log file:", err);
    }
  });
};

const ses = new aws.SES({
  apiVersion: "2010-12-01",
  region: process.env.AWS_SES_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// create Nodemailer SES transporter
let transporter = nodemailer.createTransport({
  SES: { ses, aws },
});

const sendMail = async (name, myEmail, email, phone, subject, message, services, website) => {
  logToFile(
    `Sending email..., in the sendMail.js file with the following parameters: name: ${name}, myEmail: ${myEmail}, email: ${email}, subject: ${subject}, phone:${phone}, website:${website}, message: ${message}, services: ${services}`
  );
  try {
    const mailOptions = {
      from: myEmail,
      to: myEmail,
      subject: subject,
      text: `${name} has sent a message: ${message} <br> Email: ${email}`,
      html: `<p>Email: ${email}<br>Phone: ${phone}<br>${name} has sent a message:<br> ${message}<br>Services: ${services}<br>Website:${website}</p>`,
    };
    const info = await transporter.sendMail(mailOptions);
    console.log("email sent successfully", info.messageId);
    logToFile(`Email sent successfully: ${info.messageId}`);
    return true;
  } catch (error) {
    logToFile(`Error sending email: ${error}`);
    console.error("Error sending email:", error);
    return false;
  }
};

module.exports = sendMail;
