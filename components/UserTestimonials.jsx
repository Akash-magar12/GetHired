"use client";

import { testimonials } from "@/utils/const";
import Image from "next/image";
import { useEffect, useState } from "react";

const UserTestimonials = () => {
  const [active, setActive] = useState(0);
  const current = testimonials[active];
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval); // cleanup
  }, []);
  return (
    <section className="relative py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8">
      <div className="relative z-10 max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 md:mb-16">
          What Our Users Say
        </h2>

        <div className="relative mb-8 sm:mb-10 md:mb-12">
          {/* Large quotation marks */}
          <div className="text-4xl sm:text-5xl md:text-6xl text-blue-500 font-serif absolute -top-2 sm:-top-3 md:-top-4 -left-2 sm:-left-3 md:-left-4 opacity-50">
            "
          </div>
          <div className="text-4xl sm:text-5xl md:text-6xl text-blue-500 font-serif absolute -bottom-4 sm:-bottom-6 md:-bottom-8 -right-2 sm:-right-3 md:-right-4 opacity-50">
            "
          </div>

          <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6 sm:mb-8 px-4 sm:px-6 md:px-8">
            {current.quote}
          </blockquote>

          {/* Dotted line separator */}
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full"></div>
              <div className="w-12 sm:w-16 md:w-20 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full"></div>
              <div className="w-12 sm:w-16 md:w-20 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full"></div>
            </div>
          </div>

          <div className="text-center">
            <p className="font-semibold text-gray-900 text-base sm:text-lg">
              {current.name}
            </p>
            <p className="text-gray-600 text-sm sm:text-base">{current.role}</p>
          </div>
        </div>

        {/* User avatars */}
        <div className="flex justify-center items-center gap-2 sm:gap-3 md:gap-4 overflow-x-auto pb-2">
          {testimonials.map((test, idx) => (
            <div
              key={test.id}
              className="w-12 cursor-pointer h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-white shadow-lg flex-shrink-0"
            >
              <Image
                onClick={() => setActive(idx)}
                src={test.avatar}
                alt="User testimonial"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="relative z-10 max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-gray-900">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #60a5fa, #a78bfa, #f472b6, #f472b6, #fb923c, #facc15)", // 6 colors
              }}
            >
              Creating a clearer path for job seekers
            </span>{" "}
            and connecting employers with the right talent is essential for
            building a more intelligent workforce in the future.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default UserTestimonials;
