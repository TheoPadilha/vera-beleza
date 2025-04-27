import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Servicos from "./components/Servicos";
import Localizacao from "./components/Localizacao";
import Depoimento from "./components/Depoimento";
import Footer from "./components/Footer";
import SpaServicesSection from "./components/SpaServicesSection"

function App() {
  return (
    <>
      <Hero />
      <Sobre />
      <SpaServicesSection />
      <Servicos />
      <Depoimento />
      <Localizacao />
      <Footer />
    </>
  );
}

export default App;
