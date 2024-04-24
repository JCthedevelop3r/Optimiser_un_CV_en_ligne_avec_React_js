import { Link } from 'react-router-dom';
import "./Footer.css";
import "./style.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import logoGithub from '../images/Logo_de_Github.png';
import logoTwitter from '../images/Logo_de_Twitter.png';
import logoLinkedin from '../images/Logo_de_Linkedin.png';

function FooterElement(props) {
    /*Crée un nouveau tableau contenant uniquement les 3 icônes des réseaux sociaux*/
    const socialElements = props.elements.slice(-3);

    return(
        <div className='footer-elements'>
            <h2>{props.sousTitre}</h2>
            <ul>
                {/*Permet de créer plusieurs éléments de liste*/}
                {props.elements.map((element, index) => (
                    <li key={element.id}>
                        {/*Permet de rendre l'icône des liens cliquables*/}
                        <div className="icon-link-container" onClick={() => window.location.href = element.page}>
                            {/*Permet de choisir où vont s'afficher les icônes à gauche des liens*/}
                            {props.showIcon && <FontAwesomeIcon icon={faChevronRight} size="xs" style={{color: "#116dfe", paddingRight: "1%"}} />}
                            {props.colonne === 1 && index < 3 ? (
                                <p>{element.text}</p>
                            ) : (
                                <Link className={props.className} to={element.page}>{element.text}</Link>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
            {/*Permet d'afficher les icones de réseaux sociaux*/}
            {socialElements.length > 0 && (
                <div className="social-icons">
                    <ul>
                        {socialElements.map((element) => (
                            <li key={element.id}>
                                <a href={element.href} target="_blank" rel='noopener noreferrer'><img src={element.src} alt={element.alt} /></a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default function Footer() {
    const colonne1 = [
        /*Appliquer un "cursor: default" sur les coordonnées de contact en CSS.*/
        { text: "40 Rue Laure Diebold", id: "rue"},
        { text: "69009 Lyon, France", id: "cp-pays"},
        { text: "Téléphone : 06.20.30.40.50", id: "tel"},
        { href:"https://github.com/github-john-doe", image: "#", src: logoGithub, alt: "Logo de Github.", id: "logo-github"},
        { href:"https://twitter.com/JohnDoe1410056", image: "#", src: logoTwitter, alt: "Logo de Twitter.", id: "logo-Twitter"},
        { href:"https://www.linkedin.com/in/john-doe-169a69302/", image: "#", src: logoLinkedin, alt: "Logo de Linkedin.", id: "logo-Linkedin"}
    ];
    
    const colonne2 = [
        { text: "Accueil", page: "/", id: "accueil", icon: "<FontAwesomeIcon icon={faChevronRight} style={{color: `#116dfe`,}} />"},
        { text: "À propos", page: "/", id: "a-propos" },
        { text: "Services", page: "/ServicesPage", id: "services" },
        { text: "Me contacter", page: "/ContactPage", id: "contact" },
        { text: "Mentions légales", page: "/LegalNoticePage", id: "mentions-legales",}
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
        <footer className='container-fluid-md'>
            <section className='footer-main-content pt-5 ps-3 pb-4'>
                <FooterElement sousTitre="John Doe" elements={colonne1} colonne={1}></FooterElement>
                <FooterElement sousTitre="Liens utiles" elements={colonne2} showIcon={true}></FooterElement>
                <FooterElement sousTitre="Mes dernières réalistions" elements={colonne3} showIcon={true}></FooterElement>
                <FooterElement sousTitre="Mes derniers articles" elements={colonne4} showIcon={true}></FooterElement>
            </section>
            <section className='copyright text-white text-center py-3 mb-3'>
                <small>© Designed by John Doe</small>
            </section>
        </footer>
    );
}