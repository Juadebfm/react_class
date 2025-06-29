import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Services from "./components/Services";
import Reasons from "./components/Reasons";
import CTA from "./components/CTA";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <main className="overflow-x-hidden scroll-smooth font-mont">
      <Navbar />
      <Hero />
      <Info />
      <Services />
      <Reasons />
      <CTA />
      <Testimonials
        testimonialHeading={`Why people love our products`}
        testimonialSubTitle={`I know oooo`}
      />
      <Testimonials
        testimonialHeading={`What people say about our products`}
        testimonialSubTitle={`They love it`}
      />
      <Footer />
    </main>
  );
};

export default App;
