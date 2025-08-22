"use client";

import { jobs } from "@/utils/const";
import SectionHeader from "./SectionHeader";
import { Button } from "./ui/button";
import JobCard from "./JobCard";

const PopularJobs = () => {
  return (
    <section className="w-full min-h-screen ">
      <SectionHeader
        title="Popular Jobs"
        description="Top companies are hiring now — and you could be their next great hire. Browse through popular openings tailored for ambitious talents."
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* TechNova Job Card */}
          {jobs.map((job, index) => (
            <JobCard job={job} key={job.id} />
          ))}
        </div>

        {/* Explore All Button */}
        <div className="text-center">
          <Button variant="outline" className="cursor-pointer">
            Explore All
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularJobs;
