import React from 'react';

export function CardQuemSomos({ icone, titulo, descricao = "" }) {
  const temMarcadores = descricao.includes('•');

  const itens = temMarcadores
    ? descricao
        .split('•')
        .map(txt => txt.trim())
        .filter(txt => txt !== '' && txt !== '.' && txt !== ';')
    : [];

  return (
    <div className="bg-white p-8 sm:p-10 rounded-[2rem] shadow-lg flex flex-col items-center min-h-[440px] w-full max-w-[360px] mx-auto transition-all duration-300 hover:shadow-xl">
      <div className="w-20 h-20 mb-4 flex items-center justify-center shrink-0">
        <img src={icone} alt={`Ícone ${titulo}`} className="w-full h-full object-contain" />
      </div>
    
      <h3 className="text-xl font-bold text-[#F15A24] mb-1 text-center">{titulo}</h3>
      <div className="w-8 h-[2px] bg-[#F15A24] mb-6 mx-auto"></div>
      
      {temMarcadores && itens.length > 0 ? (
        <div className="w-full flex justify-center">
          <ul className="text-gray-700 leading-relaxed text-sm space-y-2 text-left inline-block max-w-[280px]">
            {itens.map((item, index) => {
              const textoFormatado = item.endsWith(';') || item.endsWith('.') ? item : `${item};`;
              return (
                <li key={index} className="flex items-start gap-1.5">
                  <span className="text-[#F15A24] font-bold shrink-0">•</span>
                  <span>{textoFormatado}</span>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <p className="text-gray-700 leading-relaxed text-sm text-center">
          {descricao}
        </p>
      )}
    </div>
  );
}

export default CardQuemSomos;