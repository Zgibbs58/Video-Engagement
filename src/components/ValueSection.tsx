import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const values = [
  "Personalized Websites",
  "Professional Photography",
  "Ongoing Maintenance",
  "Website Marketing Strategy",
  "Web Development Expertise",
];

const descriptions = [
  "I take the time to sit with you and learn about your business, ensuring that you get a website you will be proud of.",
  "Missing professional shots? I provide high-quality photography services to enhance your website's visual appeal.",
  "Ensure your website continues to perform well and stays up-to-date with ongoing maintenance services.",
  "Utilize the StoryBrand Brandscript framework for effective website marketing that clearly communicates your value to customers.",
  "With my web development expertise, I create efficient websites that provide a seamless user experience.",
];

const ValueSection = () => {

    const [clicked, setClicked] = useState([true, false, false, false, false, false]);

  const handleToggle = (index) => {
    setClicked((prevState) => {
      const newState = prevState.map((item, idx) => (idx === index ? !item : false));
      return newState;
    });
  };

    return (
        <section className="overflow-x-hidden overflow-y-hidden">
            <div className="relative flex flex-col lg:flex-row justify-center lg:justify-start items-center py-12 px-8 lg:px-32 min-h-[800px] text-white">
                <div className="absolute inset-0 bg-cover bg-[center_left_-40rem] md:bg-center" style={{ backgroundImage: "url('/images/valueSection.jpg')" }}></div>
                <div className="absolute inset-0 bg-black opacity-50 lg:bg-gradient-to-r lg:from-slate-900 lg:to-transparent"></div>
                <div className="relative flex flex-col w-full xl:w-1/2">
                <p className="text-3xl md:text-5xl font-bold mb-12">
                    Focus on Your Customer,<br></br>I’ll Handle the Web
                </p>
                {values.map((value, index) => (
                    <div key={index} className="odd:border-y last:border-b first:border-t p-4 transition duration-300">
                    <div className="flex justify-between items-center cursor-pointer" onClick={() => handleToggle(index)}>
                        <p className="text-lg">
                        <span className="text-2xl">{value}</span>
                        </p>
                        <span className="text-2xl">{clicked[index] ? "-" : "+"}</span>
                    </div>
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: clicked[index] ? "auto" : 0, opacity: clicked[index] ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`mt-2 overflow-hidden ${clicked[index] ? "block" : "hidden"}`}
                    >
                        <p>{descriptions[index]}</p>
                    </motion.div>
                    </div>
                ))}
                </div>
            </div>
            </section>
    )
}

export default ValueSection;