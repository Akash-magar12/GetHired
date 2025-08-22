import { Button } from "@/components/ui/button";
import { stats } from "@/utils/const";

const TrustedEcosystem = () => {
  return (
    <section
      className="min-h-[85vh] rounded-xl w-full flex items-center justify-center px-6"
      style={{
        backgroundColor: "black",
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/dark-mosaic.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}
    >
      <div className="max-w-6xl w-full text-center rounded-2xl py-16 px-6">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-12">
          We’ve Built A Trusted Ecosystem That Supports{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Thousands Of Job Seekers
          </span>{" "}
          <span className="bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
            And Recruiters
          </span>{" "}
          Around The Globe — Fast, Reliable, And Results-Driven.
        </h1>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((val) => (
            <div key={val.id} className="text-center">
              <div className="text-4xl font-bold text-white">
                {val.number}
                <span className="text-blue-400">{val.suffix}</span>
              </div>
              <p className="text-gray-300 text-sm mt-2">
                {val.description}
                <br />
                {val.nextLine}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Button variant="outline" className="cursor-pointer" size="lg">
          Join Us Today
        </Button>
      </div>
    </section>
  );
};

export default TrustedEcosystem;
