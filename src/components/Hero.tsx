import React from 'react'
import { motion } from 'framer-motion'
import CtaBtn from './CtaBtn'

const Hero = () => {
  return (
    <section
        className="relative flex items-center justify-start bg-cover bg-[center_left_-22rem] small:bg-center py-40 md:py-52 max-h-screen"
        style={{ backgroundImage: "url('/images/goodReviewsOpt2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-left px-4 md:px-8 w-full xl:w-1/3 mx-8 lg:mx-32">
          <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", duration: 1, delay: 0 }}>
            <h1 className="text-4xl lg:text-5xl font-bold text-white">Websites That Grow Your Business</h1>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}>
            <p className="text-lg md:text-xl text-white mt-4">
              Most businesses lack the time to update or create websites. I build clear and optimized websites that make it easy for customers to hire you, saving you time and boosting your business.
            </p>
          </motion.div>
          <motion.div
            className="flex items-start mt-8"
            animate={{
              scale: [0, 1.15, 1],
            }}
            transition={{ ease: "easeOut", duration: 1, delay: 1 }}
          >
            <CtaBtn text={"Get Quote"}/>
          </motion.div>
        </div>
      </section>
    //   <section className="flex flex-col xl:flex-row mx-8 lg:mx-32 text-center justify-center overflow-x-hidden xl:overflow-x-visible md:h-auto mt-16 md:mt-32 md:mb-36 gap-16 lg:gap-24 2xl:gap-48">
    //     <div className="flex flex-col justify-center gap-10">
    //       <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", duration: 1, delay: 0 }}>
    //         <h1 className="text-3xl lg:text-5xl font-bold">Websites That Grow Your Business</h1>
    //       </motion.div>
    //       <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}>
    //         <p className="text-lg md:text-xl">
    //           Helping businesses create websites that attract customers by clearly communicating your value, allowing you more time to focus on what
    //           you do best.
    //         </p>
    //       </motion.div>
    //       <motion.div
    //         className="flex justify-center"
    //         animate={{
    //           scale: [0, 1.25, 1],
    //         }}
    //         transition={{ ease: "easeOut", duration: 1, delay: 1 }}
    //       >
    //         <CtaBtn />
    //       </motion.div>
    //     </div>
    //     <motion.figure
    //       initial={{ opacity: 0, y: 0 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ ease: "easeOut", duration: 1 }}
    //       className="hidden sm:flex justify-center mb-5 lg:mb-0 bg-emerald-500 rounded-full h-full xl:w-7/12"
    //     >
    //       <img className="" src="/images/goodReviews.png" alt="People sharing a website" />
    //     </motion.figure>
    //     <motion.figure
    //       initial={{ opacity: 0, y: 0 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ ease: "easeOut", duration: 1 }}
    //       className="flex sm:hidden justify-center mb-5 lg:mb-0 bg-emerald-500 rounded-full"
    //     >
    //       <img className="" src="/images/portfolioHeroSmall.png" alt="People sharing a website" />
    //     </motion.figure>
    //   </section>
  )
}

export default Hero