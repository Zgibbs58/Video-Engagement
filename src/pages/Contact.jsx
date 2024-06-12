import { useState, useEffect } from "react";
import Modal from "../components/Modal";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Logo from "../components/Logo";

import { validateEmail } from "/utils/helper";

export default function Contact() {
  // if updating the services array, make sure to update the services array in the handleSubmit function as well
  //if adding new inpputs, make sure to add them to the in sendMail function and in the server.js file
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [services, setServices] = useState([
    { name: "New Website", isChecked: false },
    { name: "Redesign", isChecked: false },
    { name: "Web Maintenance", isChecked: false },
    { name: "Website Photography Session", isChecked: false },
    { name: "Contact Form", isChecked: false },
  ]);

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

  const handleServiceCheck = (checkedService) => {
    setServices((prevServices) =>
      prevServices.map((service) => (service.name === checkedService.name ? { ...service, isChecked: !service.isChecked } : service))
    );
  };

  const handleInputChange = (e, inputName) => {
    const { target } = e;
    // const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, firstName, lastName, and message.
    switch (inputName) {
      case "email":
        setEmail(inputValue);
        break;
      case "firstName":
        setFirstName(inputValue);
        break;
      case "lastName":
        setLastName(inputValue);
        break;
      case "message":
        setMessage(inputValue);
        break;
      case "phone":
        setPhone(inputValue);
        break;
      case "website":
        setWebsite(inputValue);
        break;
      default:
        console.warn(`Unhandled input name: ${inputName}`);
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

    // checkbox filtering to see which services are checked
    const checkedServices = services.filter((service) => service.isChecked).map((service) => service.name);
    console.log(checkedServices);

    if (!firstName || !lastName || !email || !message || !phone || checkedServices.length === 0) {
      setErrorMessage("Please complete all required sections of the form. At least one service checkbox must be selected.");
      return;
    }
    const { name, subject } = {
      name: `${firstName} ${lastName}`,
      subject: "Portfolio Contact Form",
    };
    try {
      //next line for testing locally
      // const response = await fetch("http://localhost:3001/api/sendmail", {
      //next line for production
      const response = await fetch("https://zacharywgibbs.com/api/sendmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message, services: checkedServices, phone, website }),
      });
      if (response.status === 200) {
        console.log("Email sent!. \nResponse:", response);

        setModalFirstName(firstName);

        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
        setPhone("");
        setWebsite("");
        setServices(services.map((service) => ({ ...service, isChecked: false })));

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
      <Helmet>
        <title>Zach Gibbs | Contact</title>
      </Helmet>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <i className="text-6xl px-3 py-1 rounded-full bg-base-300 absolute top-[-28px] left-1/2 transform -translate-x-1/2 text-emerald-500">
          &#x2714;
        </i>
        <p className="text-2xl sm:text-3xl font-bold">Thanks, {modalFirstName}!</p>
        <p className="sm:text-lg">I will review your project details and get back to you as soon as possible.</p>
        <Logo />
      </Modal>
      <div className="overflow-x-hidden">
        <div className="mx-8 mt-6 mb-24 sm:mx-20 lg:mx-32">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className="text-4xl lg:text-6xl font-bold text-left underline underline-offset-8 decoration-5 decoration-emerald-500 mb-6"
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
              <div className="flex pb-6 gap-3">
                <div className="w-full md:w-1/2">
                  <label className="block uppercase tracking-wide text-md font-bold pb-2" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    className="block w-full text-gray-500 border border-gray-500 rounded py-3 px-3 leading-tight focus:bg-gray-200"
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
                  <label className="block uppercase tracking-wide text-md font-bold pb-2" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    className="block w-full text-gray-500 border border-gray-500 rounded py-3 px-4 pb-3 leading-tight focus:bg-gray-200"
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
              <div className="flex flex-wrap md:flex-nowrap pb-6 gap-3">
                <div className="w-full md:w-1/2">
                  <label className="block uppercase tracking-wide text-md font-bold pb-2" htmlFor="email">
                    E-mail
                  </label>
                  <input
                    className="block w-full text-gray-500 border border-gray-500 rounded py-3 px-3 leading-tight focus:bg-gray-200"
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
                <div className="w-full md:w-1/2">
                  <label className="block uppercase tracking-wide text-md font-bold pb-2" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="block w-full text-gray-500 border border-gray-500 rounded py-3 px-4 pb-3 leading-tight focus:bg-gray-200"
                    id="phone"
                    placeholder="555-555-5555"
                    type="phone"
                    value={phone}
                    name="phone"
                    onChange={(e) => handleInputChange(e, "phone")}
                    onBlur={() => handleBlur("phone")}
                  />
                  <p id="phoneError" className="text-red-500 text-xs italic"></p>
                </div>
              </div>
              <div className="flex flex-wrap md:flex-nowrap pb-6 gap-3">
                <div className="w-full md:w-1/2 pb-6">
                  <label className="block uppercase tracking-wide text-md font-bold pb-2">Services</label>
                  <p className="pb-1">Check all the services you are interested in:</p>
                  {services.map((service, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="checkbox"
                        id={service.name}
                        name={service.name}
                        checked={service.isChecked}
                        onChange={() => handleServiceCheck(service)}
                      />
                      <label htmlFor={service.name}>{service.name}</label>
                    </div>
                  ))}
                </div>
                <div className="w-full md:w-1/2 pb-6">
                  <label className="block uppercase tracking-wide text-md font-bold pb-2" htmlFor="website">
                    Website Address
                  </label>
                  <input
                    className="block w-full text-gray-500 border border-gray-500 rounded py-3 px-4 pb-3 leading-tight focus:bg-gray-200"
                    id="website"
                    placeholder="yourwebsite.com"
                    type="text"
                    value={website}
                    name="website"
                    onChange={(e) => handleInputChange(e, "website")}
                  />
                  <p id="phoneError" className="text-red-500 text-xs italic"></p>
                </div>
              </div>
              <div className="flex flex-wrap">
                <div className="w-full">
                  <label className="block uppercase tracking-wide text-md font-bold pb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className=" no-resize appearance-none block w-full text-gray-700 border border-gray-500 rounded py-3 px-4 pb-3 leading-tight focus:bg-gray-200 h-48 resize-none"
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
                className="w-full my-6 py-2 text-xl font-bold text-white hover:bg-gray-100 rounded-full bg-emerald-500 hover:text-gray-500 border-2 hover:border-emerald-500 ease-in-out duration-300"
                type="submit"
              >
                Send
              </button>
              <p className="text-red-500 text-md font-semibold italic mb-4">{errorMessage}</p>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
}
