import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Card from "@/components/cards";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
    </div>
  );
}
