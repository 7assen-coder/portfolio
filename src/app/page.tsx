import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import DesignGallery from "@/components/DesignGallery";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <DesignGallery />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
