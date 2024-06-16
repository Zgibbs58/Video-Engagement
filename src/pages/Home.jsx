// import Typed from "typed.js";
import { useEffect } from "react";
import { motion } from "framer-motion";
import CtaBtn from "../components/CtaBtn";
import FeaturedProject from "../components/FeaturedProject";
import Testimonials from "../components/testimonials";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import StepsSection from "../components/StepsSection";
import ProblemSection from "../components/ProblemSection";
import ValueSection from "../components/ValueSection";

import { projectData } from "../../utils/projectData";

export default function Home() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Zach Gibbs Web Development</title>
        <meta
          name="description"
          content="Web developer based in Murfreesboro, TN with a passion for solving problems through coding and crafting visually appealing, functional websites."
        />
      </Helmet>
      <Hero />
      <section className="overflow-x-hidden overflow-y-hidden">
        <ProblemSection />
        <ValueSection />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col justify-center text-left gap-16 my-48 lg:my-64 px-8 lg:px-32"
        >
          <h3 className="text-3xl lg:text-5xl font-bold">Why Choose Zach Gibbs Web Development?</h3>
          <div className="flex flex-col xl:flex-row items-center justify-between gap-16">
            <div className="flex flex-col w-full xl:w-2/3 text-left gap-6 items-start">
              <p className="text-2xl lg:text-3xl font-bold">Saving You and Your Customers Time</p>
              <p className="text-lg">
                I know creating a website can be complicated and time-consuming. My job is to handle all the details so you can focus on your
                business. I&apos;ve helped businesses improve their online presence with websites that look great and are easy for customers to use.
                Click the button below to start getting more leads and valuable customers.
              </p>
              <ul className="ml-5 list-disc text-lg">
                <li>
                  <span className="font-semibold underline">Personalized Service</span>: Tailored solutions for your unique business needs.
                </li>
                <li>
                  <span className="font-semibold underline">Hassle-Free Process</span>: Streamlined approach to save you time and stress.
                </li>
                <li>
                  <span className="font-semibold underline">Client Success</span>: A portfolio of satisfied clients who have seen real results.
                </li>
                <li>
                  <span className="font-semibold underline">Proven Expertise</span>: Years of experience in web development.
                </li>
              </ul>
              <CtaBtn text={"Get Your Website"} />
            </div>
            <img className="w-full xl:w-1/3 rounded-xl" src="/images/zach-headshot-compressed.jpg" alt="Zach Gibbs" />
          </div>
        </motion.div>
        <StepsSection />
        <motion.section
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="my-48 lg:my-64 px-8 lg:px-32"
        >
          <Testimonials
            testimonials={[
              {
                name: "Kameron Shepherd",
                title: "KandS HVAC",
                quote:
                  "Zach is extremely knowledgeable and very dedicated to his work. We gave him some freedom to express his design ideas, and he absolutely knocked it out of the park. Throughout this entire process, Zach has been very responsive, thorough, and explained everything very well. I highly recommend working with Zach; he is truly the best of the best in his field.",
              },
              {
                name: "Martin Mofield",
                title: "Mofield Brothers Construction",
                quote:
                  "Zach built a website that saves us time and money by answering client questions about what we do and providing a convenient way for customers to contact us.",
              },
              {
                name: "Evan Dixon",
                quote:
                  "Zach was excellent to work with. He was prompt to fix issues with my site and went above and beyond, giving me even more value than I asked for. I would definitely recommend his services.",
              },
            ]}
          />
        </motion.section>
        <motion.section
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-48 lg:mb-64 px-8 lg:px-32"
        >
          <p className="text-3xl lg:text-5xl font-bold text-left">Recent Project</p>
          <FeaturedProject
            name={projectData[0].name}
            description={projectData[0].description}
            fullDescription={projectData[0].fullDescription}
            image={projectData[0].image}
            key={1}
          />
        </motion.section>
      </section>
    </>
  );
}
