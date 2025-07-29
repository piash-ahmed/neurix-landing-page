import Header from "./components/Header";
import OurClients from "./components/OurClients";
import Services from "./components/Services";
import WhyNeurix from "./components/WhyNeurix";

export default function Home() {
  return (
    <>
      <Header />
      <Services />
      <WhyNeurix/>
      <OurClients/>
    </>
  );
}
