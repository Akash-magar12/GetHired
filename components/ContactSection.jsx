import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const ContactSection = () => {
  return (
    <section className="flex justify-center items-center py-8 md:py-16">
      <Card className="relative w-full rounded-none lg:rounded-xl h-[60vh] md:h-[70vh] flex flex-col justify-center items-center  border-0 bg-black text-white text-center shadow-lg">
        {/* Decorative gradient waves */}
        {/* <div className="absolute inset-0 opacity-40">
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(168,85,247,0.3),transparent_70%)]" />
        </div> */}

        <CardContent className="relative z-10 flex flex-col items-center gap-4 md:gap-6 py-6 md:py-12 px-4 md:px-6">
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Let's Talk!{" "}
            <span className="bg-gradient-to-r from-[#338CFF] via-[#DAA0F2] to-[#FF9540] bg-clip-text text-transparent">
              We're Here To Help
            </span>
          </h2>

          {/* Description */}
          <p className="max-w-sm sm:max-w-md md:max-w-2xl text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
            Have a question, feedback, or just want to say hi? Our team is ready
            to support you — whether you&apos;re a job seeker, recruiter, or
            just curious about what we do.
          </p>

          {/* Button */}
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="text-black bg-white cursor-pointer mt-2 md:mt-0 px-6 md:px-8 py-2 md:py-3 text-sm md:text-base"
            >
              Contact Us
            </Button>
          </Link>
        </CardContent>
      </Card>
    </section>
  );
};

export default ContactSection;
