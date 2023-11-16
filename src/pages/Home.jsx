import Typed from "typed.js";
import React from "react";
import { motion } from "framer-motion";
import CtaBtn from "../components/CtaBtn";
import AboutMe from "../components/AboutMe";

export default function Home() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Zach Gibbs"],
      typeSpeed: 70,
      backSpeed: 70,
      smartBackspace: true,
      startDelay: 700,
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
      <section className="grid lg:grid-cols-2 mt-16 md:mt-10 mx-5 lg:mx-10 content-center justify-items-center">
        <figure className="flex justify-center w-3/4 sm:w-1/2 md:w-1/3 lg:w-3/4 mb-5 lg:mb-0">
          <img className="rounded-full" src="/images/zach-headshot.jpg" alt="Zach's headshot" />
        </figure>
        <div className="grid content-center">
          <h1 className="text-4xl font-bold">
            <span ref={el} />
          </h1>
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", duration: 1, delay: 1.5 }}>
            <h2 className="mt-4 text-2xl font-semibold">Full Stack Developer</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", duration: 1, delay: 2 }}>
            <p className="text md:mx-36 lg:mx-0 mt-8">
              Web developer from Murfreesboro, TN with a passion for solving problems with code and creating beautiful, functional websites.
            </p>
          </motion.div>
          <motion.div
            className="mt-8 flex justify-center"
            animate={{
              scale: [0, 1.25, 1],
            }}
            transition={{ ease: "easeOut", duration: 1, delay: 2.5 }}
          >
            <CtaBtn />
          </motion.div>
        </div>
      </section>
      <section>
        <AboutMe />
      </section>
    </>
  );
}
