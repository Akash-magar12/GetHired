import { MapPin, Search } from "lucide-react"
import { Button } from "./ui/button"

const JobSearchBar = () => {
  return (
    <div className="flex items-center bg-white shadow-sm rounded-full px-4 py-2 w-full max-w-2xl">
        {/* Job title input */}
        <div className="flex items-center flex-1">
          <Search className="text-gray-400 w-5 h-5 mr-2" />
          <input
            type="text"
            placeholder="Job Title or Keyword"
            className="w-full focus:outline-none text-sm"
          />
        </div>

        {/* Divider */}
        <div className="h-6 w-px bg-gray-300 mx-3" />

        {/* Location input */}
        <div className="flex items-center flex-1">
          <MapPin className="text-gray-400 w-5 h-5 mr-2" />
          <input
            type="text"
            placeholder="Location"
            className="w-full focus:outline-none text-sm"
          />
        </div>

        <Button className="l-3 px-6 py-1 bg-gradient-to-r  text-white bg-black rounded-full cursor-pointer text-sm font-medium hover:opacity-90 transition">
          Search
        </Button>
      </div>
  )
}

export default JobSearchBar