import { useState, useEffect } from "react";
import Modal from "../components/Modal";
import { motion } from "framer-motion";

import { validateEmail } from "/utils/helper";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [modalFirstName, setModalFirstName] = useState("");

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e, inputName) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, firstName, lastName, and message.
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "firstName") {
      setFirstName(inputValue);
    } else if (inputType === "lastName") {
      setLastName(inputValue);
    } else {
      setMessage(inputValue);
    }
    // Checking on every change to the inputs and displaying an error message if empty or not valid

    if (!document.getElementById(`${inputName}`).value) {
      document.getElementById(`${inputName}Error`).textContent = "This is a required field.";
    } else {
      document.getElementById(`${inputName}Error`).textContent = "";
    }
    if (!email) {
      document.getElementById(`emailError`).textContent = "";
    } else if (!validateEmail(email)) {
      document.getElementById(`emailError`).textContent = "Please enter a valid email.";
    }
  };

  //   Checking everytime the cursor leaves the input to see if it is empty and displaying a required message if so
  const handleBlur = (inputName) => {
    if (!document.getElementById(`${inputName}`).value) {
      document.getElementById(`${inputName}Error`).textContent = "This is a required field.";
    } else {
      document.getElementById(`${inputName}Error`).textContent = "";
    }
  };
  // Checking to confirm email entry and validate email
  const handleEmailBlur = () => {
    if (!email) {
      document.getElementById(`emailError`).textContent = "This is a required field.";
    } else if (!validateEmail(email)) {
      document.getElementById(`emailError`).textContent = "Please enter a valid email.";
    } else {
      document.getElementById(`emailError`).textContent = "";
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!firstName || !lastName || !email || !message) {
      setErrorMessage("Please complete all required sections of the form.");
      return;
    }
    const { name, from, subject } = {
      name: `${firstName} ${lastName}`,
      from: email,
      subject: "Portfolio Contact Form",
    };
    try {
      const response = await fetch("http://54.160.193.244/api/sendmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, from, subject, message }),
      });
      if (response.status === 200) {
        console.log("Email sent!. \nResponse:", response);

        setModalFirstName(firstName);

        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");

        openModal();
      } else {
        console.log("Email not sent. \nResponse:", response);
      }
    } catch (error) {
      alert(`Error sending email: ${error}`);
      console.error("Error sending email:", error);
    }
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <p className="text-2xl font-bold mb-4">Thanks for reaching out, {modalFirstName}!</p>
        <p className="text-lg mb-4">I&apos;ll review your message and get back to you as soon as possible.</p>{" "}
      </Modal>
      <div className="mx-10 mt-6 mb-24 lg:mx-32 overflow-x-hidden">
        <motion.h3
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-left underline underline-offset-8 decoration-5 decoration-emerald-500 mb-6"
        >
          Contact
        </motion.h3>
        <p className="invisible">
          Lorem ipsum dolor, <span className="hidden xs:inline">sit amet consectetur adipisicing elit. Eos alias deserunt</span>
          <span className="hidden sm:inline">recusandae assumenda tempora doloribus rem. Rem dolore, labore dicta fuga modi quae voluptates.</span>
        </p>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="flex justify-start text-left"
        >
          <form className="w-full" onSubmit={handleSubmit}>
            <p className="text-red-500 text-md font-semibold italic mb-4">{errorMessage}</p>
            <div className="flex flex-wrap pb-6">
              <div className="w-full md:w-1/2 md:pr-3 pb-6 md:pb-0">
                <label className="block uppercase tracking-wide text-md font-bold pb-2" htmlFor="grid-first-name">
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="firstName"
                  type="text"
                  placeholder="Jane"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => handleInputChange(e, "firstName")}
                  onBlur={() => handleBlur("firstName")}
                />
                <p id="firstNameError" className="text-red-500 text-xs italic"></p>
              </div>
              <div className="w-full md:w-1/2">
                <label className="block uppercase tracking-wide text-md font-bold pb-2" htmlFor="grid-last-name">
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 pb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => handleInputChange(e, "lastName")}
                  onBlur={() => handleBlur("lastName")}
                />
                <p id="lastNameError" className="text-red-500 text-xs italic"></p>
              </div>
            </div>
            <div className="flex flex-wrap pb-6">
              <div className="w-full">
                <label className="block uppercase tracking-wide text-md font-bold pb-2" htmlFor="grid-password">
                  E-mail
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 pb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  placeholder="user@gmail.com"
                  type="email"
                  value={email}
                  name="email"
                  onChange={(e) => handleInputChange(e, "email")}
                  onBlur={handleEmailBlur}
                />
                <p id="emailError" className="text-red-500 text-xs italic"></p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full">
                <label className="block uppercase tracking-wide text-md font-bold pb-2" htmlFor="grid-password">
                  Message
                </label>
                <textarea
                  className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 pb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => handleInputChange(e, "message")}
                  onBlur={() => handleBlur("message")}
                ></textarea>
                <p id="messageError" className="text-red-500 text-xs italic"></p>
              </div>
            </div>
            <button
              className="w-full my-6 py-2 text-xl font-bold text-gray-500 bg-gray-100 rounded-full hover:bg-gray-500 hover:text-white border-2 border-gray-500 ease-in-out duration-300"
              type="submit"
            >
              Send
            </button>
          </form>
        </motion.div>
      </div>
    </>
  );
}
