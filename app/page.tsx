import HeaderNav from "@/components/HeaderNav";
import HeroSection from "@/components/HeroSection";
import RendersGallerySection from "@/components/RendersGallerySection";
import BlueprintViewer from "@/components/BlueprintViewer";
import LocationSection from "@/components/LocationSection";
import LeadContactForm from "@/components/LeadContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-darker selection:bg-brand-gold selection:text-brand-dark overflow-x-hidden">
      <HeaderNav />
      <HeroSection />
      <RendersGallerySection />
      <BlueprintViewer />
      <LocationSection />
      <LeadContactForm />
      <Footer />
    </main>
  );
}
