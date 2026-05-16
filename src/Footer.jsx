import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import logoImg from './assets/logo.png'
import './Footer.css'

const IconeTelefone = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 flex-shrink-0 text-orange-400"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.07 2.18a2 2 0 012-2.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.6 6.6l1.79-1.79a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
)

const IconeWhatsApp = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 flex-shrink-0 text-orange-400"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
)

const IconeEmail = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 flex-shrink-0 text-orange-400"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M2 7l10 7 10-7" />
  </svg>
)

const IconeLocalizacao = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 flex-shrink-0 mt-0.5 text-orange-400"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const IconeRelogio = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 flex-shrink-0 mt-0.5 text-orange-400"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)

// ─── Dados do rodapé ──────────────────────────────────────

const dadosContato = [
  { icone: <IconeTelefone />, texto: '(81) 3433 - 1468',          href: 'tel:+558134331468'          },
  { icone: <IconeTelefone />, texto: '(81) 3020 - 9153',          href: 'tel:+558130209153'          },
  { icone: <IconeTelefone />, texto: '(81) 3372 - 3971',          href: 'tel:+558133723971'          },
  { icone: <IconeWhatsApp />, texto: '(81) 98373 - 1968',         href: 'https://wa.me/5581983731968' },
  { icone: <IconeEmail />,    texto: 'adm.previmagem@gmail.com',  href: 'mailto:adm.previmagem@gmail.com' },
]

const linksNavegacao = [
  { rotulo: 'PreviNews',              href: '#' },
  { rotulo: 'Política de Privacidade', href: '#' },
  { rotulo: 'Controle de Qualidade',  href: '#' },
]

// ─── Componente Principal ─────────────────────────────────

const Rodape = () => {
  return (
    <footer id="rodape" className="bg-[#484848] text-gray-300">

      {/* Grade principal */}
      <div
        id="rodape-grade"
        className="
          max-w-6xl mx-auto
          grid grid-cols-1 gap-10
          sm:grid-cols-2
          lg:grid-cols-4
          px-8 py-12
        "
      >

        {/* ── Coluna 1: Marca ── */}
        <div id="coluna-marca" className="flex flex-col gap-4">

          <div id="logo-grupo">
            {/* <p
              id="logo-nome"
              className="
                text-orange-500 font-black text-xl
                tracking-[0.22em] uppercase leading-tight
              "
            >
              PREVIMAGEM
            </p>
            <p id="logo-subtitulo" className="text-orange-400 text-[11px] font-medium tracking-wide">
              Exames de Imagem
            </p> */}
            <img
              src={logoImg}
              alt="Previmagem – Exames de Imagem"
              className="w-40 object-contain"
            />
          </div>

          <p
            id="texto-descricao"
            className="text-sm text-gray-400 text-justify leading-relaxed"
          >
            Há mais de 20 anos cuidando da sua saúde com tecnologia de ponta e
            atendimento humanizado em Paulista, PE.
          </p>

          <div id="informacoes-legais" className="mt-auto space-y-1">
            <p className="texto-legal text-xs text-gray-500">
              Direitos Reservados ® 2022 – Previmagem
            </p>
            <p className="texto-legal text-xs text-gray-500">
              CNPJ 01.100.989/0001-78
            </p>
          </div>

        </div>

        {/* ── Coluna 2: Contato ── */}
        <div id="coluna-contato" className="flex flex-col gap-4">

          <h3
            className="
              titulo-secao
              text-white font-semibold text-[15px]
              text-center tracking-wide
            "
          >
            Contato
          </h3>

          <ul id="lista-contato" className="space-y-[10px]">
            {dadosContato.map((item, indice) => (
              <li
                key={indice}
                className="item-contato flex items-center gap-3 text-sm text-gray-300"
              >
                {item.icone}
                <span>{item.texto}</span>
              </li>
            ))}
          </ul>

        </div>

        {/* ── Coluna 3: Localização ── */}
        <div id="coluna-localizacao" className="flex flex-col gap-4">

          <h3
            className="
              titulo-secao
              text-white font-semibold text-[15px]
              text-center tracking-wide
            "
          >
            Localização
          </h3>

          <div id="dados-localizacao" className="space-y-4">

            <div id="bloco-endereco" className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed">
              <IconeLocalizacao />
              <address className="not-italic">
                Travessa da R. da Mangueira, 746 · Centro,
                Paulista - PE, 53401-273, Brasil
              </address>
            </div>

            <div id="bloco-horario" className="flex items-start gap-3 text-sm text-gray-300">
              <IconeRelogio />
              <div id="texto-horario" className="leading-relaxed">
                <p>Seg - Sex: 7h às 17h</p>
                <p>Sáb. 8 às 12h</p>
              </div>
            </div>

          </div>
        </div>

        {/* ── Coluna 4: Links ── */}
        <div
          id="coluna-links"
          className="
            flex flex-col items-center
            gap-5 pt-1
            sm:items-start lg:items-center
          "
        >
          {linksNavegacao.map((link, indice) => (
            <a
              key={indice}
              href={link.href}
              className="
                link-navegacao
                text-white text-sm font-medium text-center
                hover:text-orange-400
                transition-colors duration-200
                cursor-pointer
              "
            >
              {link.rotulo}
            </a>
          ))}
        </div>

      </div>

      {/* Linha divisória inferior */}
      <div id="rodape-linha-inferior" className="border-t border-white/10">
        <p className="texto-rodape-inferior text-center text-xs text-gray-600 py-4 px-6">
          © 2022 Previmagem – Todos os direitos reservados.
        </p>
      </div>

    </footer>
  )
}

export default Rodape