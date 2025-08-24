"use client";

import JobFilters from "./components/JobFilters";
import JobHeader from "./components/JobHeader";
import JobList from "./components/JobList";

const Page = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 py-6">
      <JobHeader />

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <aside className="w-full lg:w-80 shrink-0">
          <JobFilters />
        </aside>

        {/* Job List */}
        <div className="flex-1">
          <JobList />
        </div>
      </div>
    </main>
  );
};

export default Page;
