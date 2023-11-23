/* eslint-disable no-undef */
// Used the following resources to help me set up the OAuth2 and nodemailer:
// https://dev.to/jlong4223/how-to-implement-email-functionality-with-node-js-react-js-nodemailer-and-oauth2-2h7m
// https://graycode.ie/blog/setting-up-an-email-server-for-react-apps-with-express-nodemailer-and-postfix/#envvars
const nodemailer = require("nodemailer");
const fs = require("fs");

const logToFile = (message) => {
  const logMessage = `[${new Date().toISOString()}] ${message}\n`;
  fs.appendFile("sendMail.log", logMessage, (err) => {
    if (err) {
      console.error("Error writing to log file:", err);
    }
  });
};

const sendMail = async (name, to, from, subject, message) => {
  logToFile("Sending email..., in the sendMail.js file");

  try {
    // let transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   host: "localhost",
    //   secure: false,
    //   port: 25,
    //   auth: { user: "zacharywgibbs@gmail.com", pass: "Ribs&Remi917" },
    //   tls: { rejectUnauthorized: false },
    //   debug: true,
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL,
        pass: process.env.WORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
      },
    });
    transporter.verify((err, success) => {
      err ? console.log(err) : console.log(`=== Server is ready to take messages: ${success} ===`);
    });
    const mailOptions = {
      from: from,
      to: to,
      subject: subject,
      text: `${name} has sent a message: ${message}`,
    };
    console.log("Sending email...");
    await transporter.sendMail(mailOptions);
    logToFile("Email sent!");
    return true;
  } catch (error) {
    logToFile(`Error sending email: ${error}`);
    return false;
  }
};

module.exports = sendMail;
