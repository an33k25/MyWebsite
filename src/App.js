import React from "react";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Work from "./components/sections/Work";
import Contact from "./components/sections/Contact";
import ScrollToTop from "./components/common/ScrollToTop";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen text-gray-900">
      <Header />
      <main className="overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <section className="min-h-screen bg-pantone snap-start snap-always flex items-center justify-center">
          <Hero />
        </section>
        <section className="snap-start snap-always">
          <About />
        </section>
        <section className="snap-start snap-always">
          <Work type="featured" />
        </section>
        {/*<section className="snap-start snap-always"> 
          <Work type="other" />
        </section>
        */}
        <section className="snap-start snap-always">
          <Contact />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
