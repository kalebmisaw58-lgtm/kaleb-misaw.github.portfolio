import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import VideoPortfolio from "@/components/VideoPortfolio";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";
import CaseStudies from "@/components/CaseStudies";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-zinc-950 min-h-screen">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <VideoPortfolio />
      <AnalyticsDashboard />
      <CaseStudies />
      <ContactSection />
      <Footer />
    </main>
  );
}