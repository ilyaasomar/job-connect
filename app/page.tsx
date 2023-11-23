import Category from "@/components/category";
import Companies from "@/components/companies";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Opportunities from "@/components/opportunities";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <Opportunities />
      <Category />
    </div>
  );
}
