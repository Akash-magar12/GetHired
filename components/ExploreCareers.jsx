import SectionHeader from "./SectionHeader";

import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { jobCategories } from "@/utils/const";
import Link from "next/link";

const ExploreCareers = () => {
  return (
    <section className="w-full min-h-[80vh] sm:min-h-[90vh] lg:min-h-screen px-4 sm:px-6 md:px-8">
      <SectionHeader
        title="Find Jobs That Match You"
        description="Discover a wide range of careers across every industry — from design and tech to healthcare and finance. Find roles that match your skills and passion, and take the next step toward your dream job."
      />
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12 lg:mb-8">
          {jobCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={index}
                className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/50 bg-card/80 backdrop-blur-sm"
              >
                <CardContent className="p-4 sm:p-5 md:p-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black flex items-center justify-center flex-shrink-0`}
                    >
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-card-foreground text-sm sm:text-base leading-tight mb-1">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground text-xs sm:text-sm">
                        {category.jobs} Jobs Available
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center my-8 sm:my-12 md:my-14 lg:my-16">
          <Link href="/jobs">
            <Button
              size="lg"
              className="bg-primary cursor-pointer hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 hover:shadow-lg w-full sm:w-auto"
            >
              Explore All
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExploreCareers;
