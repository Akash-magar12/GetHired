import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const ContactSection = () => {
  return (
    <section className="flex justify-center items-center py-16 px-6">
      <Card className="relative w-full  rounded-xl h-110 flex flex-col justify-center items-center overflow-hidden border-0 bg-black text-white text-center shadow-lg">
        {/* Decorative gradient waves (optional) */}
        <div className="absolute inset-0 opacity-40">
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(168,85,247,0.3),transparent_70%)]" />
        </div>

        <CardContent className="relative z-10 flex flex-col items-center gap-6 py-12">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold">
            Let’s Talk!{" "}
            <span className="bg-gradient-to-r from-[#338CFF] via-[#DAA0F2] to-[#FF9540] bg-clip-text text-transparent">
              We’re Here To Help
            </span>
          </h2>

          {/* Description */}
          <p className="max-w-2xl text-gray-300 text-sm md:text-base">
            Have a question, feedback, or just want to say hi? Our team is ready
            to support you — whether you&apos;re a job seeker, recruiter, or
            just curious about what we do.
          </p>

          {/* Button */}
          <Button
            size="lg"
            variant="outline"
            className="text-black bg-white cursor-pointer"
          >
            Contact Us
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};

export default ContactSection;
