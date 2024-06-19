import React from 'react';
import CtaBtn from "./CtaBtn";
import { motion } from 'framer-motion';

const Explanatory = () => {
    return (
        <section className="flex flex-col xl:flex-row gap-16">
          <div className="relative flex flex-col justify-center text-left gap-6 items-start xl:w-1/2">
            <motion.h3 initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }} className="text-3xl lg:text-5xl font-bold">Get a Website That Works for You</motion.h3>
            <p className="text-lg lg:text-xl">
              At Zach Gibbs Web Development, I understand that you want a professional website that makes it easy for your customers to buy your
              products or services. However, creating a great website takes time and can be overwhelming. Every business should have the opportunity
              to reach their customers and clearly communicate their value. That&apos;s why I&apos;ve honed my skills in web design, development, and
              marketing to build websites that effectively grow your business.
            </p>
            <h4 className="text-2xl lg:text-3xl font-bold">Here’s how you do it:</h4>
            <ol className="ml-5 list-decimal text-lg lg:text-xl">
              <li>Click the free quote button and fill out the form.</li>
              <li>I will send you the quote for you to approve and schedule a consultation.</li>
              <li>We will discuss your business and your website requirements. Then, I&apos;ll start working on your website immediately.</li>
            </ol>
            <p className="text-lg lg:text-xl">So, get a free quote today and let’s create a website that works for you.</p>
            <CtaBtn text={"Get Your Free Quote"} />
          </div>
          <img className="xl:w-1/2 object-cover" src="/images/happyCustomer.jpg" alt="Happy customer enjoying website" />
        </section>
    );
    }

export default Explanatory;