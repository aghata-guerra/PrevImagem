import { useState } from "react";
import fotoclinica from "./assets/previmagem_foto.jpeg";
import logoPrevimagem from "./assets/logo.png";
import "./Navbar.css";

// ── Ícones ──────────────────────────────────────────────
function IconeWhatsapp() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ width: 18, height: 18 }}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function IconeFacebook() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ width: 18, height: 18 }}
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function IconeInstagram() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ width: 18, height: 18 }}
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.163 12 18.163s6.162-2.759 6.162-6.162S15.403 5.838 12 5.838zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

// ── Dados ────────────────────────────────────────────────
const linksNavegacao = [
  { rotulo: "Sobre", ancora: "#sobre" },
  { rotulo: "Exames", ancora: "#exames" },
  { rotulo: "Estética", ancora: "#estetica" },
  { rotulo: "Convênios", ancora: "#convenios" },
  { rotulo: "Contatos", ancora: "#contatos" },
];

const redesSociais = [
  {
    icone: <IconeWhatsapp />,
    rotulo: "WhatsApp",
    url: "https://wa.me/5581983731968",
  },
  {
    icone: <IconeFacebook />,
    rotulo: "Facebook",
    url: "https://www.facebook.com/PREVIMAGEM/",
  },
  {
    icone: <IconeInstagram />,
    rotulo: "Instagram",
    url: "https://instagram.com/previmagem",
  },
];

// ── Estilos ──────────────────────────────────────────────
const estilos = {
  cabecalho: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    backgroundColor: "#F5EFE0",
    borderBottom: "1px solid rgba(232,130,12,0.18)",
    boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
    fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
  },
  barraNavegacao: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 2rem",
    height: 64,
    gap: "1rem",
  },
  logoContainer: {
    textDecoration: "none",
    display: "flex",
    flexDirection: "column",
    lineHeight: 1.15,
    flexShrink: 0,
  },
  logoNome: {
    fontSize: "1.2rem",
    fontWeight: 800,
    letterSpacing: "0.08em",
    color: "#E8820C",
    textTransform: "uppercase",
  },
  logoSubtitulo: {
    fontSize: "0.6rem",
    fontWeight: 500,
    color: "#999",
    letterSpacing: "0.04em",
  },
  listaLinks: {
    display: "flex",
    alignItems: "center",
    gap: "0.15rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
    flex: 1,
    justifyContent: "center",
  },
  linkNavegacao: {
    display: "inline-block",
    padding: "0.4rem 0.85rem",
    fontSize: "0.95rem",
    fontWeight: 500,
    color: "#3A3A3A",
    textDecoration: "none",
    borderRadius: 6,
    transition: "color 0.2s, background-color 0.2s",
  },
  areaDireita: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    flexShrink: 0,
  },
  botaoAjuda: {
    display: "flex",
    alignItems: "center",
    gap: "0.35rem",
    padding: "0.35rem 0.7rem 0.35rem 0.45rem",
    fontSize: "0.85rem",
    fontWeight: 600,
    color: "#E8820C",
    textDecoration: "none",
    background: "transparent",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
    whiteSpace: "nowrap",
    transition: "background-color 0.2s",
  },
  listaRedes: {
    display: "flex",
    alignItems: "center",
    gap: "0.2rem",
  },
  linkRede: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 34,
    height: 34,
    borderRadius: "50%",
    color: "#E8820C",
    textDecoration: "none",
    transition: "background-color 0.2s",
  },
};

