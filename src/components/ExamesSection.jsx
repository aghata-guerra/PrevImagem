import CardSections from "./CardSections";
import BotaoSection from "./BotaoSection";
import ultrassom from "../assets/section/ultrassom.svg";
import raioX from "../assets/section/raio-x.svg";
import mamografia from "../assets/section/mamografia.svg";

const exames = [
  { id: 1, icone: ultrassom, titulo: "Ultrassom", descricao: "Exames de imagem por ultrassom, utilizados para análise interna do corpo." },
  { id: 2, icone: raioX, titulo: "Raio-X", descricao: "Exames de radiografia para avaliação de ossos e estruturas internas." },
  { id: 3, icone: mamografia, titulo: "Mamografia", descricao: "Exames de imagem das mamas utilizados para detecção precoce de alterações." },
]

function ExamesSection() {
  return (
    <section className="bg-[#F5F0EB] py-12 px-6">
      <h2 className="text-orange-500 text-center font-bold text-2xl uppercase mb-2">Exames e Serviços</h2>
      <p className="text-center text-gray-500 text-sm mb-8">Veja alguns dos nossos exames:</p>
      <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
        {exames.map((exame) => (
          <CardSections key={exame.id} icone={exame.icone} titulo={exame.titulo} descricao={exame.descricao} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <BotaoSection botao="exames" />
      </div>
    </section>
  )
}
export default ExamesSection;