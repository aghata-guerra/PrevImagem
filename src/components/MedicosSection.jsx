import CardSections from "./CardSections";
import BotaoSection from "./BotaoSection";

const medicos = [
  {
    id: 1,
    icone: "",
    titulo: "Ginecologista",
    descricao: "Dra. Joelma Tompson",
    crm: "CRM 10098",
  },
  {
    id: 2,
    icone: "",
    titulo: "Cardiologista",
    descricao: "Dr. Rui Tompson ",
    crm: "CRM: 10950",
  },
  {
    id: 3,
    icone: "",
    titulo: "Mastologista",
    descricao: "Dra. Valéria Brito",
    crm: "CRM: 9086",
  },
];

function MedicosSection() {
  return (
    <section>
      <h2>MÉDICOS</h2>
      <p>NOSSOS ESPECIALISTAS:</p>

      <div>
        {medicos.map((medico) => (
          <CardSections
            key={medico.id}
            icone={medico.icone}
            titulo={medico.titulo}
            descricao={medico.descricao}
            crm={medico.crm}
          />
        ))}
      </div>

      <div>
        <BotaoSection botao="especialistas" />
      </div>
      <div></div>
    </section>
  );
}
export default MedicosSection;
