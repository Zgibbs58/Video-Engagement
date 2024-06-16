// import { useState } from "react";
import { motion } from "framer-motion";
import CtaBtn from "./CtaBtn";

const ProblemSection = () => {
  // const [clicked, setClicked] = useState([true, false, false, false, false, false]);

  // const handleToggle = (index) => {
  //   setClicked((prevState) => {
  //     const newState = [...prevState];
  //     newState[index] = !newState[index];
  //     return newState;
  //   });
  // };

  // const problems = [
  //   "Slow loading times that frustrate visitors",
  //   "Not mobile-friendly means losing potential customers on smartphones.",
  //   "Confusing navigation that leads to quick exits",
  //   "Outdated design that makes your business look unprofessional",
  //   "Missing images and broken links that hurt your credibility",
  //   "Poor SEO means you get lost in the search results.",
  // ];

  // const solutions = [
  //   "Fast loading speeds keeping visitors engaged",
  //   "Fully responsive design that looks great on all devices",
  //   "Intuitive navigation that keeps visitors on your site longer",
  //   "Modern, professional design that builds trust with visitors",
  //   "Thorough site audits to catch and fix issues before they hurt your business",
  //   "SEO best practices to make your site easier to find",
  // ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col items-center text-center gap-y-20 md:gap-y-32 gap-x-24 my-48 lg:my-64 px-8 lg:px-32"
    >
      {/* <div className="flex flex-col items-start text-left gap-8 w-full xl:w-1/2"> */}
      <h2 className="text-3xl xl:text-5xl font-bold">Don&apos;t Lose Customers to a Bad Website</h2>
      <div className="grid md:grid-cols-2 2xl:grid-cols-4 gap-16">
        <div className="flex flex-col items-center gap-6">
          <svg className="w-24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <g fill="#11b27d" id="Time">
              <path d="M15.53284,14.97a6.99536,6.99536,0,0,1-4.31934,2.01416.4462.4462,0,0,1-.04492.002.5.5,0,0,1-.043-.998,6.00474,6.00474,0,1,0-6.37988-4.58838.50014.50014,0,1,1-.97266.2334A6.93669,6.93669,0,0,1,5.62561,5.06281,7.00547,7.00547,0,1,1,15.53284,14.97Zm-6.36426.04639h-4.25a.5.5,0,0,0,0,1h4.25a.5.5,0,1,0,0-1Zm-.92383-1.5a.49971.49971,0,0,0-.5-.5H2.91858a.5.5,0,1,0,0,1H7.74475A.49971.49971,0,0,0,8.24475,13.51642Zm2.835-3.5V6.27765a.5.5,0,1,0-1,0V9.12091L8.71448,8.27863a.5003.5003,0,0,0-.52539.85156l2.12793,1.312a.50162.50162,0,0,0,.50683.01074A.49969.49969,0,0,0,11.07971,10.01642Z" />
            </g>
          </svg>
          <p className="text-lg">
            With visitors spending less than a minute per page, I ensure every second counts, clearly conveying your value and converting visitors
            into customers.
          </p>
        </div>
        <div className="flex flex-col items-center gap-6">
          <svg className="w-24" version="1.1" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
            <title />
            <desc />
            <g stroke="none" strokeWidth="1">
              <g fill="#11b27d" fillRule="nonzero" id="mobile_phone" transform="translate(-4.000000, -4.000000)">
                <path
                  d="M33,6.25 C34.5187831,6.25 35.75,7.48121694 35.75,9 L35.75,9 L35.75,41 C35.75,42.5187831 34.5187831,43.75 33,43.75 L33,43.75 L17,43.75 C15.4812169,43.75 14.25,42.5187831 14.25,41 L14.25,41 L14.25,9 C14.25,7.48121694 15.4812169,6.25 17,6.25 L17,6.25 Z M34.25,37.25 L15.75,37.25 L15.75,41 C15.75,41.6472087 16.2418747,42.1795339 16.8721948,42.2435464 L17,42.25 L33,42.25 C33.6903559,42.25 34.25,41.6903559 34.25,41 L34.25,41 L34.25,37.25 Z M27,38.75 C27.4142136,38.75 27.75,39.0857864 27.75,39.5 C27.75,39.8796958 27.4678461,40.193491 27.1017706,40.2431534 L27,40.25 L23,40.25 C22.5857864,40.25 22.25,39.9142136 22.25,39.5 C22.25,39.1203042 22.5321539,38.806509 22.8982294,38.7568466 L23,38.75 L27,38.75 Z M34.25,12.25 L15.75,12.25 L15.75,35.75 L34.25,35.75 L34.25,12.25 Z M33,7.75 L17,7.75 C16.3096441,7.75 15.75,8.30964406 15.75,9 L15.75,9 L15.75,10.75 L34.25,10.75 L34.25,9 C34.25,8.30964406 33.6903559,7.75 33,7.75 L33,7.75 Z"
                  id="phone"
                />
              </g>
            </g>
          </svg>
          <p className="text-lg">
            Over 50% of web traffic is from mobile devices. Without a mobile-friendly site, you lose customers. My responsive designs work on mobile,
            tablet, and desktop.
          </p>
        </div>
        <div className="flex flex-col items-center gap-6">
          {/* <div className="bg-emerald-500 rounded-full"> */}
          <svg className="w-24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <g id="Attention" fill="#11b27d">
              <path d="M16.37988,12.40079,12.165,5.099A2.5116,2.5116,0,0,0,9.87891,3.852l-.01368.001A2.47075,2.47075,0,0,0,7.85645,5.06242c-.00782.0122-.01465.02441-.02149.03662L3.62012,12.40079a2.49939,2.49939,0,0,0,2.16406,3.75h8.43164a2.47366,2.47366,0,0,0,2.165-1.25048,2.47092,2.47092,0,0,0-.001-2.49952Zm-.86523,1.99952a1.48425,1.48425,0,0,1-1.29883.75048H5.78418a1.49707,1.49707,0,0,1-1.29883-2.25L8.7002,5.599a1.5018,1.5018,0,0,1,2.5996,0l4.21485,7.30175a1.48532,1.48532,0,0,1,0,1.49952Zm-5.165-1.69043a.48212.48212,0,0,1,0,.6997.35157.35157,0,0,1-.16016.11035A.434.434,0,0,1,10,13.56a.49549.49549,0,0,1-.35059-.85009.49218.49218,0,0,1,.54-.11036A.35167.35167,0,0,1,10.34961,12.70988ZM10.5,8.457v2.96338a.5.5,0,0,1-1,0V8.457a.5.5,0,1,1,1,0Z" />
            </g>
          </svg>
          <p className="text-lg">
            Outdated designs and broken links damage credibility. I deliver modern designs and thorough audits for a professional look.
          </p>
        </div>
        <div className="flex flex-col items-center gap-6">
          <svg className="w-24" version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <g fill="#11b27d">
              <path d="M19.8,1C13.7,1,8.7,6,8.7,12.2c0,2.7,1,5.2,2.6,7.2l-1.8,1.8c-0.9-0.3-2-0.2-2.7,0.5l-5.1,5.1c-1,1-1,2.6,0,3.6   C2.2,30.7,2.9,31,3.5,31s1.3-0.3,1.8-0.7l5.1-5.1c0.5-0.5,0.7-1.1,0.7-1.8c0-0.3-0.1-0.6-0.2-0.9l1.8-1.8c1.9,1.6,4.4,2.6,7.1,2.6   c6.2,0,11.2-5,11.2-11.2C31,6,26,1,19.8,1z M8.9,23.8l-5.1,5.1C3.8,29,3.6,29,3.5,29s-0.2,0-0.4-0.2c-0.2-0.2-0.2-0.5,0-0.7   l5.1-5.1c0.1-0.1,0.3-0.1,0.4-0.1s0.2,0,0.4,0.2c0.1,0.1,0.1,0.3,0.1,0.4S9.1,23.7,8.9,23.8z M19.8,21.3c-5.1,0-9.2-4.1-9.2-9.2   c0-5.1,4.1-9.2,9.2-9.2S29,7.1,29,12.2C29,17.2,24.9,21.3,19.8,21.3z" />
              <path d="M19.8,5.1c-1.9,0-3.7,0.7-5,2.1c-1.3,1.3-2.1,3.1-2.1,5c0,0.6,0.4,1,1,1s1-0.4,1-1c0-1.4,0.5-2.6,1.5-3.6   c1-1,2.2-1.5,3.6-1.5c0.6,0,1-0.4,1-1C20.8,5.5,20.4,5.1,19.8,5.1z" />
            </g>
          </svg>
          <p className="text-lg">Poor search rankings mean fewer customers find you. I use proven strategies to boost your online visibility.</p>
        </div>
      </div>
      <CtaBtn text={"Get Started"} />
      {/* </div> */}
      {/* <div className="flex flex-col w-full xl:w-1/2">
        <p className="text-xl xl:text-3xl font-bold mb-4">Click To Discover Solutions</p>
        {problems.map((problem, index) => (
          <div key={index} className="odd:border-y last:border-b first:border-t p-4 transition duration-300 hover:bg-gray-700">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => handleToggle(index)}>
              <p className="text-lg">
                <span className="">
                  <span className="text-red-400">&#x2715;</span> {problem}
                </span>
              </p>
              <span className="text-2xl">{clicked[index] ? "-" : "+"}</span>
            </div>
            {clicked[index] && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-2 overflow-hidden"
              >
                <p className="">
                  <span className="text-green-400">&#x2714;</span> {solutions[index]}
                </p>
              </motion.div>
            )}
          </div>
        ))}
      </div> */}
    </motion.div>
  );
};

export default ProblemSection;
