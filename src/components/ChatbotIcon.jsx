import { useState } from "react";

function ChatbotIcon() {
  const [hover, setHover] = useState(false);
  const [tooltip, setTooltip] = useState(true);

  useState(() => {
    const timer = setTimeout(() => setTooltip(false), 4000);
    return () => clearTimeout(timer);
  });

  return (
    <div style={{ position:"fixed", bottom:"1.75rem", right:"1.75rem", zIndex:9999, display:"flex", flexDirection:"column", alignItems:"flex-end", gap:"0.6rem", fontFamily:"'Segoe UI',Arial,sans-serif" }}>
      {tooltip && (
        <div style={{ backgroundColor:"#fff", border:"1px solid rgba(232,130,12,0.25)", borderRadius:10, padding:"0.55rem 0.85rem", fontSize:"0.82rem", fontWeight:500, color:"#3A3A3A", boxShadow:"0 4px 14px rgba(0,0,0,0.10)", whiteSpace:"nowrap", position:"relative" }}>
          Posso te ajudar? 👋
          <span style={{ position:"absolute", bottom:-7, right:22, width:0, height:0, borderLeft:"7px solid transparent", borderRight:"7px solid transparent", borderTop:"7px solid #fff" }} />
        </div>
      )}
      <button
        aria-label="Abrir chat de atendimento"
        onMouseEnter={() => { setHover(true); setTooltip(true); }}
        onMouseLeave={() => { setHover(false); setTooltip(false); }}
        onClick={() => window.open("https://wa.me/5581983731968","_blank","noopener,noreferrer")}
        style={{ width:58, height:58, borderRadius:"50%", border:"none", cursor:"pointer", backgroundColor: hover ? "#d4740a" : "#E8820C", boxShadow: hover ? "0 6px 24px rgba(232,130,12,0.55)" : "0 4px 16px rgba(232,130,12,0.40)", display:"flex", alignItems:"center", justifyContent:"center", transition:"background-color 0.2s, box-shadow 0.2s, transform 0.2s", transform: hover ? "scale(1.08)" : "scale(1)" }}
      >
        <svg viewBox="0 0 24 24" fill="white" style={{ width:28, height:28 }} aria-hidden="true">
          <path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H6l-2 2V4h16v10z"/>
        </svg>
      </button>
      <style>{`@keyframes chatbot-pulse{0%{box-shadow:0 4px 16px rgba(232,130,12,0.40)}50%{box-shadow:0 4px 28px rgba(232,130,12,0.65)}100%{box-shadow:0 4px 16px rgba(232,130,12,0.40)}}`}</style>
    </div>
  );
}

export default ChatbotIcon;