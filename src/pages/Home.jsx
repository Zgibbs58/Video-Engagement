// import Typed from "typed.js";
import { useEffect } from "react";
import { motion } from "framer-motion";
import CtaBtn from "../components/CtaBtn";
import FeaturedProject from "../components/FeaturedProject";
import TestimonialSection from "../components/TestimonialSection";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import StepsSection from "../components/StepsSection";
import ProblemSection from "../components/ProblemSection";
import ValueSection from "../components/ValueSection";
import Explanatory from "../components/Explanatory";
import CtaSection from "../components/CtaSection";
import LeadGenerator from "../components/LeadGenerator";

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
          content="Web developer based in Murfreesboro, TN that provides high-quality, efficient websites tailored to your business needs."
        />
      </Helmet>
      <Hero />
      <section className="overflow-x-hidden overflow-y-hidden">
        <ProblemSection />
        <ValueSection />
        <div className="flex flex-col justify-center text-left gap-16 my-48 lg:my-64 px-8 lg:px-32">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-3xl lg:text-5xl font-bold"
          >
            Why Choose Zach Gibbs Web Development?
          </motion.h3>
          <div className="flex flex-col xl:flex-row items-center justify-between gap-16">
            <img className="w-full xl:w-1/3 rounded-xl" src="/images/zach-headshot-compressed.jpg" alt="Zach Gibbs" />
            <div className="flex flex-col w-full xl:w-2/3 text-left gap-6 items-start">
              <p className="text-2xl lg:text-3xl font-bold">Websites that Streamline Your Business</p>
              <p className="text-lg">
                Creating a website can be complicated and time-consuming. My job is to handle all the details so you can focus on your business.
                I&apos;ve helped businesses improve their online presence with websites that look great and are easy for customers to use. Click the
                button below to start getting more leads and valuable customers.
              </p>
              <ul className="flex flex-col text-lg gap-2">
                <li>
                  <span className="font-semibold underline underline-offset-2">Personalized Service</span>: Tailored solutions for your unique
                  business needs.
                </li>
                <li>
                  <span className="font-semibold underline underline-offset-2">Hassle-Free Process</span>: Streamlined approach to save you time and
                  stress.
                </li>
                <li>
                  <span className="font-semibold underline underline-offset-2">Client Success</span>: A portfolio of satisfied clients who have seen
                  real results.
                </li>
              </ul>
              <CtaBtn text={"Get Your Website"} />
            </div>
          </div>
        </div>
        <section className="my-48 lg:my-64 px-8 lg:px-32">
          <TestimonialSection
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
        </section>
        <CtaSection />
        <StepsSection />
        <section className="my-48 lg:my-64 px-8 lg:px-32">
          <Explanatory />
        </section>
        <section className="my-48 lg:my-64 px-8 lg:px-32">
          <p className="text-3xl lg:text-5xl font-bold text-left mb-12">Recent Project</p>
          <FeaturedProject
            name={projectData[0].name}
            description={projectData[0].description}
            fullDescription={projectData[0].fullDescription}
            image={projectData[0].image}
            key={1}
          />
        </section>
        <LeadGenerator />
      </section>
    </>
  );
}
