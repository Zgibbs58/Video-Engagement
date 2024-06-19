import React from 'react'
import CtaBtn from './CtaBtn'

const CtaSection = () => {
  return (
    <section className="relative bg-no-repeat bg-cover bg-[center_right_-10rem] lg:bg-center text-center px-6 md:px-16 xl:px-32 py-24 xl:py-48" style={{ backgroundImage: "url(/images/HappyTabletUser.jpg)" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex flex-col items-center gap-4 text-white">
          <h4 className="text-3xl xl:text-5xl font-semibold">Boost Your Business with a Great Website</h4>
          <p className='text-xl'>Let’s create a website that enhances your brand and engages your customers.</p>
          <div className="flex gap-6">
            <CtaBtn text='Get Started Today' />
          </div>
        </div>
      </section>
  )
}

export default CtaSection