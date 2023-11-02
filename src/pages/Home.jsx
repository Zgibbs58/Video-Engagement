import Typed from "typed.js";
import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Zach Gibbs"],
      typeSpeed: 70,
      smartBackspace: true,
      startDelay: 700,
      // cursorChar: "|",
      showCursor: false,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <section className="md:grid-cols-2 my-5">
      <div>
        <h1 className="text-3xl font-bold">
          <span ref={el} />
        </h1>
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", duration: 1, delay: 1.5 }}>
          <h2 className="my-3 text-xl font-semibold">Full Stack Developer</h2>
        </motion.div>
        <div className="wrapper">
          <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", duration: 1, delay: 2 }}>
            <p className="text mt-7">
              Web developer from Murfreesboro, TN with a passion for solving problems with code and creating beautiful, functional websites.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
