
function Formulaire(props) {
    return(
        <div>
            <h3>{props.intitulé}</h3>
            <form action="" method="GET">
                <input type="text" placeholder={props.nom} />
                <input type="text" placeholder={props.email} />
                <input type="text" placeholder={props.tel} />
                <input type="text" placeholder={props.objet} />
                <textarea placeholder={props.message}></textarea>
            </form>
        </div>
    );
}

function Coordonnées(props) {
    return(
        <div>
            <h3>{props.intitulé}</h3>
            <img src="#" alt="logo noir en forme d'épingle." />
            <address>
                <p>{props.adressePostale}</p>
            </address>
            <img src="#" alt="logo noir en forme de smartphone." />
            <address>
                <p>{props.tel}</p>
            </address>
            {/*<iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.626965754104!2d4.79640397661413!3d45.77866571240152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1712264474011!5m2!1sfr!2sfr" 
                width="600" 
                height="450" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
            >
    </iframe>*/}
        </div>
    );
}

export default function ContactPage() {
    return(
        <div className="contact-page">
            <h2>me contacter</h2>
            <p>
                Pour me contacter en vue d'un entretien ou d'une future collaboration, 
                merci de remplir le formulaire de contact.
            </p>
            <Formulaire 
                intitulé="Formulaire de contact"
                nom="Votre nom"
                email="Votre adresse email"
                tel="Votre numéro de téléphone"
                objet="Sujet"
                message="Votre message"
            />
            <Coordonnées
                intitulé="Mes coordonnées"
                adressePostale="40 rue Laure Diebold, 69009 Lyon, France"
                tel="06 20 30 40 50"
            />
        </div>
    );
}