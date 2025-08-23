import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, BriefcaseBusiness, Rocket, Earth } from "lucide-react";

const OpportunitiesSection = () => {
  return (
    <section className="relative flex w-full bg-black text-white py-12 sm:py-16 lg:rounded-xl px-4 sm:px-6 lg:px-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full">
        {/* Left: Job Card */}
        <div className="relative flex justify-center lg:justify-start">
          <Card className="bg-white text-gray-900 w-full max-w-xs sm:max-w-sm md:max-w-md shadow-xl rounded-2xl overflow-hidden">
            <CardContent className="p-5 space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="https://logo.clearbit.com/cyberark.com"
                  alt="Company Logo"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">
                    SecureMind
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4" /> Singapore
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-base sm:text-lg md:text-xl font-bold">
                  Cybersecurity Analyst
                </h2>
                <div className="flex gap-2 mt-2 flex-wrap">
                  <Badge className="bg-blue-100 text-blue-700 text-xs sm:text-sm">
                    Full Time
                  </Badge>
                  <Badge className="bg-red-100 text-red-600 text-xs sm:text-sm">
                    Urgent
                  </Badge>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 mt-2">
                  Permanent
                </p>
                <p className="text-xs sm:text-sm text-gray-700">
                  $5,500–9,000/Month
                </p>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Monitor network activity, detect threats, and respond to
                incidents in real time. Experience with firewalls and SIEM tools
                preferred.
              </p>

              <div className="flex items-center justify-between mt-4">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-4 py-2 text-xs sm:text-sm">
                  Apply Now
                </Button>
                <p className="text-[10px] sm:text-xs text-gray-500">
                  2 days ago
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Floating card */}
          <div className="absolute -bottom-8 sm:-bottom-6 right-2 sm:right-6 bg-white text-gray-900 rounded-xl shadow-2xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 w-52 sm:w-64">
            <div className="flex-1">
              <h4 className="font-medium text-sm sm:text-base">
                Video Stream Project
              </h4>
              <div className="flex items-center gap-2 mt-2 flex-wrap">
                <img
                  src="https://randomuser.me/api/portraits/men/75.jpg"
                  alt="Client"
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
                />
                <span className="text-xs sm:text-sm">Client</span>
                <img
                  src="https://randomuser.me/api/portraits/women/65.jpg"
                  alt="Independent"
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full ml-2 sm:ml-3"
                />
                <span className="text-xs sm:text-sm">Independent</span>
              </div>
              <Badge className="bg-green-100 text-green-700 mt-2 text-[10px] sm:text-xs">
                In Progress
              </Badge>
            </div>
          </div>
        </div>

        {/* Right: Text */}
        <div className="space-y-6 text-center lg:text-left mt-6 sm:mt-0">
          <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold leading-tight">
            Next-Level Opportunities, <br />
            <span className="bg-gradient-to-r from-[#338CFF] via-[#DAA0F2] to-[#FF9540] bg-clip-text text-transparent">
              All In One Place
            </span>
          </h2>

          <ul className="space-y-3 sm:space-y-4 md:space-y-5 text-gray-300 text-sm sm:text-base md:text-lg">
            <li className="flex items-start gap-2 sm:gap-3 md:gap-4 justify-center lg:justify-start">
              <Rocket className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0 mt-0.5" />
              <span className="text-left">
                Build your profile to showcase real skills, not just job titles
              </span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3 md:gap-4 justify-center lg:justify-start">
              <BriefcaseBusiness className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0 mt-0.5" />
              <span className="text-left">
                Discover high-quality opportunities that match your potential
              </span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3 md:gap-4 justify-center lg:justify-start">
              <Earth className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0 mt-0.5" />
              <span className="text-left">
                Connect with trusted employers who are hiring globally
              </span>
            </li>
          </ul>

          <Button
            className="bg-white py-3 px-6 text-black font-medium text-sm sm:text-base"
            variant="outline"
          >
            Start Exploring Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesSection;
