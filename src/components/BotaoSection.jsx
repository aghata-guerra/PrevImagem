function BotaoSection({ botao }) {
  return (
    <button className="bg-orange-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-orange-600 transition-colors cursor-pointer">
      Ver todos os {botao} →
    </button>
  )
}
export default BotaoSection
