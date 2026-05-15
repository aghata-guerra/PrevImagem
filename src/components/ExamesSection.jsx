import CardSections from "./CardSections";

const exames =[
    {
        id: 1,
        icone:"",
        titulo:"Ultrassom",
        descricao:"Exames de imagem por ultrassom, utilizados para análise interna do corpo.",
    },
    {
        id:2,
        icone:"",
        titulo:"Raio-X",
        descricao:"Exames de radiografia para avaliação de ossos e estruturas internas.",
    
    },
    {
        id:3,
        icone:"",
        titulo:"Mamografia",
        descricao:"Exames de imagem das mamas utilizados para detecção precoce de alterações.",
    }
]
function ExamesSection(){
    return(

    <section>
        <h2>Exames e Serviços</h2>

        <div>
            {exames.map((exame)=>(
                <CardSections
                key={exame.id}
                icone={exame.icone}
                titulo={exame.titulo}
                descricao={exame.descricao}
                />
            ))}
        </div>

        <button>Ver todos os exames →</button>
    </section>
    )
    
}

export default ExamesSection;