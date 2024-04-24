import { useState } from 'react';
import './style.css';
import './ServicesPage.css';

import bannerMobile from '../images/img/banner-mobile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDisplay } from '@fortawesome/free-solid-svg-icons';
import { faFileCode } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlassDollar } from '@fortawesome/free-solid-svg-icons';

function Prestation(props) {
    const [isHovered, setIsHovered] = useState(false);

    function handleMouseEnter() {
        setIsHovered(true);
    }

    function handleMouseLeave() {
        setIsHovered(false);
    }

    // Fonction pour entourer les sous-chaînes spécifiées de la prop description par une balise
    function wrapSubstrings(description, substrings, wrapper) {
        return substrings.reduce((acc, substring) => {
            return acc.replace(new RegExp(substring, 'gi'), `<${wrapper}>${substring}</${wrapper}>`);
        }, description);
    }

    // Liste des sous-chaînes à entourer avec une balise strong
    const strongSubstrings = ["UX Design", "Le développement de sites web", "référencement naturel d'un site"];
    // Liste des sous-chaînes à entourer avec une balise span
    const spanSubstrings = ["HTML", "CSS", "JavaScript", "PHP", "SEO"];

    // Appliquer les balises aux sous-chaînes dans la prop description
    let descriptionWithStrong = wrapSubstrings(props.description, strongSubstrings, 'strong');
    let descriptionWithSpan = wrapSubstrings(descriptionWithStrong, spanSubstrings, 'span class="underlined"');

    return (
        <section className={props.className} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className='card-body services-card-content d-flex flex-column align-items-center pt-5'>
                <FontAwesomeIcon icon={props.icon} size='2xl' style={{ color: isHovered ? "#cde1f8" : "#0d6efd" }}/>
                <h3 className='card-title text-uppercase pt-3'>{props.intitulé}</h3>
                {/* eslint-disable-next-line*/}
                <p className='card-text description text-center' dangerouslySetInnerHTML={{ __html: descriptionWithSpan }}></p>
            </div>
        </section>
    );
}

export default function ServicesPage() {
    return(
        <main className="container-fluid-md services-page">
            <section className='text-center d-flex flex-column align-items-center'>
                <img className="banner-mobile" src={bannerMobile} alt="Rayons lumineux qui se croisent sur fond bleu" />
                <h2 className='h2-sp text-uppercase mt-5 fs-1'>Mon offre de services</h2>
                <p className='text-intro'>Voici les prestations sur lesquelles je peux intervenir.</p>
                <div className='blue-stroke-sp border border-top border-start-0 border-end-0 border-bottom-0 border-4 border-primary'></div>
            </section>
            <section className='Prestations'>
                <Prestation 
                    className="card prestation-1 border-0 rounded-4 shadow-sm mb-3 mx-2"
                    icon={faDisplay}
                    intitulé="ux design" 
                    description="L'UX Design est une méthode de conception centrée sur l'utilisateur. Son 
                    but est d'offrir une expérience de navigation optimale à l'internaute."
                />
                <Prestation
                    className="card prestation-2 border-0 rounded-4 shadow-sm mb-3 mx-2"
                    icon={faFileCode}
                    intitulé="développement web" 
                    description="Le développement de sites web repose sur l'utilisation des languages HTML, 
                    CSS, JavaScript et PHP."
                />
                <Prestation
                    className="card prestation-3 border-0 rounded-4 shadow-sm mx-2"
                    icon={faMagnifyingGlassDollar}
                    intitulé="référencement" 
                    description="Le référencement naturel d'un site, aussi appelé SEO, consiste à mettre 
                    des techniques en oeuvre pour améliorer sa position dans les résultats des moteurs 
                    de recherche."
                />
            </section>
        </main>
    );
}