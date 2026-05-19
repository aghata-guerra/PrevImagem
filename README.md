# CardSections

Componente reutilizável de card para exibição de serviços, procedimentos e especialistas médicos do site da PrevImagem.

## Visão geral

O `CardSections` foi criado para ser flexível — o mesmo componente é usado nas três seções da página: **Exames e Serviços**, **Estética** e **Médicos**. Cada seção passa seus próprios dados via props, sem precisar duplicar código.

## Componentes relacionados

| Componente | Descrição |
|---|---|
| `CardSections.jsx` | Card individual com ícone, título, descrição e CRM opcional |
| `ExamesSection.jsx` | Seção de exames, renderiza 3 cards de exames |
| `EsteticaSection.jsx` | Seção de estética, renderiza 3 cards de procedimentos |
| `MedicosSection.jsx` | Seção de médicos, renderiza 3 cards de especialistas |
| `BotaoSection.jsx` | Botão reutilizável "Ver todos os..." usado em cada seção |

## Props

| Prop | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `icone` | string | Sim | Caminho para o ícone ou imagem do card |
| `titulo` | string | Sim | Título exibido no card |
| `descricao` | string | Sim | Texto descritivo exibido abaixo do título |
| `crm` | string | Não | Número do CRM — aparece apenas na seção de Médicos |

## Exemplo de uso

```jsx
import CardSections from "./CardSections";

<CardSections
  icone="/assets/icone-ultrassom.svg"
  titulo="Ultrassom"
  descricao="Exames de imagem por ultrassom, utilizados para análise interna do corpo."
/>
```

Com CRM (seção de Médicos):

```jsx
<CardSections
  icone="/assets/icone-ginecologista.svg"
  titulo="Ginecologista"
  descricao="Dra. Joelma Tompson"
  crm="CRM 10098"
/>
```

## Estrutura de pastas

src/
components/
CardSections.jsx
ExamesSection.jsx
EsteticaSection.jsx
MedicosSection.jsx
BotaoSection.jsx

## Tecnologias

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

---

Desenvolvido por [Aghata Guerra](https://github.com/aghata-guerra) como parte do projeto acadêmico PrevImagem — Porto Digital, 2026.
