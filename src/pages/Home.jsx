// import Typed from "typed.js";
import { useEffect } from "react";
// import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import CtaBtn from "../components/CtaBtn";
import AboutMe from "../components/AboutMe";
import FeaturedProject from "../components/FeaturedProject";
import Testimonials from "../components/testimonials";
import { Helmet } from "react-helmet-async";

import { projectData } from "../../utils/projectData";

export default function Home() {
  // const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     // Calculate opacity based on scroll position
  //     const opacity = 1 - (window.scrollY / window.innerHeight) * 2;
  //     setScrollOpacity(opacity < 0 ? 0 : opacity);
  //   };

  // Attach the scroll event listener
  // window.addEventListener("scroll", handleScroll);

  // Clean up the event listener on component unmount
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // Create reference to store the DOM element containing the animation
  // const el = useRef(null);

  // useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: ["Websites That Work For You"],
  //     typeSpeed: 70,
  //     backSpeed: 70,
  //     smartBackspace: true,
  //     startDelay: 550,
  //     backDelay: 5000,
  //     cursorChar: "",
  //     loop: false,
  //     showCursor: true,
  //   });

  //   return () => {
  //     // Destroy Typed instance during cleanup to stop animation
  //     typed.destroy();
  //   };
  // }, []);

  return (
    <>
      <Helmet>
        <title>Zach Gibbs | Web Development</title>
        <meta
          name="description"
          content="Web developer based in Murfreesboro, TN with a passion for solving problems through coding and crafting visually appealing, functional websites."
        />
      </Helmet>
      <section className="flex flex-col xl:flex-row mx-8 lg:mx-32 text-center content-center justify-items-center overflow-x-hidden md:h-auto mt-16 md:mt-36 md:mb-36 gap-12 lg:gap-24 2xl:gap-48">
        <div className="flex flex-col justify-center gap-6">
          <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", duration: 1, delay: 0 }}>
            <h1 className="mt-8 text-4xl lg:text-6xl font-semibold">Websites That Grow Your Business</h1>
          </motion.div>
          {/* <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", duration: 1, delay: 1.25 }}>
            <h2 className="mt-4 text-4xl lg:text-5xl font-semibold">Zach Gibbs</h2>
          </motion.div> */}
          <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}>
            <p className="text-lg md:text-xl">
              Helping businesses create websites that convert visitors into customers by clearly communicating your value, allowing you more time to
              focus on what you do best.
            </p>
          </motion.div>
          <motion.div
            className="flex justify-center"
            animate={{
              scale: [0, 1.25, 1],
            }}
            transition={{ ease: "easeOut", duration: 1, delay: 1 }}
          >
            <CtaBtn />
          </motion.div>
        </div>
        <motion.figure
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="hidden sm:flex justify-center mb-5 lg:mb-0 bg-emerald-500 rounded-full h-full xl:w-7/12"
        >
          <img className="" src="/images/portfolioHero.png" alt="People sharing a website" />
        </motion.figure>
        <motion.figure
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="flex sm:hidden justify-center mb-5 lg:mb-0 bg-emerald-500 rounded-full"
        >
          <img className="" src="/images/portfolioHeroSmall.png" alt="People sharing a website" />
        </motion.figure>
        {/* want to use scroll down but causes issues with h-screen */}
        {/* <motion.div
          animate={{
            scale: [0, 1.25, 1],
          }}
          transition={{ ease: "easeOut", duration: 1, delay: 2.25 }}
          style={{ opacity: scrollOpacity }}
          className="lg:hidden"
        >
          <p>Scroll Down</p>
          <p className="text-2xl">&#8595;</p>
        </motion.div> */}
      </section>
      <section className="overflow-x-hidden">
        <div className="mx-8 lg:mx-32">
          <motion.h3
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.4 }}
            className="text-4xl lg:text-6xl font-bold text-left underline underline-offset-8 decoration-5 decoration-emerald-500 mt-32 md:mt-40 mb-12 md:mb-24"
          >
            Featured Project
          </motion.h3>
          <motion.section
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <FeaturedProject
              id={1}
              name={projectData[0].name}
              description={projectData[0].description}
              fullDescription={projectData[0].fullDescription}
              image={projectData[0].image}
              projectLink={projectData[0].projectLink}
              key={1}
            />
          </motion.section>
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-4xl lg:text-6xl font-bold text-left underline underline-offset-8 decoration-5 decoration-emerald-500 mt-32 md:mt-40 mb-12 md:mb-24"
          >
            Testimonials
          </motion.h3>
          <motion.section
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className=""
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
          <motion.h3
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.4 }}
            className="text-4xl lg:text-6xl font-bold text-left underline underline-offset-8 decoration-5 decoration-emerald-500 mt-32 md:mt-40 mb-12 md:mb-24"
          >
            About
          </motion.h3>
          <motion.section
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="mb-24"
          >
            <AboutMe />
          </motion.section>
        </div>
      </section>
    </>
  );
}
