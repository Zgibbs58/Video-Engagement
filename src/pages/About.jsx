import { motion } from "framer-motion";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="overflow-x-hidden">
      <div className="mx-10 mt-6 mb-24 lg:mx-32">
        <motion.h3
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="text-3xl lg:text-5xl font-bold text-left underline underline-offset-8 decoration-5 decoration-emerald-500 mb-24"
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
            Hello! I&apos;m Zach Gibbs, a Full Stack Web Developer with a unique background in Inventory Control, where I honed my problem-solving
            skills over nine years. During this time, I discovered my passion for leveraging technology to resolve challenges within the company. My
            daily interactions with the Warehouse Management System and Oracle database equipped me with a deep understanding of how these
            technologies intertwine. I became adept at identifying and troubleshooting anomalies in our inventory, fostering a keen interest in
            utilizing technology to streamline processes.
            <br />
            <br />
            Two years ago, I embarked on a journey into Web Development, exploring diverse online resources. My learning includes crafting emails,
            building websites, developing CLIs, databases, and full-stack web applications. Recently, I graduated from the Vanderbilt University Full
            Stack Web Development Bootcamp, and my commitment to growth extends to platforms like Udemy, LinkedIn Learning, and various edX programs.
            <br />
            <br />
            In my spare time, I&apos;ve implemented bug fixes and constructed websites for small businesses. I thrive on challenges, and have recently
            participated in a 48-hour Hackathon, where my team and I won first place. Beyond coding, I&apos;m an adventurer at heart. Whether I&apos;m
            cruising on my electric skateboard, climbing rocks, hiking, backpacking, kayaking, fishing, or playing frisbee golf, the joy is amplified
            when shared with my wife, dogs, and friends.
            <br />
            <br />
            Currently on the lookout for a full-time Web Developer position, I&apos;m eager to connect with fellow developers, adventure enthusiasts,
            or anyone in need of a developer with a knack for problem-solving and a passion for innovative solutions. I look forward to hearing from
            you!
          </p>
          <figure className="lg:col-span-4">
            <img className="object-cover" src="/images/aboutCollage2.png" alt="" />
          </figure>
        </motion.section>
      </div>
    </div>
  );
}
