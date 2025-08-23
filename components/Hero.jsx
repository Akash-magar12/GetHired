import AvatarGroup from "./AvatarsGroup";
import FeaturedJobs from "./FeaturedJobs";
import JobSearchBar from "./JobSearchBar";

const Hero = () => {
  return (
    <section className="w-full min-h-[60vh] sm:min-h-[70vh] lg:min-h-screen overflow-hidden my-8 sm:my-12 md:my-16 lg:my-24 flex flex-col items-center justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-7 px-4 sm:px-6 md:px-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
        Your Next Job Is <br /> Just <span>One Click</span> Away
      </h1>
      <p className="text-center text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
        Find opportunities that match your passion, not just your resume.{" "}
        <br className="hidden sm:block" />
        Let's build the career you deserve — starting today.
      </p>

      <JobSearchBar />

      <AvatarGroup />
      <FeaturedJobs />
    </section>
  );
};

export default Hero;
