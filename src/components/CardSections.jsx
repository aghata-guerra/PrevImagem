function CardSections({ icone, titulo, descricao, crm }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center gap-2 shadow-sm">
      <img src={icone} alt={titulo} className="w-16 h-16 mb-2" />
      <h3 className="text-orange-500 font-semibold text-lg">{titulo}</h3>
      <p className="text-gray-500 text-sm">{descricao}</p>
      {crm && <p className="text-gray-400 text-xs">{crm}</p>}
    </div>
  )
}

export default CardSections
