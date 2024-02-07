import Image from "next/image";
import Hero from "./components/hero";
import Footer from "./components/footer";
import About from "./components/about";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Footer />
    </main>
  );
}
