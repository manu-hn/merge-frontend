import HeroSection from "./_elements/hero-section";
import HowItWorks from "./_elements/how-it-works";
import WhoIsItFor from "./_elements/who-is-it-for";
import WhyMerge from "./_elements/why-merge";

const LandingPage = () => {
  return (
    <div className="w-full bg-black">
        <HeroSection />
        <HowItWorks />
        <WhoIsItFor />
        <WhyMerge />
    </div>
  )
}

export default LandingPage;