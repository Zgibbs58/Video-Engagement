import { useState, useEffect } from "react";
import Modal from "./Modal";
import { validateEmail } from "../../utils/helper";

export default function LeadGenerator() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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

  const handleInputChange = (e) => {
    const { value } = e.target;
    if (e.target.id === "email") setEmail(value);
    if (e.target.id === "firstName") setName(value);
  };

  const handleEmailBlur = () => {
    if (!email) {
      document.getElementById(`emailError`).textContent = "This is a required field.";
    } else if (!validateEmail(email)) {
      document.getElementById(`emailError`).textContent = "Please enter a valid email.";
    } else {
      document.getElementById(`emailError`).textContent = "";
    }
  };

  const handleBlur = (field) => {
    if (!name) {
      document.getElementById(`${field}Error`).textContent = "This is a required field.";
    } else {
      document.getElementById(`${field}Error`).textContent = "";
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !validateEmail(email)) {
      setErrorMessage("Please enter a valid email.");
      return;
    } else if (!name) {
      setErrorMessage("Please enter your name.");
      return;
    }

    try {
      //next line for testing locally
      // const response = await fetch("http://localhost:3001/api/sendmail", {
      //next line for production
      const response = await fetch("https://zacharywgibbs.com/api/sendmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });
      if (response.status === 200) {
        console.log("Email sent!. \nResponse:", response);

        // If everything goes according to plan, we want to clear out the input after a successful submission.
        setEmail("");
        openModal();
      } else {
        console.log("Email not sent. \nResponse:", response);
        setErrorMessage("An error occurred. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <i className="text-6xl px-3 py-1 rounded-full bg-base-300 absolute top-[-28px] left-1/2 transform -translate-x-1/2 text-emerald-500">
          &#x2714;
        </i>
        <p className="text-2xl sm:text-3xl font-bold">Thanks!</p>
        <p className="sm:text-lg">You can now download your free resource below.</p>
        <a
          href="/assets/5-essentials-website.pdf"
          className="mt-4 py-2 px-4 bg-emerald-500 text-white font-bold rounded hover:bg-emerald-600"
          download
        >
          Download PDF
        </a>
        {/* <Logo /> */}
      </Modal>
      <div className="mx-8 mt-6 mb-24 sm:mx-20 lg:mx-32 flex flex-wrap xl:flex-nowrap gap-x-24">
        <div className="xl:w-1/2">
          <h3 className="text-4xl lg:text-5xl font-bold text-left mb-6">Unlock Your Website&apos;s Potential</h3>
          <p>
            Want to know the secrets to a thriving online presence? Enter your name and email below and get instant access to a free PDF: 5 Essentials
            for a Successful Business Website.
          </p>
          <div className="flex justify-start text-left mt-4">
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="flex pb-6 gap-3">
                <div className="w-full">
                  <label className="block uppercase tracking-wide text-md font-bold pb-2" htmlFor="firstName">
                    Name
                  </label>
                  <input
                    className="block w-full text-gray-500 border border-gray-500 rounded py-3 px-3 leading-tight focus:bg-gray-200"
                    id="firstName"
                    type="text"
                    placeholder="Jane"
                    name="firstName"
                    value={name}
                    onChange={(e) => handleInputChange(e, "name")}
                    onBlur={() => handleBlur("name")}
                  />
                  <p id="firstNameError" className="text-red-500 text-xs italic"></p>
                </div>
                <div className="w-full">
                  <label className="block uppercase tracking-wide text-md font-bold pb-2" htmlFor="email">
                    E-mail
                  </label>
                  <input
                    className="block w-full text-gray-500 border border-gray-500 rounded py-3 px-3 leading-tight focus:bg-gray-200"
                    id="email"
                    placeholder="user@gmail.com"
                    type="email"
                    value={email}
                    onChange={handleInputChange}
                    onBlur={handleEmailBlur}
                  />
                  <p id="emailError" className="text-red-500 text-xs italic"></p>
                </div>
              </div>
              <div className="flex justify-start">
                <button
                  className="my-4 py-4 px-16 text-xl font-bold text-white rounded-xl bg-emerald-500 hover:bg-emerald-600 ease-in-out duration-300"
                  type="submit"
                >
                  Submit
                </button>
              </div>
              <p className="text-red-500 text-md font-semibold italic mb-4">{errorMessage}</p>
            </form>
          </div>
        </div>
        <img className="xl:w-1/2 object-contain" src="/images/5-must-have-titlepage.jpg" alt="Free PDF download title page" />
      </div>
    </>
  );
}
