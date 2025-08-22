import AvatarGroup from "./AvatarsGroup";
import FeaturedJobs from "./FeaturedJobs";
import JobSearchBar from "./JobSearchBar";

const Hero = () => {
  return (
    <div className="w-full min-h-screen  overflow-hidden  my-24 flex flex-col items-center justify-center gap-7">
      <h1 className="text-5xl font-bold text-center">
        Your Next Job Is <br /> Just <span>One Click</span> Away
      </h1>
      <p className="text-center text-">
        Find opportunities that match your passion, not just your resume. <br />
        Let’s build the career you deserve — starting today.
      </p>
      {/* <div className="flex items-center bg-white rounded-full px-4 py-2 w-full max-w-2xl border">
        <div className="flex items-center flex-1">
          <Search className="text-gray-400 w-5 h-5 mr-2" />
          <Input
            type="text"
            placeholder="Job Title or Keyword"
            className="w-full border-0 focus-visible:ring-0 text-sm"
          />
        </div>

        <div className="h-6 w-px bg-gray-300 mx-3" />

        <div className="flex items-center flex-1">
          <MapPin className="text-gray-400 w-5 h-5 mr-2" />
          <Input
            type="text"
            placeholder="Location"
            className="w-full border-0 focus-visible:ring-0 text-sm"
          />
        </div>

        <Button className="ml-3 px-6 py-1 rounded-full text-sm font-medium">
          Search
        </Button>
      </div> */}

      <JobSearchBar />

      <AvatarGroup />
      <FeaturedJobs />
    </div>
  );
};

export default Hero;
