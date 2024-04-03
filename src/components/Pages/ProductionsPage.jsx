
function Realisations(props) {
    return(
        <div>
            <img src={props.src} alt={props.alt} />
            <h3>{props.intitulé}</h3>
            <p>{props.description}</p>
            <button>Voir</button>
            <p>Site réalisé {props.language}</p>
        </div>
    );
}

export default function ProductionsPage() {
    return(
        <div className="productions-page">
            <section>
                <img src="#" alt="Rayons lumineux qui se croisent sur fond bleu" />
                <h2>portfolio</h2>
                <p>Voici quelques-unes de mes réalisation.</p>
            </section>
            <section>
                <Realisations 
                    src="#" 
                    alt="Barquette de légumes."
                    intitulé="Fresh food" 
                    description="Réalisation d'un site avec commande en ligne."
                    language="avec PHP et MySQL"
                />
                <Realisations 
                    src="#" 
                    alt="Sushis et makis."
                    intitulé="Restaurant Akira" 
                    description="Réalisation d'un site vitrine."
                    language="avec WordPress"
                />
                <Realisations 
                    src="#" 
                    alt="Tête de bouddah avec une fleur de lotus et pierres empilées flottantes sur l'eau 
                    sous un coucher de soleil nuageux."
                    intitulé="Espace bien-être" 
                    description="Réalisation d'un site vitrine pour un praticien de bien-être."
                    language="en HTML/CSS"
                />
            </section>
        </div>
    );
}