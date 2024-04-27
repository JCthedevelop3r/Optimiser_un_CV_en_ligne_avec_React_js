import './style.css';
import './ServicesPage.css';
import Prestations from "./Prestations";

import bannerMobile from '../images/img/banner-mobile.jpg';

function Card({children}) {
    return (
        <section className="prestations-content">{children}</section>
    );
}

export default function ServicesPage() {
    return (
        <main className='services-page'>
            <section className='text-center d-flex flex-column align-items-center'>
                <img className="banner-mobile" src={bannerMobile} alt="Rayons lumineux qui se croisent sur fond bleu" />
                <h2 className='h2-sp text-uppercase mt-5 fs-1'>Mon offre de services</h2>
                <p className='text-intro'>Voici les prestations sur lesquelles je peux intervenir.</p>
                <div className='blue-stroke-sp border border-top border-start-0 border-end-0 border-bottom-0 border-4 border-primary'></div>
            </section>
            <section className='prestations'>
                <Card>
                    <Prestations/>
                </Card>
            </section>
        </main>
    );
}