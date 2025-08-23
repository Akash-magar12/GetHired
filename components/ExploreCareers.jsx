import SectionHeader from "./SectionHeader";

import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { jobCategories } from "@/utils/const";

const ExploreCareers = () => {
  return (
    <section className="w-full min-h-screen ">
      <SectionHeader
        title="Explore Careers Across Every Field"
        description="Discover a wide range of careers across every industry — from design and tech to healthcare and finance. Find roles that match your skills and passion, and take the next step toward your dream job."
      />
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {jobCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={index}
                className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/50 bg-card/80 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-card-foreground text-sm leading-tight mb-1">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground text-xs">
                        {category.jobs} Jobs Available
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center my-16">
          <Button
            size="lg"
            className="bg-primary cursor-pointer hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg"
          >
            Explore All
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExploreCareers;
