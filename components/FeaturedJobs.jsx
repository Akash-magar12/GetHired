"use client";

import { MapPin, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const FeaturedJobs = () => {
  return (
    <div className="relative flex items-center justify-center ">
      {/* Extra Left card (Card A) */}
      <div className="hidden lg:block transform -rotate-12 translate-x-40 translate-y-26">
        <Card className="w-72 shadow-md rounded-xl">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-800">
              Trending Roles
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-700">AI Engineer</span>
              <span className="font-medium text-gray-900">$8,500/Month</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Cloud Architect</span>
              <span className="font-medium text-gray-900">$9,000/Month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Left card (Card 1) */}
      <div className="hidden lg:block transform -rotate-10 translate-x-4 translate-y-16">
        <Card className="w-80 shadow-md rounded-xl">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-800">
              Highest-Paying Sectors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-24 mb-6 relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-4 flex items-end">
              <svg className="w-full h-full" viewBox="0 0 200 60">
                <path
                  d="M 10 50 Q 50 30, 100 35 T 190 15"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="10" cy="50" r="3" fill="#3B82F6" />
                <circle cx="100" cy="35" r="3" fill="#3B82F6" />
                <circle cx="190" cy="15" r="3" fill="#3B82F6" />
              </svg>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-700">UI/UX Designer</span>
                <span className="font-medium text-gray-900">$6,500/Month</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Data Scientist</span>
                <span className="font-medium text-gray-900">$7,200/Month</span>
              </div>
            </div>

            <Separator className="my-4" />

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                <span className="text-white text-xs font-bold">PC</span>
              </div>
              <div>
                <p className="text-xs text-gray-600">PixelCraft</p>
                <p className="text-xs text-green-600">
                  +32% job listing this month
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main card (Card 2) */}
      <Card className="w-82 shadow-md rounded-xl relative z-20 translate-y-6">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 flex flex-wrap">
              <div className="w-4 h-4 bg-red-500 mr-1 mb-1"></div>
              <div className="w-4 h-4 bg-green-500 mb-1"></div>
              <div className="w-4 h-4 bg-blue-500 mr-1"></div>
              <div className="w-4 h-4 bg-yellow-400"></div>
            </div>
            <CardTitle className="text-xl font-semibold">Microsoft</CardTitle>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="w-4 h-4 mr-1" />
            WA, USA
          </div>
        </CardHeader>
        <CardContent>
          <h3 className="font-bold text-2xl mb-3 text-gray-900">
            Product Manager
          </h3>
          <Badge variant="secondary" className="mb-4">
            Full Time
          </Badge>
          <div className="space-y-2 mb-6 text-sm text-gray-600">
            <div className="flex items-center">
              <span className="mr-2">📌</span>
              <span>Permanent</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">💰</span>
              <span>$6,500-10,000/Month</span>
            </div>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Work With Teams To Build And Launch Microsoft 365 Features. Hybrid
            Work Available.
          </p>
        </CardContent>
      </Card>

      {/* Right card (Card 3) */}
      <div className="hidden lg:block transform rotate-10 -translate-x-4 translate-y-16">
        <Card className="w-80 shadow-md rounded-xl">
          <CardHeader className="flex flex-row items-center gap-2">
            <Search className="w-5 h-5 text-gray-600" />
            <CardTitle className="text-lg font-semibold text-gray-800">
              Top Companies Hiring Now
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Google</span>
                <span className="text-gray-500">Software Engineer</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Airbnb</span>
                <span className="text-gray-500">Product Designer</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Meta</span>
                <span className="text-gray-500">Data Analyst</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Dropbox</span>
                <span className="text-gray-500">Front-End Dev</span>
              </div>
            </div>
            <Separator className="my-4" />
            <div className="bg-blue-50 text-blue-700 px-3 py-2 rounded-full text-center text-xs">
              <span className="font-medium">Ronald Richards</span>
              <br />
              Jr. Front-End Developer
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Extra Right card (Card B) */}
      <div className="hidden lg:block transform rotate-12 -translate-x-40 -z-10 translate-y-26">
        <Card className="w-72 shadow-md rounded-xl">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-800">
              Remote-Friendly
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-700">Notion</span>
              <span className="text-gray-500">UX Writer</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Figma</span>
              <span className="text-gray-500">Design Engineer</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FeaturedJobs;
