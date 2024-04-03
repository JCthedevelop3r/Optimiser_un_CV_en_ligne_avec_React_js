
function Prestations(props) {
    return (
        <div>
            <img src={props.src} alt={props.alt} />
            <h3>{props.intitulé}</h3>
            <p>{props.description}</p>
        </div>
    );
}

export default function ServicesPage() {
    return(
        <div className="services-page">
            <section>
                <img src="#" alt="Rayons lumineux qui se croisent sur fond bleu" />
                <h2>Mon offre de services</h2>
                <p>Voici les prestations sur lesquelles je peux intervenir.</p>
            </section>
            <section>
                <Prestations 
                    src="#"
                    alt="logo bleu en forme d'ordinateur de bureau."
                    intitulé="ux design" 
                    description="L'UX Design est une méthode de conception centrée sur l'utilisateur. Son 
                    but est d'offrir une expérience de navigation optimale à l'internaute."
                />
                <Prestations 
                    src="#"
                    alt="logo bleu en forme de feuille cornée avec un signe de balise HTML."
                    intitulé="développement web" 
                    description="Le développement de sites web repose sur l'utilisation des languages HTML, 
                    CSS, JavaScript et PHP."
                />
                <Prestations 
                    src="#"
                    alt="logo bleu en forme de loupe avec un signe de dollars américain."
                    intitulé="référencement" 
                    description="Le référencement naturel d'un site, aussi appelé SEO, consiste à mettre 
                    des techniques en oeuvre pour améliorer sa position dans les résultats des moteurs 
                    de recherche."
                />
            </section>
        </div>
    );
}