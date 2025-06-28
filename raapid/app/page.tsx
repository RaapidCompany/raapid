import Hero from  "@/components/home/hero"
import Contact from "@/components/home/contact"
import About from "@/components/home/about";
import Faqs from "@/components/home/faqs";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Faqs/>
      <Contact/>
    </div>
  );
}