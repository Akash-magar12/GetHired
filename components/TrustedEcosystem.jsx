import { Button } from "@/components/ui/button";
import { stats } from "@/utils/const";

const TrustedEcosystem = () => {
  return (
    <section
      className="min-h-[60vh] sm:min-h-[70vh] md:min-h-[70vh] lg:min-h-[85vh] lg:rounded-md w-full flex items-center justify-center px-4 sm:px-6 md:px-8"
      style={{
        backgroundColor: "black",
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/dark-mosaic.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}
    >
      <div className="max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl w-full text-center rounded-2xl py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8 sm:mb-10 md:mb-12">
          We've Built A Trusted Ecosystem That Supports{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Thousands Of Job Seekers
          </span>{" "}
          <span className="bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
            And Recruiters
          </span>{" "}
          Around The Globe — Fast, Reliable, And Results-Driven.
        </h1>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
          {stats.map((val) => (
            <div key={val.id} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                {val.number}
                <span className="text-blue-400">{val.suffix}</span>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm mt-1 sm:mt-2 leading-relaxed">
                {val.description}
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                {val.nextLine}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Button
          variant="outline"
          className="cursor-pointer w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base"
          size="lg"
        >
          Join Us Today
        </Button>
      </div>
    </section>
  );
};

export default TrustedEcosystem;
