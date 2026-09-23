import HeaderNav from "@/components/HeaderNav";
import HeroSection from "@/components/HeroSection";
import PillarsSection from "@/components/PillarsSection";
import ShowroomConceptSection from "@/components/ShowroomConceptSection";
import BlueprintViewer from "@/components/BlueprintViewer";
import MaterialsGallery from "@/components/MaterialsGallery";
import LocationSection from "@/components/LocationSection";
import LeadContactForm from "@/components/LeadContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-paper selection:bg-brand-gold selection:text-brand-dark overflow-x-hidden">
      <HeaderNav />
      <HeroSection />
      <PillarsSection />
      <ShowroomConceptSection />
      <BlueprintViewer />
      <MaterialsGallery />
      <LocationSection />
      <LeadContactForm />
      <Footer />
    </main>
  );
}
