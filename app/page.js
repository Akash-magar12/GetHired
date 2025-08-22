import ContactSection from "@/components/ContactSection";
import ExploreCareers from "@/components/ExploreCareers";
import FAQSection from "@/components/FAQSection";
import Hero from "@/components/Hero";
import OpportunitiesSection from "@/components/OpportunitiesSection";
import PopularJobs from "@/components/PopularJobs";
import TrustedEcosystem from "@/components/TrustedEcosystem";
import UserTestimonials from "@/components/UserTestimonials";

const Home = () => {
  return (
    <main className="w-full  min-h-screen space-y-5 mb-10">
      <Hero />
      <ExploreCareers />
      <TrustedEcosystem />
      <PopularJobs />
      <UserTestimonials />
      <OpportunitiesSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
};

export default Home;
