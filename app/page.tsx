import About from "@/components/about";
import Category from "@/components/category";
import Companies from "@/components/companies";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Opportunities from "@/components/opportunities";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <Opportunities />
      <Category />
      <About />
    </div>
  );
}
