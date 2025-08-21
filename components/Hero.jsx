import { MapPin, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Hero = () => {
  return (
    <div className="w-full  h-110 flex flex-col items-center justify-center gap-7">
      <h1 className="text-5xl font-bold text-center">
        Your Next Job Is <br /> Just <span>One Click</span> Away
      </h1>
      <p className="text-center text-">
        Find opportunities that match your passion, not just your resume. <br />
        Let’s build the career you deserve — starting today.
      </p>
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
      <div className="flex flex-row flex-wrap items-center gap-12">
        <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage
              src="https://github.com/evilrabbit.png"
              alt="@evilrabbit"
            />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <p>Trusted by 100,000+ people</p>
      <p>Trusted by 100,000+ people</p>
    </div>
  );
};

export default Hero;
