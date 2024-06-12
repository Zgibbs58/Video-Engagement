// import Typed from "typed.js";
import { useEffect } from "react";
// import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import CtaBtn from "../components/CtaBtn";
import FeaturedProject from "../components/FeaturedProject";
import Testimonials from "../components/testimonials";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import StepsSection from "../components/StepsSection";

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
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col xl:flex-row justify-between text-left gap-y-12 gap-x-24 my-48 lg:my-64 px-8 lg:px-32"
        >
          {/* <img className="xl:w-1/2 rounded-xl" src="/images/badWebsite.jpg" alt="Frustrated Website Visitor" /> */}
          <div className="flex flex-col xl:w-1/2 items-start text-left gap-8">
            <h2 className="text-3xl xl:text-5xl font-bold">Don&apos;t Lose Customers to a Bad Website</h2>
            <p className="text-lg">
              The average website visitor spends less than a minute on a page. I can help make every second count by clearly communicating your value
              and convert visitors into customers.
            </p>
            <CtaBtn text={"Discover Solutions"} />
          </div>
          <ul className="flex flex-col gap-3">
            <li>❌ Slow loading times frustrate visitors and drive them away.</li>
            <li>❌ Confusing navigation leads potential customers competitors.</li>
            <li>❌ Outdated design makes your business look unprofessional.</li>
            <li>❌ Missing images and broken links reduce trust and credibility.</li>
            <li>❌ Not mobile-friendly means losing potential customers on smartphones and tablets.</li>
            <li>❌ Poor SEO means your site gets lost in search engine results.</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col justify-center items-center text-left gap-16 my-48 lg:my-64 px-8 lg:px-32"
        >
          <h3 className="text-3xl lg:text-5xl font-bold">Why Choose Zach Gibbs Web Development?</h3>
          <div className="flex flex-col xl:flex-row items-center justify-between gap-16">
            <div className="flex flex-col w-full lg:w-2/3 text-left gap-6 items-start">
              <p className="text-2xl lg:text-3xl font-bold">Saving You and Your Customers Time</p>
              <p className="text-lg">
                I know how confusing and time-consuming creating a website can be. My goal is to handle the complexities for you, so you can focus on
                your business. I’ve helped many businesses enhance their web presence with websites that look great and convert visitors into loyal
                customers.
              </p>
              <ul className="ml-5 text-lg">
                <li>✅ Personalized Service: Tailored solutions for your unique business needs.</li>
                <li>✅ Hassle-Free Process: Streamlined approach to save you time and stress.</li>
                <li>✅ Client Success: A portfolio of satisfied clients who have seen real results.</li>
                <li>✅ Proven Expertise: Years of experience in web development.</li>
              </ul>
              <CtaBtn text={"Get Your Website"} />
            </div>
            <img className="w-full lg:w-1/3 rounded-xl" src="/images/zach-headshot-compressed.jpg" alt="Zach Gibbs" />
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
