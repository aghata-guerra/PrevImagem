import { useState, useEffect, useRef } from "react";

// ── PALETA DE CORES DA MARCA ──────────────────────────────────────
const C = {
  primary: "#E8820C",
  primaryDark: "#c96d08",
  primaryLight: "rgba(232,130,12,0.12)",
  primaryBorder: "rgba(232,130,12,0.25)",
  bg: "#F5EFE0",
  surface: "#FFFFFF",
  text: "#2C2C2C",
  textMuted: "#777",
  userBubble: "#E8820C",
  botBubble: "#FFFFFF",
  shadow: "0 8px 40px rgba(0,0,0,0.18)",
};

// ── ÁRVORE DE FLUXO DO CHATBOT (AQUI ESTÁ A MUDANÇA DOS TEXTOS) ───────────────────────────
const FLOW = {
  start: {
    id: "start",
    from: "bot",
    messages: [
      "Olá! 👋 Sou a **Previ**, assistente virtual da Clínica Previmagem.",
      "Para iniciarmos seu atendimento e garantirmos a segurança dos seus dados, precisamos que você concorde com nossos **Termos de Uso e Política de Privacidade (LGPD)**.",
    ],
    options: [
      { label: "✅ Li e concordo — iniciar atendimento", next: "menu_principal" },
      { label: "❌ Não concordo", next: "encerrar_lgpd" },
    ],
  },
  encerrar_lgpd: {
    id: "encerrar_lgpd",
    from: "bot",
    messages: [
      "Tudo bem! Sem o consentimento não podemos prosseguir com o atendimento.",
      "Se mudar de ideia, é só nos chamar de novo. Até logo! 😊",
    ],
    options: [{ label: "↩ Voltar ao início", next: "start" }],
  },
  menu_principal: {
    id: "menu_principal",
    from: "bot",
    messages: ["Obrigado! Como posso te ajudar hoje? Escolha uma opção:"],
    options: [
      { label: "📅 Agendar atendimento", next: "agendar_tipo" },
      { label: "💰 Valores de exames", next: "valores_exames" },
      { label: "🔬 Informações de exames", next: "info_exames" },
      { label: "💳 Convênios aceitos", next: "convenios" },
      { label: "📋 Resultado de exames", next: "resultado_exames" },
      { label: "✨ Estética", next: "estetica" },
      { label: "🩺 Consultas", next: "consultas" },
      { label: "🏥 Sobre a clínica", next: "sobre_clinica" },
    ],
  },

  // ── SETOR DE AGENDAMENTO ──
  agendar_tipo: {
    id: "agendar_tipo",
    from: "bot",
    messages: ["Ótimo! Qual procedimento você deseja agendar?"],
    options: [
      { label: "🔊 Ultrassom", next: "agendar_ultrassom" },
      { label: "🩻 Mamografia", next: "agendar_mamografia" },
      { label: "☢️ Raio-X", next: "agendar_raiox" },
      { label: "🧪 Exames Laboratoriais", next: "redirect_lab" },
      { label: "📋 Outros exames", next: "agendar_outros" },
      { label: "↩ Voltar", next: "menu_principal" },
    ],
  },
  agendar_ultrassom: {
    id: "agendar_ultrassom",
    from: "bot",
    messages: [
      "**Ultrassom** ✅\n\n💳 Aceita convênio e particular\n💵 Valor normal: R$ 200,00\n💚 Desconto dinheiro: **R$ 160,00**\n✅ Aceita: Pix, Cartão e Dinheiro",
      "Como deseja realizar?",
    ],
    options: [
      { label: "💳 Pelo Convênio", next: "coletar_dados_convenio" },
      { label: "💵 Particular", next: "coletar_dados_particular" },
      { label: "↩ Voltar", next: "agendar_tipo" },
    ],
  },
  agendar_mamografia: {
    id: "agendar_mamografia",
    from: "bot",
    messages: [
      "**Mamografia** ✅\n\n💳 Aceita convênio e particular\n💵 Valor particular: R$ 180,00\n💚 Desconto dinheiro: **R$ 150,00**\n✅ Aceita: Pix, Cartão e Dinheiro",
      "Como deseja realizar?",
    ],
    options: [
      { label: "💳 Pelo Convênio", next: "coletar_dados_convenio" },
      { label: "💵 Particular", next: "coletar_dados_particular" },
      { label: "↩ Voltar", next: "agendar_tipo" },
    ],
  },
  agendar_raiox: {
    id: "agendar_raiox",
    from: "bot",
    messages: [
      "**Raio-X** ✅\n\n💳 Aceita convênio e particular\n💵 Valor particular: R$ 90,00\n💚 Desconto dinheiro: **R$ 75,00**\n✅ Aceita: Pix, Cartão e Dinheiro",
      "Como deseja realizar?",
    ],
    options: [
      { label: "💳 Pelo Convênio", next: "coletar_dados_convenio" },
      { label: "💵 Particular", next: "coletar_dados_particular" },
      { label: "↩ Voltar", next: "agendar_tipo" },
    ],
  },
  redirect_lab: {
    id: "redirect_lab",
    from: "bot",
    messages: [
      "Os **Exames Laboratoriais** possuem atendimento exclusivo! 🧪",
      "Estou te redirecionando para o setor especializado. Por favor, entre em contato pelo número específico: **(81) 3333-4444**",
      "Ou clique abaixo para ser direcionado agora:",
    ],
    options: [
      { label: "📞 Falar com Laboratório", next: "whatsapp_lab", isExternal: true, url: "https://wa.me/5581983731968" },
      { label: "↩ Voltar ao menu", next: "menu_principal" },
    ],
  },
  agendar_outros: {
    id: "agendar_outros",
    from: "bot",
    messages: [
      "Para outros exames, nosso time pode te orientar melhor! 🩺",
      "Vou te conectar com nossa equipe de atendimento.",
    ],
    options: [
      { label: "💬 Falar com atendente", next: "encaminhar_humano" },
      { label: "↩ Voltar", next: "agendar_tipo" },
    ],
  },

  // ── COLETA DE DADOS (CRIAÇÃO DO CADASTRO) ──
  coletar_dados_particular: {
    id: "coletar_dados_particular",
    from: "bot",
    messages: [
      "⭐ **Ótima escolha!** Como pagante particular, você terá **prioridade de atendimento** na nossa fila.",
      "Para agilizar seu cadastro, preciso de algumas informações. Digite seu **nome completo**:",
    ],
    inputType: "nome",
    nextAfterInput: "coletar_cpf_particular",
  },
  coletar_cpf_particular: {
    id: "coletar_cpf_particular",
    from: "bot",
    messages: ["Perfeito! Agora, digite seu **CPF** (apenas números):"],
    inputType: "cpf",
    nextAfterInput: "coletar_email_particular",
  },
  coletar_email_particular: {
    id: "coletar_email_particular",
    from: "bot",
    messages: ["Ótimo! Qual seu **e-mail** para confirmação?"],
    inputType: "email",
    nextAfterInput: "agendamento_confirmado_particular",
  },

  // 💥 TEXTO ALTERADO ABAIXO: Orienta o cliente a dar o clique final no WhatsApp
  agendamento_confirmado_particular: {
    id: "agendamento_confirmado_particular",
    from: "bot",
    messages: [
      "✅ **Dados guardados com sucesso!**",
      "Sua ficha foi gerada. Para finalizar, clique no botão abaixo e, quando o aplicativo abrir, **clique no botão de ENVIAR do WhatsApp**.",
      "📋 *Seus dados já irão totalmente preenchidos na mensagem automática!* Basta um clique para enviar à nossa equipe de recepção.",
    ],
    options: [
      { label: "💬 Enviar Ficha e Concluir no WhatsApp", isWhatsAppDynamic: true },
      { label: "🏠 Voltar ao menu", next: "menu_principal" },
    ],
  },

  coletar_dados_convenio: {
    id: "coletar_dados_convenio",
    from: "bot",
    messages: [
      "Perfeito! Para agendamento por convênio, preciso de algumas informações. Digite seu **nome completo**:",
    ],
    inputType: "nome",
    nextAfterInput: "coletar_cpf_convenio",
  },
  coletar_cpf_convenio: {
    id: "coletar_cpf_convenio",
    from: "bot",
    messages: ["Agora, digite seu **CPF** (apenas números):"],
    inputType: "cpf",
    nextAfterInput: "coletar_convenio_nome",
  },
  coletar_convenio_nome: {
    id: "coletar_convenio_nome",
    from: "bot",
    messages: ["Qual o nome do seu **convênio**?"],
    inputType: "convenio_nome",
    nextAfterInput: "agendamento_confirmado_convenio",
  },

  // 💥 TEXTO ALTERADO ABAIXO: Orienta o cliente do Convênio
  agendamento_confirmado_convenio: {
    id: "agendamento_confirmado_convenio",
    from: "bot",
    messages: [
      "✅ **Dados guardados com sucesso!**",
      "Para validar a cobertura do seu plano, clique no botão abaixo. Assim que abrir seu WhatsApp, **basta carregar no botão de ENVIAR**.",
      "📋 *Sua ficha já foi digitada pelo robô!* Só precisa do seu clique final de envio.",
      "⚠️ **Lembre-se:** traga sua **carteirinha do convênio** e o **pedido médico** no dia do exame.",
    ],
    options: [
      { label: "💬 Enviar Dados via WhatsApp", isWhatsAppDynamic: true },
      { label: "🏠 Voltar ao menu", next: "menu_principal" },
    ],
  },

  // ── SEÇÃO DE VALORES ──
  valores_exames: {
    id: "valores_exames",
    from: "bot",
    messages: ["Sobre qual exame você quer saber o valor?"],
    options: [
      { label: "🔊 Ultrassom", next: "valor_ultrassom" },
      { label: "🩻 Mamografia", next: "valor_mamografia" },
      { label: "☢️ Raio-X", next: "valor_raiox" },
      { label: "🩺 Consultas", next: "consultas" },
      { label: "↩ Voltar", next: "menu_principal" },
    ],
  },
  valor_ultrassom: {
    id: "valor_ultrassom",
    from: "bot",
    messages: [
      "**Tabela de valores — Ultrassom** 🔊\n\n💳 Convênio: Cobertura conforme plano\n💵 Particular: R$ 200,00\n💚 Desconto à vista/dinheiro: **R$ 160,00** (20% off)\n\n✅ Aceita: Pix, Cartão de Crédito/Débito e Dinheiro",
    ],
    options: [
      { label: "📅 Agendar agora", next: "agendar_ultrassom" },
      { label: "↩ Voltar aos valores", next: "valores_exames" },
    ],
  },
  valor_mamografia: {
    id: "valor_mamografia",
    from: "bot",
    messages: [
      "**Tabela de valores — Mamografia** 🩻\n\n💳 Convênio: Cobertura conforme plano\n💵 Particular: R$ 180,00\n💚 Desconto à vista/dinheiro: **R$ 150,00** (17% off)\n\n✅ Aceita: Pix, Cartão de Crédito/Débito e Dinheiro",
    ],
    options: [
      { label: "📅 Agendar agora", next: "agendar_mamografia" },
      { label: "↩ Voltar aos valores", next: "valores_exames" },
    ],
  },
  valor_raiox: {
    id: "valor_raiox",
    from: "bot",
    messages: [
      "**Tabela de valores — Raio-X** ☢️\n\n💳 Convênio: Cobertura conforme plano\n💵 Particular: R$ 90,00\n💚 Desconto à vista/dinheiro: **R$ 75,00** (17% off)\n\n✅ Aceita: Pix, Cartão de Crédito/Débito e Dinheiro",
    ],
    options: [
      { label: "📅 Agendar agora", next: "agendar_raiox" },
      { label: "↩ Voltar aos valores", next: "valores_exames" },
    ],
  },

  // ── PREPARO E INFORMAÇÕES DE EXAMES ──
  info_exames: {
    id: "info_exames",
    from: "bot",
    messages: ["Sobre qual exame você precisa de informações?"],
    options: [
      { label: "🔊 Ultrassom", next: "info_ultrassom" },
      { label: "🩻 Mamografia", next: "info_mamografia" },
      { label: "☢️ Raio-X", next: "info_raiox" },
      { label: "↩ Voltar", next: "menu_principal" },
    ],
  },
  info_ultrassom: {
    id: "info_ultrassom",
    from: "bot",
    messages: [
      "**Ultrassom** 🔊\n\n📌 O que é: Exame de imagem que usa ondas sonoras para visualizar órgãos internos\n⏱ Duração: 20–40 minutos\n📋 Precisa de pedido médico: Sim\n💧 Preparo: Varia conforme a região examinada (geralmente jejum ou bexiga cheia)\n💳 Aceita convênio: Sim",
    ],
    options: [
      { label: "📅 Agendar Ultrassom", next: "agendar_ultrassom" },
      { label: "↩ Outros exames", next: "info_exames" },
    ],
  },
  info_mamografia: {
    id: "info_mamografia",
    from: "bot",
    messages: [
      "**Mamografia** 🩻\n\n📌 O que é: Exame de raio-X das mamas para detecção precoce do câncer\n⏱ Duração: 15–20 minutos\n📋 Precisa de pedido médico: Sim\n🚫 Preparo: Não usar desodorante, talco ou creme no dia\n💳 Aceita convênio: Sim",
    ],
    options: [
      { label: "📅 Agendar Mamografia", next: "agendar_mamografia" },
      { label: "↩ Outros exames", next: "info_exames" },
    ],
  },
  info_raiox: {
    id: "info_raiox",
    from: "bot",
    messages: [
      "**Raio-X** ☢️\n\n📌 O que é: Exame de imagem que usa radiação para visualizar ossos e tecidos\n⏱ Duração: 5–10 minutos\n📋 Precisa de pedido médico: Sim\n✅ Preparo: Sem preparo especial\n💳 Aceita convênio: Sim",
    ],
    options: [
      { label: "📅 Agendar Raio-X", next: "agendar_raiox" },
      { label: "↩ Outros exames", next: "info_exames" },
    ],
  },

  // ── OUTROS SETORES DA CLÍNICA ──
  convenios: {
    id: "convenios",
    from: "bot",
    messages: [
      "**Convênios aceitos** 💳\n\nTrabalhamos com os principais planos de saúde:\n\n✅ Amil\n✅ Bradesco Saúde\n✅ Hapvida\n✅ NotreDame\n✅ SulAmérica\n✅ Camed\n✅ Cassi\n✅ Fachesf\n✅ Geap\n✅ Mediservice\n✅ Sassepe\n✅ E outros...",
      "⚠️ **Atenção:** Consultas e alguns procedimentos são aceitos **apenas em dinheiro**, independente do convênio.",
    ],
    options: [
      { label: "📅 Agendar com convênio", next: "agendar_tipo" },
      { label: "↩ Voltar ao menu", next: "menu_principal" },
    ],
  },
  resultado_exames: {
    id: "resultado_exames",
    from: "bot",
    messages: [
      "📋 **Resultado de Exames**",
      "Para consultar resultados, você será direcionado para nosso setor específico com **prioridade máxima**.",
      "Nuestra equipe especializada irá te atender em instantes.",
    ],
    options: [
      { label: "📞 Falar sobre resultado agora", next: "encaminhar_humano" },
      { label: "↩ Voltar ao menu", next: "menu_principal" },
    ],
  },
  estetica: {
    id: "estetica",
    from: "bot",
    messages: [
      "✨ **Setor de Estética**",
      "Nossos procedimentos estéticos possuem **atendimento exclusivo e personalizado**!\n\n💉 Botox\n💆 Drenagem Linfática\n🌿 Limpeza de Pele\n💅 E muito mais...",
      "⚠️ **Importante:** O setor de estética **não aceita convênios**, mas oferecemos **descontos especiais** para pagamento em dinheiro!",
      "Vou te redirecionar para nossa especialista em Estética. Aguarde um instante... ✨",
    ],
    options: [
      { label: "💬 Falar com especialista em Estética", next: "encaminhar_estetica" },
      { label: "↩ Voltar ao menu", next: "menu_principal" },
    ],
  },
  encaminhar_estetica: {
    id: "encaminhar_estetica",
    from: "bot",
    messages: [
      "Perfeito! Você será atendida pela nossa especialista em Estética. 💅",
      "Clique abaixo para iniciar a conversa:",
    ],
    options: [
      { label: "✨ Abrir WhatsApp — Estética", next: "whatsapp_estetica", isExternal: true, url: "https://wa.me/5581983731968" },
      { label: "↩ Voltar ao menu", next: "menu_principal" },
    ],
  },
  consultas: {
    id: "consultas",
    from: "bot",
    messages: [
      "🩺 **Consultas Médicas**\n\n⚠️ **Atenção sobre pagamento:**\nConsultas são aceitas **exclusivamente em dinheiro** — não aceitamos convênios para consultas.\n\n💵 Valores a partir de R$ 150,00\n✅ Aceita: Dinheiro e Pix",
      "Deseja agendar uma consulta?",
    ],
    options: [
      { label: "📅 Sim, agendar consulta", next: "coletar_dados_particular" },
      { label: "❓ Tenho dúvidas", next: "encaminhar_humano" },
      { label: "↩ Voltar ao menu", next: "menu_principal" },
    ],
  },
  sobre_clinica: {
    id: "sobre_clinica",
    from: "bot",
    messages: [
      "🏥 **Clínica Previmagem**\n\nSomos especializados em exames de imagem diagnóstica, com tecnologia de ponta e equipe altamente qualificada.\n\n📍 **Localização:** Paulista – PE\n⏰ **Horários:**\nSeg–Sex: 07h às 18h\nSábado: 07h às 12h\n\n📞 **(81) 98373-1968**",
    ],
    options: [
      { label: "📅 Agendar atendimento", next: "agendar_tipo" },
      { label: "📞 Falar com atendente", next: "encaminhar_humano" },
      { label: "↩ Voltar ao menu", next: "menu_principal" },
    ],
  },
  encaminhar_humano: {
    id: "encaminhar_humano",
    from: "bot",
    messages: [
      "Vou te conectar com nossa equipe de atendimento agora! 👩‍💼",
      "Clique abaixo para abrir o WhatsApp e ser atendido em instantes:",
    ],
    options: [
      { label: "💬 Abrir WhatsApp agora", next: "whatsapp_atendimento", isExternal: true, url: "https://wa.me/5581983731968" },
      { label: "🏠 Voltar ao menu", next: "menu_principal" },
    ],
  },

  // ── SEÇÃO DE PALAVRAS DE CRISE (GATILHO OUVIDORIA) ──
  gatilho_gerencia: {
    id: "gatilho_gerencia",
    from: "bot",
    messages: [
      "Entendo sua insatisfação e peço sinceras desculpas pelo transtorno. 🙏",
      "Estou **interrompendo o atendimento virtual** e transferindo seu caso com **prioridade máxima** diretamente para nossa **gerência**.",
      "Um responsável falará com você em instantes.",
    ],
    options: [
      { label: "📞 Falar com a Gerência agora", next: "whatsapp_gerencia", isExternal: true, url: "https://wa.me/5581983731968" },
    ],
  },
};

