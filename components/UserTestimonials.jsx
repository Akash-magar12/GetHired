import Image from "next/image";

const UserTestimonials = () => {
  return (
    <section className="relative  py-10 ">
      {/* Decorative background lines */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
          <path
            d="M800 50 Q1000 100 1200 80"
            stroke="#f472b6"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M850 120 Q1050 170 1200 150"
            stroke="#fbbf24"
            strokeWidth="2"
            fill="none"
          />
          <g stroke="#60a5fa" strokeWidth="1" opacity="0.5">
            <line x1="900" y1="0" x2="1200" y2="300" />
            <line x1="950" y1="50" x2="1200" y2="350" />
            <line x1="1000" y1="100" x2="1200" y2="400" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
          What Our Users Say
        </h2>

        <div className="relative mb-12">
          {/* Large quotation marks */}
          <div className="text-6xl text-blue-500 font-serif absolute -top-4 -left-4 opacity-50">
            "
          </div>
          <div className="text-6xl text-blue-500 font-serif absolute -bottom-8 -right-4 opacity-50">
            "
          </div>

          <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 px-8">
            I used to struggle with job platforms, but JobNest makes it feel
            easy and personal. It actually understands what I'm looking for.
          </blockquote>

          {/* Dotted line separator */}
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            </div>
          </div>

          <div className="text-center">
            <p className="font-semibold text-gray-900 text-lg">Esther Howard</p>
            <p className="text-gray-600">Marketing Coordinator</p>
          </div>
        </div>

        {/* User avatars */}
        <div className="flex justify-center items-center gap-4">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1602481182506-6e15d0d2e44b?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="User testimonial"
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="User testimonial"
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-blue-200 shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Featured user testimonial"
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="User testimonial"
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="User testimonial"
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="relative py-20  ">
        <div className="relative z-10 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
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
