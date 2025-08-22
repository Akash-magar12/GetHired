"use client";

import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { MapPin } from "lucide-react";

const JobCard = ({ job, isMiddle }) => {
  console.log(isMiddle);
  const {
    id,
    company,
    logo,
    logoColor,
    location,
    title,
    types,
    contractType,
    salary,
    description,
    postedAgo,
  } = job;

  return (
    <Card className="bg-white/95 cursor-pointer backdrop-blur-sm border border-blue-200 hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        {/* Company Info */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center overflow-hidden">
            {logo ? (
              <img
                src={logo}
                alt={company}
                className="w-12 h-12 object-cover"
              />
            ) : (
              <span className="text-white font-bold text-lg">
                {company?.charAt(0)}
              </span>
            )}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{company}</h3>
            <p className="text-sm text-gray-600 flex items-center gap-1">
              <MapPin size={16} />
              {location}
            </p>
          </div>
        </div>

        {/* Position / Title */}
        <h4 className="text-lg font-semibold text-gray-900 mb-3">{title}</h4>

        {/* Job Types */}
        <div className="flex gap-2 mb-3 items-center flex-wrap">
          {types?.map((type, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-gray-100 text-gray-700"
            >
              {type}
            </Badge>
          ))}
        </div>

        {/* Employment Type */}
        <div className="flex items-center gap-1 mb-2">
          <span className=" text-gray-400">💼</span>
          <span className="text-sm text-gray-600">{contractType}</span>
        </div>

        {/* Salary */}
        <div className="flex items-center gap-1 mb-4">
          <span className=" text-gray-400">💰</span>
          <span className="text-sm font-medium text-gray-900">{salary}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <Button className="px-6 py-2 rounded-lg cursor-pointer">
            Apply Now
          </Button>
          <span className="text-sm text-gray-500">{postedAgo}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
