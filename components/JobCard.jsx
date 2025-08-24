"use client"

import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { MapPin } from "lucide-react"

const JobCard = ({ job }) => {
  const { company, logo, location, title, types, contractType, salary, description, postedAgo } = job

  return (
    <Card className="bg-white/95 cursor-pointer py-0 backdrop-blur-sm border border-blue-200 hover:shadow-lg transition-all duration-300 h-full">
      <CardContent className="p-4 sm:p-5 md:p-6 h-full flex flex-col">
        {/* Company Info */}
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
            {logo ? (
              <img src={logo} alt={company} className="w-10 h-10 sm:w-12 sm:h-12 object-cover" />
            ) : (
              <span className="text-white font-bold text-base sm:text-lg">{company?.charAt(0)}</span>
            )}
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base truncate">{company}</h3>
            <p className="text-xs sm:text-sm text-gray-600 flex items-center gap-1">
              <MapPin size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="truncate">{location}</span>
            </p>
          </div>
        </div>

        {/* Position / Title */}
        <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 leading-tight">{title}</h4>

        {/* Job Types */}
        <div className="flex gap-1.5 sm:gap-2 mb-2 sm:mb-3 items-center flex-wrap">
          {types?.map((type, index) => (
            <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-700 text-xs px-2 py-1">
              {type}
            </Badge>
          ))}
        </div>

        {/* Employment Type */}
        <div className="flex items-center gap-1 sm:gap-1.5 mb-1.5 sm:mb-2">
          <span className="text-gray-400 text-sm">💼</span>
          <span className="text-xs sm:text-sm text-gray-600">{contractType}</span>
        </div>

        {/* Salary */}
        <div className="flex items-center gap-1 sm:gap-1.5 mb-3 sm:mb-4">
          <span className="text-gray-400 text-sm">💰</span>
          <span className="text-xs sm:text-sm font-medium text-gray-900">{salary}</span>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-3 leading-relaxed flex-grow line-clamp-3 sm:line-clamp-none">
          {description}
        </p>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 sm:gap-0 mt-auto">
          <Button className="px-4 sm:px-6 py-2 rounded-lg cursor-pointer text-xs sm:text-sm w-full sm:w-auto">
            Apply Now
          </Button>
          <span className="text-xs sm:text-sm text-gray-500 text-center sm:text-right">{postedAgo}</span>
        </div>
      </CardContent>
    </Card>
  )
}

export default JobCard
