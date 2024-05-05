import { Link } from 'react-router-dom'

function FooterElement(props) {
    return(
        <div>
            <h2>{props.sousTitre}</h2>
            <ul>
                {props.elements.map((element) => (
                    <li key={element.id}>
                        {element.image ? (
                            <a href={element.href} target="_blank" rel='noopener noreferrer'><img src={element.image} alt={element.alt} /></a>
                        ) : (
                            <Link to={element.page}>{element.text}</Link>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function Footer() {
    const colonne1 = [
        /*Appliquer un "cursor: default" sur les coordonnées de contact en CSS.*/
        { text: "40 Rue Laure Diebold", id: "rue"},
        { text: "69009 Lyon, France", id: "cp-pays"},
        { text: "Téléphone : 06.20.30.40.50", id: "tel"},
        { href:"https://github.com/github-john-doe", image: "#", alt: "Logo de Github.", id: "logo-github"},
        { href:"https://twitter.com/JohnDoe1410056", image: "#", alt: "Logo de Twitter.", id: "logo-Twitter"},
        { href:"https://www.linkedin.com/in/john-doe-169a69302/", image: "#", alt: "Logo de Linkedin.", id: "logo-Linkedin"}
    ];
    
    const colonne2 = [
        { text: "Accueil", page: "/", id: "accueil"},
        { text: "À propos", page: "/", id: "a-propos" },
        { text: "Services", page: "/ServicesPage", id: "services" },
        { text: "Me contacter", page: "/ContactPage", id: "contact" },
        { text: "Mentions légales", page: "/LegalNoticePage", id: "mentions-legales" }
    ];
  
    const colonne3 = [
        { text: "Fresh food", page: "/ProductionsPage", id: "fresh-food-project"},
        { text: "Restaurant Akira", page: "/ProductionsPage", id: "restaurant-akira-project"},
        { text: "Espace bien-être", page: "/ProductionsPage", id: "espace-bien-etre-project"},
    ];
  
    const colonne4 = [
        { text: "Coder son site en HTML/CSS", page: "/BlogPage", id: "article-blog-1"},
        { text: "Vendre ses produits sur le web", page: "/BlogPage", id: "article-blog-2"},
        { text: "Se positionner sur Google", page: "/BlogPage", id: "article-blog-3"},
    ];
    return(
        <footer>
            <FooterElement sousTitre="John Doe" elements={colonne1}></FooterElement>
            <FooterElement sousTitre="Liens utiles" elements={colonne2}></FooterElement>
            <FooterElement sousTitre="Mes dernières réalistions" elements={colonne3}></FooterElement>
            <FooterElement sousTitre="Mes derniers articles" elements={colonne4}></FooterElement>
        </footer>
    );
}