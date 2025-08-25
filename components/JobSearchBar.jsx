"use client";

import { MapPin, Search } from "lucide-react";
import { Button } from "./ui/button";
import { useClerk, useUser } from "@clerk/nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";

const JobSearchBar = () => {
  const { isSignedIn } = useUser();
  const router = useRouter();
  const { openSignIn } = useClerk();
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const handleSearch = () => {
    if (!isSignedIn) {
      openSignIn({ forceRedirectUrl: "/jobs" });
      return;
    }
    router.push("/jobs");
  };
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center bg-white shadow-sm rounded-2xl sm:rounded-full p-3 sm:px-4 sm:py-2 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl gap-2 sm:gap-0">
      {/* Job title input */}
      <div className="flex items-center flex-1">
        <Search className="text-gray-400 w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
        <input
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          type="text"
          placeholder="Job Title or Keyword"
          className="w-full focus:outline-none text-sm sm:text-sm"
        />
      </div>

      {/* Divider */}
      <div className="h-px w-full sm:h-6 sm:w-px bg-gray-300 sm:mx-3" />

      {/* Location input */}
      <div className="flex items-center flex-1">
        <MapPin className="text-gray-400 w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          className="w-full focus:outline-none text-sm sm:text-sm"
        />
      </div>

      <Button
        onClick={handleSearch}
        className="mt-2 sm:mt-0 sm:ml-3 px-4 sm:px-6 py-2 sm:py-1 bg-gradient-to-r text-white bg-black rounded-full cursor-pointer text-sm font-medium hover:opacity-90 transition w-full sm:w-auto"
      >
        Search
      </Button>
    </div>
  );
};

export default JobSearchBar;
