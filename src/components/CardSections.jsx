function CardSections({icone, titulo, descricao}){
    return(
        <div><img src={icone} alt={titulo}/>
        <h3>{titulo}</h3>
        <p>{descricao}</p>
        </div>
    )
}
export default CardSections;