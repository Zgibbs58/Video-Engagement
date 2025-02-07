import MobilebuttonSecondary from "./MobileButtonSecondary";

export default function AboutMe() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-6 gap-y-8 lg:gap-2 items-center">
      <div className="col-span-4 text-left">
        <p className="min-[1150px]:leading-7 min-[1150px]:text-lg md:text-md md:leading-6 xl:text-xl xl:leading-9">
          Hello! I&apos;m Zach, a Full Stack Web Developer with over nine years of honed problem-solving skills from a background in Inventory
          Control. A recent graduate of the Vanderbilt University Full Stack Web Development Bootcamp, my commitment to continuous learning extends to
          platforms like Udemy and LinkedIn Learning. Experienced in bug fixes and website development for small businesses, I recently competed in a
          48-hour Hackathon and our team won first place. Beyond coding, I&apos;m an adventurer who finds joy in adapting to new challenges, making me
          an ideal fit for dynamic web development roles. Let&apos;s connect and see how I can help you!
        </p>
        <button className="mt-8 mb-3">
          <MobilebuttonSecondary text={"Learn More"} link={"/about"} />
        </button>
      </div>
      <figure className="lg:col-span-2">
        <img
          className="col-span-4 lg:col-span-3 object-contain rounded-full"
          src="/images/zach-headshot-compressed.jpg"
          alt="collage-rock-climbing-hiking-Central-Park"
        />
      </figure>
    </section>
  );
}
