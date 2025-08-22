import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Users,
  Briefcase,
  CheckCircle2,
  BriefcaseBusiness,
  Rocket,
  Earth,
} from "lucide-react";

const OpportunitiesSection = () => {
  return (
    <section className="relative flex min-h-[85vh] w-full bg-black text-white py-16 rounded-xl px-6 lg:px-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-center">
        {/* Left: Job Card */}
        <div className="relative space-y-6">
          <Card className="bg-white text-gray-900 w-full max-w-sm shadow-xl rounded-2xl overflow-hidden">
            <CardContent className="p-5 space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="https://logo.clearbit.com/cyberark.com"
                  alt="Company Logo"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold">SecureMind</h3>
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> Singapore
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-bold">Cybersecurity Analyst</h2>
                <div className="flex gap-2 mt-2 flex-wrap">
                  <Badge className="bg-blue-100 text-blue-700">Full Time</Badge>
                  <Badge className="bg-red-100 text-red-600">Urgent</Badge>
                </div>
                <p className="text-sm text-gray-700 mt-2">Permanent</p>
                <p className="text-sm text-gray-700">$5,500–9,000/Month</p>
              </div>

              <p className="text-sm text-gray-600">
                Monitor Network Activity, Detect Threats, And Respond To
                Incidents In Real Time. Experience With Firewalls And SIEM Tools
                Preferred.
              </p>

              <div className="flex items-center justify-between mt-4">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-4 py-2 text-sm">
                  Apply Now
                </Button>
                <p className="text-xs text-gray-500">2 days ago</p>
              </div>
            </CardContent>
          </Card>

          {/* Small floating card */}
          <div className="absolute -bottom-6 right-6 bg-white text-gray-900 rounded-xl shadow-2xl p-4 flex items-center gap-4 w-64">
            <div>
              <h4 className="font-medium">Video Stream Project</h4>
              <div className="flex items-center gap-2 mt-2">
                <img
                  src="https://randomuser.me/api/portraits/men/75.jpg"
                  alt="Client"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm">Client</span>
                <img
                  src="https://randomuser.me/api/portraits/women/65.jpg"
                  alt="Independent"
                  className="w-8 h-8 rounded-full ml-3"
                />
                <span className="text-sm">Independent</span>
              </div>
              <Badge className="bg-green-100 text-green-700 mt-2">
                In Progress
              </Badge>
            </div>
          </div>
        </div>

        {/* Right: Text */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.8rem] text-center  sm:text-left whitespace-nowrap font-bold leading-tight">
            Next-Level Opportunities, <br />
            <span className="bg-gradient-to-r from-[#338CFF] via-[#DAA0F2] to-[#FF9540] bg-clip-text text-transparent">
              All In One Place
            </span>
          </h2>

          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-3">
              <Rocket />
              Build your profile to showcase real skills, not just job titles
            </li>
            <li className="flex items-start gap-3">
              <BriefcaseBusiness />
              Discover high-quality opportunities that match your potential
            </li>
            <li className="flex items-start gap-3">
              <Earth />
              Connect with trusted employers who are hiring globally
            </li>
          </ul>

          <Button
            className="bg-white py-4 text-black cursor-pointer"
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
