import { motion } from "framer-motion";
import { useEffect } from "react";
import Explanatory from "../components/Explanatory";
import TestimonialSection from "../components/TestimonialSection";
import MetaSeoTags from "../components/MetaSeoTags";

export default function About() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <MetaSeoTags
        title="About | Zach Gibbs Web Development"
        description="Learn more about Zach Gibbs, an experienced web developer based in Murfreesboro, Tennessee. I provide high-quality, efficient websites tailored to your business needs."
        keywords={[
          "business web developer",
          "custom websites",
          "custom web solutions",
          "experienced web developer",
          "web development",
          "web design",
          "web designer",
          "Murfreesboro",
          "Tennessee",
          "Nashville",
        ]}
        canonicalUrl={"https://zacharywgibbs.com/about"}
        ogTitle="About | Zach Gibbs Web Development"
        ogDescription="Learn more about Zach Gibbs, an experienced web developer based in Murfreesboro, Tennessee. I provide high-quality, efficient websites tailored to your business needs."
        ogImg={"https://zacharywgibbs.com/images/ogAboutImg.png"}
        slug={"/about"}
      />
      <div className="overflow-x-hidden">
        <div className="mx-10 mt-6 mb-24 lg:mx-32">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className="text-4xl lg:text-5xl font-bold text-left underline underline-offset-8 decoration-5 decoration-emerald-500 mb-24"
          >
            About
          </motion.h3>
          <motion.section
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className="flex flex-col xl:flex-row gap-24 items-center mb-48 lg:mb-64 "
          >
            <div className="flex flex-col gap-6 w-full xl:w-1/2 2xl:w-2/3">
              <h2 className="text-2xl lg:text-4xl font-bold">Your Web Development Partner</h2>
              <p>
                Hello! I&apos;m Zach Gibbs, a dedicated Web Developer specializing in building websites that look great and effectively market your
                business. I have a Bachelor&apos;s degree from TTU where I studied Psychology and Literature. With these studies and a solid
                foundation in Full Stack Web Development from Vanderbilt University, I bring a unique understanding of user behavior and content
                writing to my web development projects.
                <br></br>
                <br></br>I continuously study the StoryBrand Framework to enhance my marketing strategies, ensuring that your website clearly
                communicates your value and converts visitors into customers. I have hands-on experience developing websites for local businesses,
                participating in hackathons, and advancing my skills through platforms like Udemy and LinkedIn Learning. My goal is to provide
                high-quality, efficient websites tailored to your business needs.
              </p>
            </div>
            <figure className="w-full xl:w-1/2 2xl:w-1/3 rounded-xl">
              <img className="object-cover rounded-xl" src="/images/zach-headshot-compressed.jpg" alt="collage-rock-climbing-hiking-Central-Park" />
            </figure>
          </motion.section>
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
          <div className="my-48 lg:my-64 ">
            <Explanatory />
          </div>
        </div>
      </div>
    </>
  );
}
