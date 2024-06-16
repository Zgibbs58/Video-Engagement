import React from 'react';
import CtaBtn from './CtaBtn';

const StepsSection = () => {
  return (
    <div className="relative flex flex-col justify-center items-center text-center gap-24 px-8 lg:px-32 my-12 py-20 lg:max-h-screen overflow-hidden">
      {/* <div className="absolute inset-0 bg-cover bg-right-left" style={{ backgroundImage: "url('/images/stepsSection.jpg')" }}></div>
      <div className="absolute inset-0 bg-black opacity-20"></div> */}
      <h2 className="relative text-3xl lg:text-5xl font-bold">How It Works</h2>
      <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 text-[#6b7280]">
        <div className="flex flex-col items-center shadow-lg p-6 rounded-lg bg-gray-100 border-2 border-emerald-500 dark:border-none">
          <div className="text-4xl font-bold text-emerald-500 mb-4">1</div>
          <h3 className="text-2xl font-semibold mb-2">Get a Free Quote</h3>
          <p className="text-lg">Fill out a simple online form to receive a free quote for your project.</p>
        </div>
        <div className="flex flex-col items-center bg-gray-100 shadow-lg p-6 rounded-lg border-2 border-emerald-500 dark:border-none">
          <div className="text-4xl font-bold text-emerald-500 mb-4">2</div>
          <h3 className="text-2xl font-semibold mb-2">Design Consultation</h3>
          <p className="text-lg">Schedule a consultation to discuss your vision, product/service, and website requirements.</p>
        </div>
        <div className="flex flex-col items-center bg-gray-100 shadow-lg p-6 rounded-lg border-2 border-emerald-500 dark:border-none">
          <div className="text-4xl font-bold text-emerald-500 mb-4">3</div>
          <h3 className="text-2xl font-semibold mb-2">Website Development and Review</h3>
          <p className="text-lg">I develop your website, and you review the final product before it goes live.</p>
        </div>
        <div className="flex flex-col items-center bg-gray-100 shadow-lg p-6 rounded-lg border-2 border-emerald-500 dark:border-none">
          <div className="text-4xl font-bold text-emerald-500 mb-4">4</div>
          <h3 className="text-2xl font-semibold mb-2">Ongoing Support</h3>
          <p className="text-lg">Receive continuous support and maintenance for your site.</p>
        </div>
      </div>
      <div className='relative'>
        <CtaBtn text='Get Started Today'/>
      </div>
    </div>
  );
};


export default StepsSection;
