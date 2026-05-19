import BotaoSection from "./BotaoSection";
import CardSections from "./CardSections";

const esteticas = [
  {
    id: 1,
    icone: "",
    titulo: "Preenchimento Labial",
    descricao: "Contorno e volume dos lábios.",
  },
  {
    id: 2,
    icone: "",
    titulo: "Métodos de Emagrecimento",
    descricao:
      "Técnicas avançadas para auxiliar na perda de peso e definição corporal.",
  },
  {
    id: 3,
    icone: "",
    titulo: "Gerenciamento de Pele",
    descricao: "Com orientação de cosméticos e tratamentos.",
  },
];
function EsteticaSection() {
  return (
    <section>
      <h2>Estética</h2>
      <p>
        PROCEDIMENTOS ESTÉTICOS REALIZADOS COM SEGURANÇA, TECNOLOGIA E
        RESULTADOS NATURAIS
      </p>

      <div>
        {esteticas.map((estetica) => (
          <CardSections
            key={estetica.id}
            icone={estetica.icone}
            titulo={estetica.titulo}
            descricao={estetica.descricao}
          />
        ))}
      </div>

      <div>
        <BotaoSection botao="procedimentos" />
      </div>
      <div></div>
    </section>
  );
}

export default EsteticaSection;
