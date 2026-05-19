import Navbar from "./Navbar";
import EsteticaSection from "./components/EsteticaSection";
import ExamesSection from "./components/ExamesSection";
import Medicos from "./components/MedicosSection";
import Convenios from "./components/Convenios";

function App() {
  return (
    <div>
      <Navbar />
      {/* Coloquei section para linkar com a navbar */}
      <section id="sobre">
        {/* < Coloca o componente do "sobre" aqui /> */}
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
        {/* < Coloca o componente dos "contatos" aqui /> */}
      </section>
    </div>
  );
}
export default App;
