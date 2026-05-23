import Navbar from "./Navbar";
import EsteticaSection from "./components/EsteticaSection";
import ExamesSection from "./components/ExamesSection";
import Medicos from "./components/MedicosSection";
import QuemSomos from "./components/QuemSomos";
import Convenios from "./components/Convenios";
import ChatbotIcon from "./components/ChatbotIcon"; 
import FooterComponent from "./components/FooterComponent";// ← linha nova

function App() {
  return (
    <div>
      <Navbar />
      <section id="sobre">
        <QuemSomos />
      </section>
      <section id="exames">
        <ExamesSection />
      </section>
      <section id="estetica">
        <EsteticaSection />
      </section>
      <section id="medicos">
        <Medicos />
      </section>
      <section id="convenios">
        <Convenios />
      </section>
      <section id="contatos">
        <FooterComponent /> {/* ← componente do rodapé */}
      </section>

      <ChatbotIcon /> 
    </div>
  );
}

export default App;