function CardSections({ icone, titulo, descricao, crm }) {
  return (
    <div>
      <img src={icone} alt={titulo} />
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <p>{crm}</p>
    </div>
  );
}
export default CardSections;
