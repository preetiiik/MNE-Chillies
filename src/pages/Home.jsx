import "../App.css";
import "../styles/HeroHome.css";
import "../styles/OurcommitmentHome.css";
import "../styles/ProcessSectionH.css";
import "../styles/StatsH.css";
// import "../styles/ChilliVideosH.css";

import Hero from "../components/Hero";
import MarqueeStrip from "../components/MarqueeStrip";
import Stats from "../components/StatsH";
import Collection from "../components/CollectionH";
// import ChilliVideos from "../components/ChilliVideosH";
import PremiumProductsH from "../components/PremiumProductsH";
import ProcessSection from "../components/ProcessSectionH";
import ServicesSection from "../components/ServicesSection";
import OurCommitment from "../components/OurCommitmentH";
import Testimonials from "../components/TestimonialsH";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <Stats />
      <Collection />
      {/* <ChilliVideos /> */}
      <PremiumProductsH />
      <ProcessSection />
      <ServicesSection />
      <OurCommitment />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;