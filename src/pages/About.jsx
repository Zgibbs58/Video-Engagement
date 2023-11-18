import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <div className="mx-10 mt-6 mb-24 lg:mx-32">
        <motion.h3
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-4xl lg:text-5xl font-bold text-left underline underline-offset-8 decoration-4 decoration-emerald-500 mb-24"
        >
          About
        </motion.h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est maiores vitae delectus exercitationem recusandae soluta nesciunt harum
          dignissimos eligendi, repellat dolore at id eaque sit neque maxime architecto quod cumque?
        </p>
      </div>
    </>
  );
}
