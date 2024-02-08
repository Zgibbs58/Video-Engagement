import Typed from "typed.js";
import { useEffect, useRef } from "react";
// import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import CtaBtn from "../components/CtaBtn";
import AboutMe from "../components/AboutMe";
import FeaturedProject from "../components/FeaturedProject";
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
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Zach Gibbs"],
      typeSpeed: 70,
      backSpeed: 70,
      smartBackspace: true,
      startDelay: 300,
      backDelay: 5000,
      cursorChar: "|",
      loop: true,
      showCursor: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Zach Gibbs | Full Stack Developer</title>
        <meta
          name="description"
          content="Web developer based in Murfreesboro, TN with a passion for solving problems through coding and crafting visually appealing, functional websites."
        />
      </Helmet>
      <section className="grid lg:grid-cols-2 mx-5 lg:mx-10 text-center content-center justify-items-center overflow-x-hidden h-screen md:h-auto md:mt-36 md:mb-36 short:h-auto short:mt-10">
        <motion.figure
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="flex justify-center w-3/4 sm:w-1/2 md:w-1/3 lg:w-3/4 mb-5 lg:mb-0"
        >
          <img className="rounded-full" src="/images/zach-headshot-small.jpg" alt="Zach's headshot" />
        </motion.figure>
        <div className="grid content-end">
          <h1 className="text-4xl font-bold">
            <span ref={el} />
          </h1>
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", duration: 1, delay: 1.25 }}>
            <h2 className="mt-4 text-2xl font-semibold">Full Stack Developer</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", duration: 1, delay: 1.5 }}>
            <p className="text md:mx-36 lg:mx-0 mt-8">
              Web developer based in Murfreesboro, TN with a passion for solving problems through coding and crafting visually appealing, functional
              websites.
            </p>
          </motion.div>
          <motion.div
            className="my-8 flex justify-center"
            animate={{
              scale: [0, 1.25, 1],
            }}
            transition={{ ease: "easeOut", duration: 1, delay: 2 }}
          >
            <CtaBtn />
          </motion.div>
        </div>
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
        <motion.h3
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-4xl lg:text-6xl font-bold text-left underline underline-offset-8 decoration-5 decoration-emerald-500 my-24 mx-10 lg:mx-32"
        >
          Featured Project
        </motion.h3>
        <motion.section
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-10 lg:mx-32"
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
      </section>
      <motion.section
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="overflow-x-hidden"
      >
        <AboutMe />
      </motion.section>
    </>
  );
}
