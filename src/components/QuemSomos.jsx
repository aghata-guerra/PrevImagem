import React from 'react';
import CardSections from './CardSections';

import fotoClinica from '../assets/previmagem_foto.jpeg';
import iconeTime from '../assets/icon-team.png';
import iconeMonitor from '../assets/icon-tech.png';
import iconeUser from '../assets/icon-user.png';
import iconeMissao from '../assets/missao.svg';
import iconeVisao from '../assets/visao.svg';
import iconeValores from '../assets/valores.svg';

export function QuemSomos() {
  return (
    <section>
      <div>
        <h2>QUEM SOMOS</h2>
        <hr />
        <p>Clínica especializada em exames e estética avançada</p>
      </div>

      <div>
        <div>
          <img src={fotoClinica} alt="Fachada Previmagem" />
        </div>

        <div>
          <p>
            <strong>Há mais de 20 anos</strong> em Paulista, a Previmagem é referência em exames de diagnóstico por imagem, oferecendo atendimento de qualidade, tecnologia de ponta e profissionais altamente qualificados.
          </p>

          <div>
            <img src={iconeUser} alt="Ícone Atendimento" />
            <div>
              <h3>Atendimento Humanizado</h3>
              <p>Cuidamos de cada paciente com respeito, atenção e empatia</p>
            </div>
          </div>

          <div>
            <img src={iconeMonitor} alt="Ícone Tecnologia" />
            <div>
              <h3>Tecnologia de Ponta</h3>
              <p>Equipamentos modernos para diagnósticos mais precisos e seguros</p>
            </div>
          </div>

          <div>
            <img src={iconeTime} alt="Ícone Profissionais" />
            <div>
              <h3>Profissionais Qualificados</h3>
              <p>Equipe especializada e comprometida com sua saúde e bem estar</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p>Conheça abaixo nossas principais especialidades:</p>
      </div>

      <div>
        <CardSections 
          icone={iconeMissao}
          titulo="Missão"
          descricao="Realizar consultas, exames, procedimentos estéticos e pronto-atendimento, com PADRONIZAÇÃO, qualidade e responsabilidade principalmente para pessoas que se preocupam com saúde, bem estar e beleza, realizados por profissionais capacitados e tecnologia moderna, com PADRONIZAÇÃO e gestão QUALIFICADA."
        />

        <CardSections 
          icone={iconeVisao}
          titulo="Visão"
          descricao="Ser o mais completo, moderno e valorizado Centro Médico de Paulista, no segmento de exames, estética, consultas e pronto-atendimento com padronização, certificação dos exames e gestão sustentável até dezembro de 2025."
        />

        <CardSections 
          icone={iconeValores}
          titulo="Valores"
          descricao="• Atendimento Humanizado; • Comprometimento; • Qualidade; • Respeito aos nossos Clientes, parceiros e colaboradores; • Inovação."
        />
      </div>

    </section>
  );
}

export default QuemSomos;