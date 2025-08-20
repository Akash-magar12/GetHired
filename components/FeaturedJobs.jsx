"use client";

import { MapPin } from "lucide-react";
import Image from "next/image";

const FeaturedJobs = () => {
  return (
    <section className="w-full py-20 px-6 flex flex-col items-center">
      {/* Heading */}
      <p className="text-gray-600 text-sm mb-10">
        Trusted by <span className="font-semibold">100,000+ People</span>
      </p>

      {/* Cards Wrapper */}
      <div className="relative flex items-center justify-center gap-6 max-w-6xl">
        {/* Left card (tilted) */}
        <div className="hidden md:block rotate-[-8deg] scale-90 opacity-80">
          <div className="bg-white shadow-lg rounded-2xl p-6 w-72">
            <h3 className="font-semibold text-sm mb-3">
              Highest-Paying Sectors
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>UI/UX Designer</span> <span>$6,500/Month</span>
              </li>
              <li className="flex justify-between">
                <span>Data Scientist</span> <span>$7,200/Month</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Main card */}
        <div className="bg-white shadow-xl rounded-2xl p-6 w-80 border">
          <div className="flex items-center gap-2 mb-3">
            <Image
              src="/microsoft.png" // place company logo in /public
              alt="Microsoft Logo"
              width={24}
              height={24}
            />
            <h2 className="font-semibold">Microsoft</h2>
            <span className="flex items-center text-sm text-gray-500 ml-auto">
              <MapPin className="w-4 h-4 mr-1" /> WA, USA
            </span>
          </div>

          <h3 className="font-bold text-lg mb-2">Product Manager</h3>
          <span className="bg-gray-100 text-xs px-2 py-1 rounded-full">
            Full Time
          </span>

          <div className="mt-3 text-sm text-gray-600 space-y-1">
            <p>📌 Permanent</p>
            <p>💰 $6,500 – $10,000 / Month</p>
          </div>

          <p className="text-gray-500 text-sm mt-3 leading-relaxed">
            Work with teams to build and launch Microsoft 365 features. Hybrid
            work available.
          </p>
        </div>

        {/* Right card (tilted) */}
        <div className="hidden md:block rotate-[8deg] scale-90 opacity-80">
          <div className="bg-white shadow-lg rounded-2xl p-6 w-72">
            <h3 className="font-semibold text-sm mb-3">
              Top Companies Hiring Now
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Google</span> <span>Software Engineer</span>
              </li>
              <li className="flex justify-between">
                <span>Airbnb</span> <span>Product Designer</span>
              </li>
              <li className="flex justify-between">
                <span>Meta</span> <span>Data Analyst</span>
              </li>
              <li className="flex justify-between">
                <span>Dropbox</span> <span>Frontend Dev</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FeaturedJobs;
