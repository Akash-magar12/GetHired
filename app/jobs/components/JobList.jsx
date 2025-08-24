"use client";

import JobCard from "@/components/JobCard";
import { alljobs } from "@/utils/const";

const JobList = () => {
  if (!alljobs.length) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">
          No jobs found matching your criteria.
        </p>
        <p className="text-muted-foreground mt-2">
          Try adjusting your filters or search terms.
        </p>
      </div>
    );
  }

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
      {alljobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </section>
  );
};

export default JobList;
