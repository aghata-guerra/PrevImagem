import CardSections from "./CardSections";
import BotaoSection from "./BotaoSection";
import labios from "../assets/section/labios.svg";
import emagrecimento from "../assets/section/metodos-de-emagrecimento.svg";
import cuidadosFaciais from "../assets/section/cuidados-faciais.svg";

const procedimentos = [
  { id: 1, icone: labios, titulo: "Preenchimento Labial", descricao: "Contorno e volume dos lábios." },
  { id: 2, icone: emagrecimento, titulo: "Métodos de Emagrecimento", descricao: "Técnicas avançadas para auxiliar na perda de peso e definição corporal." },
  { id: 3, icone: cuidadosFaciais, titulo: "Gerenciamento de Pele", descricao: "Com orientação de cosméticos e tratamentos." },
]

function EsteticaSection() {
  return (
    <section className="bg-white py-12 px-6">
      <h2 className="text-orange-500 text-center font-bold text-2xl uppercase mb-2">Estética</h2>
      <p className="text-center text-gray-500 text-sm mb-8">Procedimentos estéticos realizados com segurança, tecnologia e resultados naturais.</p>
      <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
        {procedimentos.map((procedimento) => (
          <CardSections key={procedimento.id} icone={procedimento.icone} titulo={procedimento.titulo} descricao={procedimento.descricao} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <BotaoSection botao="procedimentos" />
      </div>
    </section>
  )
}
export default EsteticaSection;