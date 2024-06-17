// import Typed from "typed.js";
import { useEffect } from "react";
import CtaBtn from "../components/CtaBtn";
import FeaturedProject from "../components/FeaturedProject";
import Testimonials from "../components/testimonials";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import StepsSection from "../components/StepsSection";
import ProblemSection from "../components/ProblemSection";
import ValueSection from "../components/ValueSection";

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
          <h3 className="text-3xl lg:text-5xl font-bold">Why Choose Zach Gibbs Web Development?</h3>
          <div className="flex flex-col xl:flex-row items-center justify-between gap-16">
            <img className="w-full xl:w-1/3 rounded-xl" src="/images/zach-headshot-compressed.jpg" alt="Zach Gibbs" />
            <div className="flex flex-col w-full xl:w-2/3 text-left gap-6 items-start">
              <p className="text-2xl lg:text-3xl font-bold">Boosting Business with Professional Websites</p>
              <p className="text-lg">
                Creating a website can be complicated and time-consuming. My job is to handle all the details so you can focus on your business.
                I&apos;ve helped businesses improve their online presence with websites that look great and are easy for customers to use. Click the
                button below to start getting more leads and valuable customers.
              </p>
              <ul className="ml-5 text-lg">
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
        </section>
        <StepsSection />
        <div className="flex flex-col justify-center text-left gap-16 my-48 lg:my-64 px-8 lg:px-32 items-start">
          <h3 className="text-3xl lg:text-5xl font-bold">Get a Website That Works for You</h3>
          <p className="text-lg lg:text-xl">
            At Zach Gibbs Web Development, I know you want to be a professional business that makes it easy for your customers to buy your products or
            services. To achieve this, you need a website that works for you. The problem is that creating a great website takes a lot of time, which
            can leave you feeling overwhelmed. I believe every business should have the opportunity to reach their customers and clearly show them how
            they can help.
          </p>
          <p className="text-lg lg:text-xl">
            I understand how confusing and time-consuming it can be to create a website that fully conveys your value. That&apos;s why I have honed my
            skills in web design, web development, and marketing to build websites that effectively grow your business.
          </p>
          <h4 className="text-2xl lg:text-3xl font-bold">Here’s how I do it:</h4>
          <ol className="ml-5 list-decimal text-lg lg:text-xl">
            <li>Click the free quote button and fill out the form.</li>
            <li>I will evaluate your needs and schedule a consultation.</li>
            <li>We will discuss your business and your website requirements. Then, I&apos;ll start working on your website immediately.</li>
          </ol>
          <p className="text-lg lg:text-xl">So, get a free quote today and let’s create a website that works for you.</p>
          <CtaBtn text={"Get Your Free Quote"} />
        </div>

        <section className="mb-48 lg:mb-64 px-8 lg:px-32">
          <p className="text-3xl lg:text-5xl font-bold text-left">Recent Project</p>
          <FeaturedProject
            name={projectData[0].name}
            description={projectData[0].description}
            fullDescription={projectData[0].fullDescription}
            image={projectData[0].image}
            key={1}
          />
        </section>
      </section>
    </>
  );
}