// Palavras-chave que jogam o usuário direto para a Gerência/Ouvidoria se houver reclamação
const CRISIS_TRIGGERS = ["procon", "processo", "advogado", "reclamar", "denúncia", "denuncia", "absurdo", "ridículo", "ridiculo", "juiz"];

// Componente auxiliar para renderizar textos em **negrito** e quebras de linha `\n`
function RenderText({ text }) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return (
    <span>
      {parts.map((part, i) =>
        i % 2 === 1 ? <strong key={i}>{part}</strong> : part.split("\n").map((line, j, arr) => (
          <span key={j}>{line}{j < arr.length - 1 && <br />}</span>
        ))
      )}
    </span>
  );
}

// Ícone do Avatar do Robô (Previ)
function BotAvatar() {
  return (
    <div style={{
      width: 32, height: 32, borderRadius: "50%",
      background: "linear-gradient(135deg, #E8820C, #f5a742)",
      display: "flex", alignItems: "center", justifyContent: "center",
      flexShrink: 0, boxShadow: "0 2px 8px rgba(232,130,12,0.35)",
    }}>
      <svg viewBox="0 0 24 24" fill="white" style={{ width: 17, height: 17 }}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    </div>
  );
}

// Animação de três pontinhos piscando enquanto o bot "digita"
function TypingIndicator() {
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 8, padding: "4px 0" }}>
      <BotAvatar />
      <div style={{
        background: C.botBubble,
        border: `1px solid ${C.primaryBorder}`,
        borderRadius: "18px 18px 18px 4px",
        padding: "10px 16px",
        display: "flex", gap: 5, alignItems: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}>
        {[0, 1, 2].map(i => (
          <span key={i} style={{
            width: 7, height: 7, borderRadius: "50%",
            background: C.primary,
            animation: `dotBounce 1.2s ease-in-out ${i * 0.2}s infinite`,
            display: "inline-block",
          }} />
        ))}
      </div>
    </div>
  );
}

