import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import Journey from "@/components/Journey";
import Speaking from "@/components/Speaking";
import SpeakingEngagements from "@/components/SpeakingEngagements";
import Topics from "@/components/Topics";
import Gallery from "@/components/Gallery";
import FeaturedIn from "@/components/FeaturedIn";
import LinkedInMasterclass from "@/components/LinkedInMasterclass";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <AboutMe />
      <Journey />
      <Speaking />
      <SpeakingEngagements />
      <Topics />
      <Gallery />
      <FeaturedIn />
      <LinkedInMasterclass />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
