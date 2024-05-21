import React from "react";

const Testimonial = ({ testimonial }) => (
  <div className="md:w-1/2 w-full text-xl">
    <div className="h-full rounded">
      <p className="leading-relaxed inline-block">
        <svg className="inline-block align-top mr-1" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16" fill="#10b981"><path d="M1.58155 3.29722L3.88269 0.996094L6.00401 3.11741L3.73705 5.38437C3.34211 5.77931 3 6.43105 3 7.00012V8.00014L7 8.00015V15.0002H0V7.00012C0 5.51964 0.605587 4.27319 1.58155 3.29722Z"/><path d="M10.5816 3.29722L12.8827 0.996094L15.004 3.11741L12.7371 5.38437C12.3421 5.77931 12 6.43105 12 7.00012V8.00014L16 8.00015V15.0002H9V7.00012C9 5.51964 9.60559 4.27319 10.5816 3.29722Z"/></svg>
        {testimonial.quote}
        <svg className="inline-block align-top ml-1" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16" fill="#10b981"><path d="M14.4184 12.699L12.1173 15.0002L9.99599 12.8788L12.2629 10.6119C12.6579 10.2169 13 9.5652 13 8.99613V7.99611L9 7.99609L9 0.996095L16 0.996095V8.99613C16 10.4766 15.3944 11.7231 14.4184 12.699Z"/><path d="M5.41845 12.699L3.11731 15.0002L0.99599 12.8788L3.26295 10.6119C3.65789 10.2169 4 9.5652 4 8.99612V7.99611L0 7.99609L6.11959e-07 0.996094L7 0.996094L7 8.99613C7 10.4766 6.39441 11.7231 5.41845 12.699Z"/></svg>
      </p>
      <div className="inline-flex items-center">
        <span className="flex-grow flex flex-col pl-4 pt-4">
          <span className="font-semibold">{testimonial.name}</span>
        </span>
      </div>
    </div>
  </div>
);

interface Testimonial {
  quote: string;
  name: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials = ({ testimonials }: TestimonialsProps) => (
    <div className="flex flex-wrap md:flex-nowrap gap-16 md:gap-32">
      {testimonials.map((testimonial: Testimonial, index: number) => (
        <Testimonial key={index} testimonial={testimonial} />
      ))}
    </div>
);

export default Testimonials;