// ── COMPONENTE PRINCIPAL EXPORTADO ─────────────────────────────────
export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [tooltip, setTooltip] = useState(true);
  const [messages, setMessages] = useState([]);
  const [currentStep, setCurrentStep] = useState("start");
  const [typing, setTyping] = useState(false);
  const [inputMode, setInputMode] = useState(null); 
  const [inputValue, setInputValue] = useState("");
  const [collectedData, setCollectedData] = useState({});
  const [pulse, setPulse] = useState(true);
  const endRef = useRef(null);
  const inputRef = useRef(null);

  // Esconder a caixinha de aviso (tooltip) após 5 segundos
  useEffect(() => {
    const t = setTimeout(() => setTooltip(false), 5000);
    return () => clearTimeout(t);
  }, []);

  // Para o efeito de pulsação assim que abrir o chat pela primeira vez
  useEffect(() => {
    if (open) setPulse(false);
  }, [open]);

  // Joga a barra de rolagem automática para a última mensagem
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  // Coloca o foco do cursor na caixa de texto quando for hora de digitar nome/cpf
  useEffect(() => {
    if (inputMode && open) inputRef.current?.focus();
  }, [inputMode, open]);

  // Dispara a mensagem inicial de termos de uso quando abre o chat
  useEffect(() => {
    if (open && messages.length === 0) {
      loadStep("start");
    }
  }, [open]);

  // Função responsável por carregar cada nó de mensagens da árvore FLOW
  async function loadStep(stepId) {
    const step = FLOW[stepId];
    if (!step) return;
    setCurrentStep(stepId);
    setTyping(true);
    setInputMode(null);

    // Mostra mensagem por mensagem simulando tempo humano de digitação
    for (let i = 0; i < step.messages.length; i++) {
      await delay(i === 0 ? 600 : 900);
      setMessages(prev => [...prev, { from: "bot", text: step.messages[i], id: Date.now() + i }]);
    }

    await delay(400);
    setTyping(false);

    // Se a etapa atual pedir entrada de dados por teclado do usuário, ativa a caixa de texto
    if (step.inputType) {
      setInputMode({ type: step.inputType, nextStep: step.nextAfterInput });
    }
  }

  function delay(ms) {
    return new Promise(res => setTimeout(res, ms));
  }

 // 🔥 CRIAÇÃO MÁGICA DO LINK DO WHATSAPP COM OS DADOS COLETADOS DO FORMULÁRIO 🔥
  const abrirWhatsAppDinamico = () => {
    const numeroClinica = "5581983731968";

    let mensagem = `*NOVO AGENDAMENTO VIA CHATBOT* 🤖📅\n\n`;
    mensagem += `*Paciente:* ${collectedData.nome || "Não informado"}\n`;
    mensagem += `*CPF:* ${collectedData.cpf || "Não informado"}\n`;

    if (collectedData.tipoAgendamento === "Particular") {
      mensagem += `*E-mail:* ${collectedData.email || "Não informado"}\n`;
      mensagem += `*Tipo:* Particular 💵\n`;
      mensagem += `*Procedimento/Exame:* ${collectedData.exame || "Não informado"}\n`;
      mensagem += `*Valor:* ${collectedData.valorParticular || "Sob consulta"}\n\n`;
      mensagem += `Olá! Acabei de preencher minha ficha pelo chat do site. Seguem as minhas informações acima para conclusão do agendamento! ✅`;
    } else {
      mensagem += `*Tipo:* Convênio 💳\n`;
      mensagem += `*Plano/Convênio:* ${collectedData.convenio_nome || "Não informado"}\n`;
      mensagem += `*Procedimento/Exame:* ${collectedData.exame || "Não informado"}\n\n`;
      mensagem += `Olá! Acabei de preencher minha ficha pelo chat do site. Seguem as minhas informações acima para validação da cobertura do meu plano! ✅`;
    }

    // Codifica o texto para formato de URL segura e dispara uma nova aba
    const urlWhatsApp = `https://wa.me/${numeroClinica}?text=${encodeURIComponent(mensagem)}`;
    window.open(urlWhatsApp, "_blank", "noopener,noreferrer");
  };

  // Gerencia o clique nos botões de opções do menu
  function handleOption(option) {
    // Guarda o nome do exame e valor com base no botão clicado
    if (option.next === "agendar_ultrassom") {
      setCollectedData(prev => ({ ...prev, exame: "Ultrassom", valorParticular: "R$ 160,00" }));
    } else if (option.next === "agendar_mamografia") {
      setCollectedData(prev => ({ ...prev, exame: "Mamografia", valorParticular: "R$ 150,00" }));
    } else if (option.next === "agendar_raiox") {
      setCollectedData(prev => ({ ...prev, exame: "Raio-X", valorParticular: "R$ 75,00" }));
    } else if (option.next === "coletar_dados_particular" && currentStep === "consultas") {
      setCollectedData(prev => ({ ...prev, exame: "Consulta Médica", valorParticular: "A partir de R$ 150,00" }));
    }

    // Guarda a categoria do agendamento
    if (option.label === "💳 Pelo Convênio") {
      setCollectedData(prev => ({ ...prev, tipoAgendamento: "Convênio" }));
    } else if (option.label === "💵 Particular" || option.label === "📅 Sim, agendar consulta") {
      setCollectedData(prev => ({ ...prev, tipoAgendamento: "Particular" }));
    }

    // Se for o botão final que leva ao WhatsApp customizado com os dados salvos
    if (option.isWhatsAppDynamic) {
      abrirWhatsAppDinamico();
      return;
    }

    // Se for um botão de link estático simples externo
    if (option.isExternal) {
      window.open(option.url, "_blank", "noopener,noreferrer");
      return;
    }

    addUserMessage(option.label);
    loadStep(option.next);
  }

  function addUserMessage(text) {
    setMessages(prev => [...prev, { from: "user", text, id: Date.now() }]);
  }

  // Gerencia e valida o envio dos inputs textuais (Nome, CPF, E-mail)
  function handleInput(e) {
    e.preventDefault();
    if (!inputValue.trim() || !inputMode) return;

    const val = inputValue.trim();
    const lower = val.toLowerCase();

    // Filtro de Crise/Reclamações: Se houver palavras pesadas, joga direto para Ouvidoria
    if (CRISIS_TRIGGERS.some(t => lower.includes(t))) {
      addUserMessage(val);
      setInputValue("");
      setInputMode(null);
      loadStep("gatilho_gerencia");
      return;
    }

    // Validação estrutural básica de CPF (Se tem 11 números)
    if (inputMode.type === "cpf") {
      const digits = val.replace(/\D/g, "");
      if (digits.length !== 11) {
        addUserMessage(val);
        setInputValue("");
        setMessages(prev => [...prev, {
          from: "bot",
          text: "⚠️ CPF inválido. Por favor, digite os **11 dígitos** do seu CPF.",
          id: Date.now(),
        }]);
        return;
      }
    }

    // Validação estrutural básica de E-mail (Se contém o caractere @)
    if (inputMode.type === "email" && !val.includes("@")) {
      addUserMessage(val);
      setInputValue("");
      setMessages(prev => [...prev, {
        from: "bot",
        text: "⚠️ E-mail inválido. Por favor, verifique e tente novamente.",
        id: Date.now(),
      }]);
      return;
    }

    // Armazena temporariamente o dado coletado no estado do React
    setCollectedData(prev => ({ ...prev, [inputMode.type]: val }));
    addUserMessage(val);
    setInputValue("");
    setInputMode(null);
    loadStep(inputMode.nextStep);
  }

  const currentFlow = FLOW[currentStep];
  const showOptions = !typing && currentFlow?.options && !inputMode;

  return (
    <>
      {/* ── ANIMAÇÕES E ESTILOS CSS INJETADOS DO CHAT ── */}
      <style>{`
        @keyframes dotBounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-6px); opacity: 1; }
        }
        @keyframes chatPulse {
          0%, 100% { box-shadow: 0 4px 16px rgba(232,130,12,0.45); }
          50% { box-shadow: 0 4px 32px rgba(232,130,12,0.75), 0 0 0 8px rgba(232,130,12,0.12); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .chat-window {
          animation: slideUp 0.3s cubic-bezier(0.34,1.56,0.64,1);
        }
        .chat-message {
          animation: fadeIn 0.25s ease-out forwards;
        }
        .chat-option:hover {
          background: linear-gradient(135deg, rgba(232,130,12,0.12), rgba(232,130,12,0.08)) !important;
          border-color: rgba(232,130,12,0.6) !important;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(232,130,12,0.2) !important;
        }
        .whatsapp-option:hover {
          background: #128C7E !important;
          border-color: #075E54 !important;
          color: #fff !important;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(37,211,102,0.3) !important;
        }
        .chat-send-btn:hover {
          background: #c96d08 !important;
          transform: scale(1.05);
        }
        .chat-input:focus {
          outline: none;
          border-color: #E8820C !important;
          box-shadow: 0 0 0 3px rgba(232,130,12,0.15) !important;
        }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(232,130,12,0.3); border-radius: 2px; }
      `}</style>

      {/* Container Flutuante no canto inferior direito */}
      <div style={{
        position: "fixed", bottom: "1.75rem", right: "1.75rem",
        zIndex: 9999, display: "flex", flexDirection: "column",
        alignItems: "flex-end", gap: "0.6rem",
        fontFamily: "'Segoe UI', Arial, sans-serif",
      }}>
        
        {/* Caixa flutuante amigável (Tooltip) em cima do botão inicial */}
        {!open && tooltip && (
          <div style={{
            background: "#fff",
            border: `1px solid ${C.primaryBorder}`,
            borderRadius: 12,
            padding: "0.6rem 1rem",
            fontSize: "0.83rem",
            fontWeight: 600,
            color: C.text,
            boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
            whiteSpace: "nowrap",
            position: "relative",
          }}>
            Posso te ajudar? 👋
            <span style={{
              position: "absolute", bottom: -7, right: 20,
              width: 0, height: 0,
              borderLeft: "7px solid transparent",
              borderRight: "7px solid transparent",
              borderTop: "7px solid #fff",
            }} />
          </div>
        )}

        {/* ── JANELA DE CHAT EXPANDIDA ── */}
        {open && (
          <div className="chat-window" style={{
            width: 370,
            maxHeight: "calc(100vh - 120px)",
            background: C.surface,
            borderRadius: 20,
            boxShadow: C.shadow,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            border: `1px solid ${C.primaryBorder}`,
          }}>
            {/* Cabeçalho da Janela */}
            <div style={{
              background: `linear-gradient(135deg, ${C.primary}, ${C.primaryDark})`,
              padding: "14px 18px",
              display: "flex",
              alignItems: "center",
              gap: 12,
              flexShrink: 0,
            }}>
              <div style={{
                width: 42, height: 42, borderRadius: "50%",
                background: "rgba(255,255,255,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                border: "2px solid rgba(255,255,255,0.4)",
              }}>
                <svg viewBox="0 0 24 24" fill="white" style={{ width: 22, height: 22 }}>
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem", letterSpacing: "0.02em" }}>
                  Previ — Assistente Virtual
                </div>
                <div style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.75rem", display: "flex", alignItems: "center", gap: 5 }}>
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
                  Online agora
                </div>
              </div>
              {/* Botão de Fechar Chat X */}
              <button
                onClick={() => setOpen(false)}
                style={{
                  background: "rgba(255,255,255,0.15)",
                  border: "none", cursor: "pointer",
                  width: 30, height: 30, borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#fff", transition: "background 0.2s",
                }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 16, height: 16 }}>
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </button>
            </div>

            {/* Sub-barra informativa de horários */}
            <div style={{
              background: C.bg,
              padding: "8px 16px",
              fontSize: "0.72rem",
              color: C.textMuted,
              borderBottom: `1px solid ${C.primaryBorder}`,
              flexShrink: 0,
              display: "flex", alignItems: "center", gap: 6,
            }}>
              <svg viewBox="0 0 24 24" fill={C.primary} style={{ width: 12, height: 12 }}>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
              </svg>
              <span>Seg–Sex: 07h–18h &nbsp;|&nbsp; Sáb: 07h–12h</span>
            </div>

            {/* Área interna do scroll das mensagens */}
            <div style={{
              flex: 1,
              overflowY: "auto",
              padding: "16px 14px",
              display: "flex",
              flexDirection: "column",
              gap: 10,
              background: "#FAFAF8",
              minHeight: 300,
              maxHeight: 420,
            }}>
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className="chat-message"
                  style={{
                    display: "flex",
                    justifyContent: msg.from === "user" ? "flex-end" : "flex-start",
                    alignItems: "flex-end",
                    gap: 8,
                  }}
                >
                  {msg.from === "bot" && <BotAvatar />}
                  <div style={{
                    maxWidth: "78%",
                    background: msg.from === "user" ? C.userBubble : C.botBubble,
                    color: msg.from === "user" ? "#fff" : C.text,
                    border: msg.from === "user" ? "none" : `1px solid ${C.primaryBorder}`,
                    borderRadius: msg.from === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                    padding: "10px 14px",
                    fontSize: "0.85rem",
                    lineHeight: "1.4",
                    boxShadow: msg.from === "user" ? "0 2px 8px rgba(232,130,12,0.25)" : "0 2px 8px rgba(0,0,0,0.04)",
                  }}>
                    <RenderText text={msg.text} />
                  </div>
                </div>
              ))}

              {/* Exibe indicador animado se o bot estiver "escrevendo..." */}
              {typing && <TypingIndicator />}
              <div ref={endRef} />
            </div>

            {/* Container Inferior: Opções em botões ou Input Textual */}
            <div style={{
              padding: "12px 14px",
              background: C.surface,
              borderTop: `1px solid ${C.primaryBorder}`,
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}>
              {/* RENDERIZA OS BOTÕES DE ESCOLHA */}
              {showOptions && currentFlow.options.map((opt, idx) => {
                const isWA = opt.isWhatsAppDynamic || opt.next?.startsWith("whatsapp_");
                return (
                  <button
                    key={idx}
                    onClick={() => handleOption(opt)}
                    className={isWA ? "whatsapp-option" : "chat-option"}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "10px 14px",
                      borderRadius: 12,
                      fontSize: "0.83rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      background: isWA ? "#25D366" : "#fff",
                      color: isWA ? "#fff" : C.primary,
                      border: isWA ? "1px solid #20ba5a" : `1px solid ${C.primaryBorder}`,
                      boxShadow: "0 2px 6px rgba(0,0,0,0.03)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>{opt.label}</span>
                    <span style={{ opacity: 0.6, fontSize: "0.75rem" }}>➔</span>
                  </button>
                );
              })}

              {/* RENDERIZA A CAIXA DE TEXTO (QUANDO O CLIENTE DIGITA NOME/CPF/EMAIL) */}
              {inputMode && (
                <form onSubmit={handleInput} style={{ display: "flex", gap: 8, width: "100%" }}>
                  <input
                    ref={inputRef}
                    type="text"
                    className="chat-input"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={
                      inputMode.type === "cpf" 
                        ? "Digite seu CPF (11 dígitos)..." 
                        : inputMode.type === "email" 
                        ? "Digite seu melhor e-mail..." 
                        : "Digite sua resposta..."
                    }
                    style={{
                      flex: 1,
                      padding: "10px 14px",
                      borderRadius: 12,
                      border: "1px solid #DDD",
                      fontSize: "0.85rem",
                      transition: "all 0.2s",
                    }}
                  />
                  <button
                    type="submit"
                    className="chat-send-btn"
                    style={{
                      background: C.primary,
                      border: "none",
                      color: "#fff",
                      width: 38,
                      height: 38,
                      borderRadius: 12,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.2s",
                      boxShadow: "0 2px 8px rgba(232,130,12,0.3)",
                    }}
                  >
                    <svg viewBox="0 0 24 24" fill="white" style={{ width: 18, height: 18 }}>
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {/* ── BALÃO DE ENTRADA DO BOTÃO REDONDO (FAB) ── */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            background: `linear-gradient(135deg, ${C.primary}, ${C.primaryDark})`,
            width: 58, height: 58, borderRadius: "50%",
            border: "none", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", boxShadow: "0 4px 16px rgba(232,130,12,0.4)",
            animation: !open && pulse ? "chatPulse 2s infinite" : "none",
            transition: "transform 0.2s cubic-bezier(0.34,1.56,0.64,1)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          {open ? (
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 24, height: 24 }}>
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 26, height: 26 }}>
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
            </svg>
          )}
        </button>
      </div>
    </>
  );
}