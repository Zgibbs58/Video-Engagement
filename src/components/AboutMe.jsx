import SecondaryButton from "./SecondaryButton";

export default function AboutMe() {
  return (
    <div className="mx-10 mt-24 mb-24 lg:mx-32">
      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-left">About</h3>
      <section className="grid grid-cols-1 lg:grid-cols-6 gap-y-5 lg:gap-2 items-start">
        <figure className="lg:col-span-3 grid grid-cols-6 gap-2">
          <img className="col-span-4 lg:col-span-3 lg:h-full object-cover" src="/images/AboutMe2.jpg" alt="" />
          <div className="col-span-2 lg:col-span-3 lg:h-full grid grid-rows-2 gap-2">
            <img className="h-full object-cover" src="/images/AboutMe1.jpg" alt="" />
            <img className="h-full object-cover" src="/images/AboutMe3.jpg" alt="" />
          </div>
        </figure>
        <div className="col-span-3 text-left">
          <p className="min-[1150px]:leading-7 min-[1150px]:text-lg md:text-md md:leading-6 xl:text-xl xl:leading-9">
            Hello! I&apos;m Zach, a Full Stack Web Developer with over nine years of honed problem-solving skills from a background in Inventory
            Control. A recent graduate of the Vanderbilt University Full Stack Web Development Bootcamp, my commitment to continuous learning extends
            to platforms like Udemy and LinkedIn Learning. Experienced in bug fixes and website development for small businesses, I recently competed
            in a 48-hour Hackathon and our team won first place. Beyond coding, I&apos;m an adventurer who finds joy in adapting to new challenges,
            making me an ideal fit for dynamic web development roles. Let&apos;s connect and explore the possibilities!
          </p>
          <button className="mt-8 mb-3">
            <SecondaryButton text={"Learn More"} />
          </button>
        </div>
      </section>
    </div>
  );
}
