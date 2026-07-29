import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductsAbout from "./components/ProductsAbout";

export default function Home() {
  return (
    <main className="flex-1 bg-navy-900">
      <Header />
      <Hero />
      <ProductsAbout />
      <Features/>
      <Contact/>
      <Footer/>
    </main>
  );
}
