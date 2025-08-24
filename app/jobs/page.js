"use client";

import JobFilters from "./components/JobFilters";
import JobHeader from "./components/JobHeader";
import JobList from "./components/JobList";


const Page = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 py-6">
      <JobHeader />
      <div className="flex gap-6">
        <aside className="w-80 shrink-0">
          <JobFilters />
        </aside>

        <div className="flex-1">
          <JobList />
        </div>
      </div>
    </main>
  );
};

export default Page;
