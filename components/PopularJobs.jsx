"use client";

import { jobs } from "@/utils/const";
import SectionHeader from "./SectionHeader";
import { Button } from "./ui/button";
import JobCard from "./JobCard";

const PopularJobs = () => {
  return (
    <section className="w-full min-h-[80vh] sm:min-h-[90vh] lg:min-h-screen px-4 sm:px-6 md:px-8">
      <SectionHeader
        title="Popular Jobs"
        description="Top companies are hiring now — and you could be their next great hire. Browse through popular openings tailored for ambitious talents."
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12">
          {/* Job Cards */}
          {jobs.map((job) => (
            <JobCard job={job} key={job.id} />
          ))}
        </div>

        {/* Explore All Button */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <Button
            variant="outline"
            className="cursor-pointer w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base"
          >
            Explore All
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularJobs;
