import { motion } from "framer-motion";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

export default function About() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Zach Gibbs Web Development | About</title>
      </Helmet>
      <div className="overflow-x-hidden">
        <div className="mx-10 mt-6 mb-24 lg:mx-32">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className="text-4xl lg:text-6xl font-bold text-left underline underline-offset-8 decoration-5 decoration-emerald-500 mb-24"
          >
            About
          </motion.h3>
          <motion.section
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className="grid grid-cols-1 gap-y-5 items-start"
          >
            <p className="col-span-2 text-left min-[1150px]:leading-7 min-[1150px]:text-lg md:text-md md:leading-6 xl:text-xl xl:leading-9">
              Hello! I&apos;m Zach Gibbs, a dedicated Web Developer specializing in building websites that not only look great but also effectively
              market your business. With a Bachelor&apos;s degree from TTU in Interdisciplinary Studies, focusing on Psychology and Literature, and a
              solid foundation in Full Stack Web Development from Vanderbilt University, I bring a unique understanding of user behavior and content
              writing to my web development projects.
              <br></br>
              <br></br>I continuously study the StoryBrand Framework to enhance my marketing strategies, ensuring that your website clearly
              communicates your value and converts visitors into customers. I have hands-on experience developing websites for small businesses,
              participating in hackathons, and advancing my skills through platforms like Udemy and LinkedIn Learning.
              <br></br>
              <br></br>
              My goal is to provide high-quality, efficient web solutions tailored to your business needs.
            </p>
            <figure className="lg:col-span-4">
              <img className="object-cover" src="/images/aboutCollage2-compressed.png" alt="collage-rock-climbing-hiking-Central-Park" />
            </figure>
          </motion.section>
        </div>
      </div>
    </>
  );
}
