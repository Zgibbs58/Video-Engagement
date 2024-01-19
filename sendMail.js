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

const sendMail = async (name, myEmail, email, subject, message) => {
  logToFile("Sending email..., in the sendMail.js file");
  try {
    const mailOptions = {
      from: myEmail,
      to: myEmail,
      subject: subject,
      text: `${name} has sent a message: ${message} <br> Email: ${email}`,
      html: `<p>Email: ${email}<br>${name} has sent a message:<br> ${message}</p>`,
    };
    const info = await transporter.sendMail(mailOptions);
    console.log("email sent successfully", info.messageId);
    logToFile("Email sent!");
    return true;
  } catch (error) {
    logToFile(`Error sending email: ${error}`);
    console.error("Error sending email:", error);
    return false;
  }
};

// const oAuth2Client = new google.auth.OAuth2(process.env.OAUTH_CLIENTID, process.env.OAUTH_CLIENT_SECRET, process.env.OAUTH_REDIRECT_URI);
// oAuth2Client.setCredentials({ refresh_token: process.env.OAUTH_REFRESH_TOKEN });

// const sendMail = async (name, to, from, subject, message) => {
//   logToFile("Sending email..., in the sendMail.js file");

//   try {
//     // Refresh the access token so that it's valid for sending emails
//     await oAuth2Client.refreshAccessToken();
//     const accessToken = await oAuth2Client.getAccessToken();

//     let transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         type: "OAuth2",
//         user: process.env.EMAIL,
//         clientId: process.env.OAUTH_CLIENTID,
//         clientSecret: process.env.OAUTH_CLIENT_SECRET,
//         refreshToken: process.env.OAUTH_REFRESH_TOKEN,
//         accessToken: accessToken,
//       },
//       debug: true, // show debug output
//     });
//     transporter.verify((err, success) => {
//       err ? console.log(err) : console.log(`=== Server is ready to take messages: ${success} ===`);
//     });
//     const mailOptions = {
//       from: from,
//       to: to,
//       subject: subject,
//       text: `${name} has sent a message: ${message}`,
//       html: `<h1>${name} has sent a message: ${message}</h1>`,
//     };
//     console.log("Sending email...");
//     await transporter.sendMail(mailOptions);
//     logToFile("Email sent!");
//     return true;
//   } catch (error) {
//     logToFile(`Error sending email: ${error}`);
//     return false;
//   }
// };

module.exports = sendMail;
