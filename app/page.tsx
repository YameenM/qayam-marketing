import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import ScreenshotSection from "./components/ScreenshotSection";
import OwnerSection from "./components/OwnerSection";
import MobileSection from "./components/MobileSection";
import PricingPreview from "./components/PricingPreview";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <ScreenshotSection />
      <OwnerSection />
      <MobileSection />
      <PricingPreview />
      <Footer />
    </main>
  );
}
