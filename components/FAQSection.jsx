import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeader from "./SectionHeader";

const FAQSection = () => {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12">
      <SectionHeader title="Frequently Asked Questions" />

      <div className="max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
        <Accordion
          type="single"
          collapsible
          className="w-full space-y-2 sm:space-y-3 md:space-y-4"
        >
          <AccordionItem
            value="item-1"
            className="border border-gray-200 rounded-xl px-4 sm:px-6 md:px-8"
          >
            <AccordionTrigger className="text-left text-sm sm:text-base md:text-lg  font-medium py-4 sm:py-5 md:py-6 hover:no-underline [&[data-state=open]>svg]:rotate-180 transition-all">
              How do I apply for a job on GetHired?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 sm:gap-4 md:gap-5 text-balance pb-4 sm:pb-5 md:pb-6">
              <p className="text-sm sm:text-base  text-gray-700 leading-relaxed">
                To apply for a job, first create a free account and upload your
                resume. Browse job listings that match your skills, and click
                "Apply Now" on the jobs you're interested in. Your application
                will be sent directly to the employer.
              </p>
              <p className="text-sm sm:text-base  text-gray-700 leading-relaxed">
                You can also set up job alerts to receive notifications for
                relevant openings.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-2"
            className="border border-gray-200 rounded-xl px-4 sm:px-6 md:px-8"
          >
            <AccordionTrigger className="text-left text-sm sm:text-base md:text-lg  font-medium py-4 sm:py-5 md:py-6 hover:no-underline [&[data-state=open]>svg]:rotate-180 transition-all">
              What is GetHired?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 sm:gap-4 md:gap-5 text-balance pb-4 sm:pb-5 md:pb-6">
              <p className="text-sm sm:text-base  text-gray-700 leading-relaxed">
                GetHired is our personalized career guidance feature. It
                recommends jobs based on your skills, helps you improve your
                profile, and guides you towards opportunities that best match
                your potential.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-3"
            className="border border-gray-200 rounded-xl px-4 sm:px-6 md:px-8"
          >
            <AccordionTrigger className="text-left text-sm sm:text-base md:text-lg  font-medium py-4 sm:py-5 md:py-6 hover:no-underline [&[data-state=open]>svg]:rotate-180 transition-all">
              How can I get better job matches?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 sm:gap-4 md:gap-5 text-balance pb-4 sm:pb-5 md:pb-6">
              <p className="text-sm sm:text-base  text-gray-700 leading-relaxed">
                Complete your profile thoroughly with your skills, experience,
                and preferences. The more detailed your resume and profile, the
                better the system can match you with relevant job opportunities.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                Regularly updating your profile and engaging with recommended
                jobs also improves future matches.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-4"
            className="border border-gray-200 rounded-xl px-4 sm:px-6 md:px-8"
          >
            <AccordionTrigger className="text-left text-sm sm:text-base md:text-lg  font-medium py-4 sm:py-5 md:py-6 hover:no-underline [&[data-state=open]>svg]:rotate-180 transition-all">
              How often are new jobs posted?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 sm:gap-4 md:gap-5 text-balance pb-4 sm:pb-5 md:pb-6">
              <p className="text-sm sm:text-base  text-gray-700 leading-relaxed">
                New jobs are posted daily. By checking frequently or enabling
                notifications, you'll never miss opportunities that match your
                skills.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-5"
            className="border border-gray-200 rounded-xl px-4 sm:px-6 md:px-8"
          >
            <AccordionTrigger className="text-left text-sm sm:text-base md:text-lg  font-medium py-4 sm:py-5 md:py-6 hover:no-underline [&[data-state=open]>svg]:rotate-180 transition-all">
              Can I save job listings for later?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 sm:gap-4 md:gap-5 text-balance pb-4 sm:pb-5 md:pb-6">
              <p className="text-sm sm:text-base  text-gray-700 leading-relaxed">
                Yes! You can save any job listing by clicking the "Save" button.
                Saved jobs are stored in your profile under "Saved Jobs" so you
                can review and apply later.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;