import Dots from "./Dots";
import Hero from "./Hero";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="header-bg">
      <Navbar />
      <Hero />
      <Dots/>
    </div>
  );
}
