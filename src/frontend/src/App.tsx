import { Toaster } from "@/components/ui/sonner";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--page-bg)" }}>
      <Toaster position="top-right" />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
