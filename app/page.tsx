import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import PackagingShowcase from "@/components/PackagingShowcase";
import ProductionGallery from "@/components/ProductionGallery";
import CustomWraps from "@/components/CustomWraps";
import DeliveryAreas from "@/components/DeliveryAreas";
import Purification from "@/components/Purification";
import Benefits from "@/components/Benefits";
import PosStarter from "@/components/PosStarter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Navigation />
      <Hero />
      <About />
      <Products />
      <PackagingShowcase />
      <ProductionGallery />
      <CustomWraps />
      <DeliveryAreas />
      <Purification />
      <Benefits />
      <Contact />
      <Footer />
    </div>
  );
}
