import About from "@/components/about";
import Category from "@/components/category";
import Companies from "@/components/companies";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Opportunities from "@/components/opportunities";
import Testmonials from "@/components/testmonials";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <Opportunities />
      <Category />
      <About />
      <Testmonials />
      <CTA />
      <Footer />
    </div>
  );
}
