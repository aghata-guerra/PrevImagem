import React from 'react';
import CardQuemSomos from './CardQuemSomos';

import fotoClinica from '../assets/previmagem_foto.jpeg';
import iconeTime from '../assets/icon-team.png';
import iconeMonitor from '../assets/icon-tech.png';
import iconeUser from '../assets/icon-user.png';
import iconeMissao from '../assets/missao.svg';
import iconeVisao from '../assets/visao.svg';
import iconeValores from '../assets/valores.svg';

export function QuemSomos() {
  return (
    <section className="bg-[#F5F0EB] py-16 px-4 sm:px-6 lg:px-8 font-sans">
      
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-[#F15A24] tracking-wide uppercase">
          QUEM SOMOS
        </h2>
        <div className="w-16 h-[2px] bg-[#F15A24] mx-auto mt-1 mb-3"></div>
        <p className="text-lg text-gray-700 font-normal">
          Clínica especializada em exames e estética avançada
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        
        <div className="w-full rounded-[2.5rem] overflow-hidden">
          <img 
            src={fotoClinica} 
            alt="Fachada Previmagem" 
            className="w-full h-auto max-h-[400px] object-cover"
          />
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-gray-800 leading-relaxed text-[0.95rem]">
            <strong className="font-bold">Há mais de 20 anos</strong> em Paulista, a Previmagem é referência em exames de diagnóstico por imagem, oferecendo atendimento de qualidade, tecnologia de ponta e profissionais altamente qualificados.
          </p>

          <div className="flex flex-col gap-6 mt-2">
            
            <div className="flex items-center gap-4">
              <img src={iconeUser} alt="Ícone Atendimento" className="w-16 h-16 object-contain shrink-0" />
              <div>
                <h3 className="text-base font-bold text-[#F15A24]">Atendimento Humanizado</h3>
                <p className="text-sm text-gray-700 leading-normal">Cuidamos de cada paciente com respeito, atenção e empatia</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <img src={iconeMonitor} alt="Ícone Tecnologia" className="w-16 h-16 object-contain shrink-0" />
              <div>
                <h3 className="text-base font-bold text-[#F15A24]">Tecnologia de Ponta</h3>
                <p className="text-sm text-gray-700 leading-normal">Equipamentos modernos para diagnósticos mais precisos e seguros</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <img src={iconeTime} alt="Ícone Profissionais" className="w-16 h-16 object-contain shrink-0" />
              <div>
                <h3 className="text-base font-bold text-[#F15A24]">Profissionais Qualificados</h3>
                <p className="text-sm text-gray-700 leading-normal">Equipe especializada e comprometida com sua saúde e bem estar</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto text-center mb-12 flex flex-col items-center gap-2">
        <p className="text-gray-800 font-medium text-base">
          Conheça abaixo nossas principais especialidades:
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <CardQuemSomos 
          icone={iconeMissao}
          titulo="Missão"
          descricao="Realizar consultas, exames, procedimentos estéticos e pronto-atendimento, com PADRONIZAÇÃO, qualidade e responsabilidade principalmente para pessoas que se preocupam com saúde, bem estar e beleza, realizados por profissionais capacitados e tecnologia moderna, com PADRONIZAÇÃO e gestão QUALIFICADA."
        />

        <CardQuemSomos 
          icone={iconeVisao}
          titulo="Visão"
          descricao="Ser o mais completo, moderno e valorizado Centro Médico de Paulista, no segmento de exames, estética, consultas e pronto-atendimento com padronização, certificação dos exames e gestão sustentável até dezembro de 2025."
        />

        <CardQuemSomos 
          icone={iconeValores}
          titulo="Valores"
          descricao="• Atendimento Humanizado; • Comprometimento; • Qualidade; • Respeito aos nossos Clientes, parceiros e colaboradores; • Inovação."
        />
      </div>
    </section>
  );
}

export default QuemSomos;