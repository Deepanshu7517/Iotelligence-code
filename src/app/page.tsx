import "../index.css";
import Header from "../components/site/header";
import Footer from "../components/site/footer";
import Hero from "./(home)/_components/hero";
// import About from "./(home)/_components/about";
import Services from "./(home)/_components/services";
import Projects from "./(home)/_components/projects";
import Technologies from "./(home)/_components/technologies";
import Testimonials from "./(home)/_components/testimonials";
import Contact from "./(home)/_components/contact";
import ModernCursor from "../components/site/modernCursor";
import Preloader from "../components/site/preloader";
import {  useState } from "preact/hooks";
import ClientBelt from "../components/ui/client-belt";
import Applications from "../components/ui/application";
import IndustriesServed from "../components/ui/industries-served";

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(false);
  document.onreadystatechange = () => {
    setShowPreloader(true)
  }
  return (
    <>
      {showPreloader && (
        <Preloader onFinish={() => setShowPreloader(false)} />
      )}
      <ModernCursor />
      {!showPreloader && <Header />}
      <main className="overflow-x-hidden">
        <Hero />
        <ClientBelt />
        <Applications />
        <IndustriesServed />
        <Services />
        <Projects />
        <Technologies />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
