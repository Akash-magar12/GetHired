import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeader from "./SectionHeader";

const FAQSection = () => {
  return (
    <section className="w-full  my-20">
      <SectionHeader title="Frequently Asked Questions" />

      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              How do I apply for a job on JobNest?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                To apply for a job, first create a free account and upload your
                resume. Browse job listings that match your skills, and click
                “Apply Now” on the jobs you’re interested in. Your application
                will be sent directly to the employer.
              </p>
              <p>
                You can also set up job alerts to receive notifications for
                relevant openings.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>What is NextStep?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                NextStep is our personalized career guidance feature. It
                recommends jobs based on your skills, helps you improve your
                profile, and guides you towards opportunities that best match
                your potential.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              How can I get better job matches?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                Complete your profile thoroughly with your skills, experience,
                and preferences. The more detailed your resume and profile, the
                better the system can match you with relevant job opportunities.
              </p>
              <p>
                Regularly updating your profile and engaging with recommended
                jobs also improves future matches.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>How often are new jobs posted?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                New jobs are posted daily. By checking frequently or enabling
                notifications, you’ll never miss opportunities that match your
                skills.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              Can I save job listings for later?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                Yes! You can save any job listing by clicking the “Save” button.
                Saved jobs are stored in your profile under “Saved Jobs” so you
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