// ── Componente principal ────────────────────────────────
function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [linkHover, setLinkHover] = useState(null);
  const [redeHover, setRedeHover] = useState(null);

  return (
    <>
      {/* ── NAVBAR ── */}
      <header style={estilos.cabecalho}>
        <nav style={estilos.barraNavegacao}>
          {/* Logo */}

          <a href="#" aria-label="PrevImagem">
            <img
              src={logoPrevimagem}
              alt="Logo PrevImagem"
              style={{ height: 48 }}
            />
          </a>

          {/* Links — desktop */}
          <ul style={estilos.listaLinks}>
            {linksNavegacao.map(({ rotulo, ancora }) => (
              <li key={rotulo}>
                <a
                  href={ancora}
                  style={{
                    ...estilos.linkNavegacao,
                    color: linkHover === rotulo ? "#E8820C" : "#3A3A3A",
                    backgroundColor:
                      linkHover === rotulo
                        ? "rgba(232,130,12,0.08)"
                        : "transparent",
                  }}
                  onMouseEnter={() => setLinkHover(rotulo)}
                  onMouseLeave={() => setLinkHover(null)}
                >
                  {rotulo}
                </a>
              </li>
            ))}
          </ul>

          {/* Área direita */}
          <div style={estilos.areaDireita}>
            <a
              href="https://wa.me/"
              style={estilos.botaoAjuda}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* ícone interrogação */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{ width: 15, height: 15 }}
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              <span>Posso Ajudar?</span>
            </a>

            <div style={estilos.listaRedes}>
              {redesSociais.map(({ icone, rotulo, url }) => (
                <a
                  key={rotulo}
                  href={url}
                  aria-label={rotulo}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    ...estilos.linkRede,
                    backgroundColor:
                      redeHover === rotulo
                        ? "rgba(232,130,12,0.12)"
                        : "transparent",
                  }}
                  onMouseEnter={() => setRedeHover(rotulo)}
                  onMouseLeave={() => setRedeHover(null)}
                >
                  {icone}
                </a>
              ))}
            </div>
          </div>

          {/* Hambúrguer — mobile */}
          <button
            onClick={() => setMenuAberto(!menuAberto)}
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
            style={{
              display: "none",
              flexDirection: "column",
              gap: 5,
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: 4,
            }}
            className="botao-hamburguer"
          >
            <span
              className={`linha ${menuAberto ? "linha-topo-aberta" : ""}`}
            />
            <span
              className={`linha ${menuAberto ? "linha-meio-oculta" : ""}`}
            />
            <span
              className={`linha ${menuAberto ? "linha-base-aberta" : ""}`}
            />
          </button>
        </nav>

        {/* Menu mobile */}
        <div
          className={`menu-mobile ${menuAberto ? "menu-mobile-aberto" : ""}`}
        >
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: "0 1.25rem",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {linksNavegacao.map(({ rotulo, ancora }) => (
              <li key={rotulo}>
                <a
                  href={ancora}
                  onClick={() => setMenuAberto(false)}
                  style={{
                    display: "block",
                    padding: "0.65rem 0.75rem",
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "#3A3A3A",
                    textDecoration: "none",
                    borderRadius: 6,
                  }}
                  className="link-mobile"
                >
                  {rotulo}
                </a>
              </li>
            ))}
          </ul>
          <div
            style={{
              display: "flex",
              gap: 8,
              padding: "0.75rem 1.25rem 1rem",
              borderTop: "1px solid rgba(232,130,12,0.12)",
              marginTop: 8,
            }}
          >
            {redesSociais.map(({ icone, rotulo, url }) => (
              <a
                key={rotulo}
                href={url}
                aria-label={rotulo}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  color: "#E8820C",
                  textDecoration: "none",
                }}
              >
                {icone}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* ── CONTEÚDO DO SITE (placeholder) ── */}

      {/* ── CONTEÚDO DO SITE ── */}
      <main>
        <img
          src={fotoclinica}
          alt="Fachada da clínica PrevImagem"
          style={{ width: "100%", height: "30rem", display: "block" }}
        />
      </main>

      {/* <main style={{ padding: "2rem", textAlign: "center", color: "#555" }}>
        <p>Conteúdo do site aqui...</p>
      </main> */}
    </>
  );
}

export default Navbar;
