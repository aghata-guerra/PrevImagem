import CardSections from "./CardSections";
import BotaoSection from "./BotaoSection";
import ginecologista from "../assets/section/ginecologista.svg";
import cardiologista from "../assets/section/cardiologista.svg";
import mastologista from "../assets/section/mastologista.svg";

const medicos = [
  { id: 1, icone: ginecologista, titulo: "Ginecologista", descricao: "Dra. Joelma Tompson", crm: "CRM 10098" },
  { id: 2, icone: cardiologista, titulo: "Cardiologista", descricao: "Dr. Rui Tompson", crm: "CRM: 10950" },
  { id: 3, icone: mastologista, titulo: "Mastologista", descricao: "Dra. Valéria Brito", crm: "CRM: 9086" },
]

function MedicosSection() {
  return (
    <section className="bg-[#F5F0EB] py-12 px-6">
      <h2 className="text-orange-500 text-center font-bold text-2xl uppercase mb-2">Médicos</h2>
      <p className="text-center text-gray-500 text-sm mb-8">Nossos Especialistas:</p>
      <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
        {medicos.map((medico) => (
          <CardSections key={medico.id} icone={medico.icone} titulo={medico.titulo} descricao={medico.descricao} crm={medico.crm} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <BotaoSection botao="especialistas" />
      </div>
    </section>
  )
}
export default MedicosSection;