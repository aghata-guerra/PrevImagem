import EsteticaSection from "./components/EsteticaSection"
import ExamesSection from "./components/ExamesSection"
import Medicos from "./components/MedicosSection";
import Convenios from "./components/Convenios"
import QuemSomos from './components/QuemSomos';

function App() {
  return (
    <div>
    <QuemSomos/>
    <ExamesSection/>
    <EsteticaSection/>
    <Medicos/>
    <Convenios/>
    
    </div>
  )
}

export default App;