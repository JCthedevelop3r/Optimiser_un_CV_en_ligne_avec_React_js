import './style.css';
import './ProductionsPage.css';

import bannerMobile from '../images/img/banner-mobile.jpg';
import freshFood from '../images/img/portfolio/fresh-food.jpg';
import restaurantJaponais from '../images/img/portfolio/restaurant-japonais.jpg';
import espaceBienEtre from '../images/img/portfolio/espace-bien-etre.jpg'

function Realisation(props) {
    return(
        <section className={props.className}>
            <img className='card-img-top' src={props.src} alt={props.alt} />
            <div className='card-body productions-card-content p-0'>
                <h3 className='card-title intitule-pp pt-3'>{props.intitulé}</h3>
                <p className='description-pp px-4'>{props.description}</p>
                <button type="button" className='btn btn-outline-primary mb-3'>Voir</button>
            </div>
            <div className='card-footer'>
                <small className='card-footer-content'>Site réalisé {props.language}</small>
            </div>
        </section>        
    );
}

export default function ProductionsPage() {
    return(
        <main className="container-fluid-md productions-page">
            <section className='text-center d-flex flex-column align-items-center'>
                <img className='banner-mobile' src={bannerMobile} alt="Rayons lumineux qui se croisent sur fond bleu" />
                <h2 className='h2-pp text-uppercase mt-5 fs-1'>portfolio</h2>
                <p className='text-intro'>
                    Voici quelques-unes de mes <br></br>
                    réalisations.
                </p>
                <div className='blue-stroke-pp border border-top border-start-0 border-end-0 border-bottom-0 border-4 border-primary'></div>
            </section>
            <section className='realisations'>
                <Realisation 
                    className="card text-center mb-3 mx-2"
                    src={freshFood} 
                    alt="Barquette de légumes."
                    intitulé="Fresh food" 
                    description="Réalisation d'un site avec commande en ligne."
                    language="avec PHP et MySQL"
                />
                <Realisation 
                    className="card text-center mb-3 mx-2"
                    src={restaurantJaponais}
                    alt="Sushis et makis."
                    intitulé="Restaurant Akira" 
                    description="Réalisation d'un site vitrine."
                    language="avec WordPress"
                />
                <Realisation 
                    className="card text-center mx-2"
                    src={espaceBienEtre} 
                    alt="Tête de bouddah avec une fleur de lotus et pierres empilées flottantes sur l'eau 
                    sous un coucher de soleil nuageux."
                    intitulé="Espace bien-être" 
                    description="Réalisation d'un site vitrine pour un praticien de bien-être."
                    language="en HTML/CSS"
                />
            </section>
        </main>
    );
}