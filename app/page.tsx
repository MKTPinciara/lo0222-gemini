import HeaderNav from "@/components/HeaderNav";
import HeroSection from "@/components/HeroSection";
import RendersGallerySection from "@/components/RendersGallerySection";
import BlueprintViewer from "@/components/BlueprintViewer";
import LocationSection from "@/components/LocationSection";
import LeadContactForm from "@/components/LeadContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] selection:bg-champagne selection:text-neutral-950 overflow-x-hidden blueprint-neutral">
      <HeaderNav />
      <HeroSection />
      <RendersGallerySection />
      <BlueprintViewer />
      <LocationSection />
      <LeadContactForm />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
