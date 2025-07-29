import Hero from "./Hero";
import LogoSlider from "./LogoSlider";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div
      className="bg-contain bg-top bg-no-repeat pb-16 md:pb-26"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      <Navbar />
      <Hero />
      <LogoSlider />
    </div>
  );
}
