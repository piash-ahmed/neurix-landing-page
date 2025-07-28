import Dots from "./Dots";
import Hero from "./Hero";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="header-bg">
      <style>
        {`
          @media (min-width: 1024px) {
            .header-bg-img {
              background-position: right 0px top 0px !important;
            }
          }
        `}
      </style>
      <div
        className="header-bg-img"
        style={{
          backgroundImage: "url('/hero-solar.png')",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
          backgroundSize: "70%",
        }}
      >
        <Navbar />
        <Hero />
        <Dots />
      </div>
    </div>
  );
}
