import Hero from "./Hero";
import LogoSlider from "./LogoSlider";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <main
      // className="bg-cover bg-top bg-no-repeat pb-16 md:pb-26"
      className="bg-cover bg-[position:calc(100%+130px)_top] lg:bg-right bg-no-repeat pb-16 md:pb-26"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      <Navbar />
      <Hero />
      <LogoSlider />
    </main>
  );
}
