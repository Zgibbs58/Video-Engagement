/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
// Used the following resources to help me set up the OAuth2 and nodemailer:
// https://dev.to/jlong4223/how-to-implement-email-functionality-with-node-js-react-js-nodemailer-and-oauth2-2h7m
// https://graycode.ie/blog/setting-up-an-email-server-for-react-apps-with-express-nodemailer-and-postfix/#envvars
require("dotenv").config({ path: __dirname + "/.env", override: true });
const express = require("express");
const bodyParser = require("body-parser");
const sendMail = require("./sendMail.js");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;

app.use(
  cors({
    origin: "https://www.zacharywgibbs.com", // Update this with your frontend's address
    // origin: "http://localhost:5173", // Used for testing in development
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/sendmail", async (req, res) => {
  const { name, email, phone, subject, message, services, website } = req.body;
  try {
    await sendMail(name, process.env.EMAIL, email, phone, subject, message, services, website);
    res.status(200).send({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send({ message: "Error sending email" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
