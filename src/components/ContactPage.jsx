import './style.css';
import './ContactPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';


export default function ContactPage() {
    return(
        <main className="container-fluid-xl">
            <div className="bg-image-cp">
                <div className='contact-page'>
                    <div className="card mx-3 mt-3">
                        <div className="card-body px-5">
                            <section className='text-center d-flex flex-column align-items-center'>
                                <h2 className="h2-cp text-uppercase mt-4 fs-1">me contacter</h2>
                                <p className='intro-text-cp'>
                                    Pour me contacter en vue d'un entretien ou d'une future collaboration, 
                                    merci de remplir le formulaire de contact.
                                </p>
                                <div className='blue-stroke-cp border border-top border-start-0 border-end-0 border-bottom-0 border-4 border-primary'></div>
                            </section>
                            <div className='row'>
                                <section className='col-md-6'>
                                    <h3 className='h3-cp'>Formulaire de contact</h3>
                                    <div className='blue-stroke-cp-2 border border-top border-start-0 border-end-0 border-bottom-0 border-2 border-primary'></div>
                                    <form className="d-flex flex-column align-items-center" action="#" method="GET">
                                        <input type="text" className="form-control mb-3" id="name" placeholder="Votre nom" />
                                        <input type="text" className="form-control mb-3" id="email" placeholder="Votre adresse email" />
                                        <input type="text" className="form-control mb-3" id="phone" placeholder="Votre numéro de téléphone" />
                                        <input type="text" className="form-control mb-3" id="subject" placeholder="Sujet" />
                                        <textarea className='form-control mb-3' id="message" placeholder="Votre message"></textarea>
                                        <button type="button" className='btn btn-primary btn-lg mb-3'>Envoyer</button>
                                    </form>
                                </section>
                                <section className='col-md-6 pb-5'>
                                    <h3 className='h3-cp'>Mes coordonnées</h3>
                                    <div className='blue-stroke-cp-2 border border-top border-start-0 border-end-0 border-bottom-0 border-2 border-primary'></div>
                                    <div className='d-flex'>
                                        <span className='span-cp-1'>
                                            <FontAwesomeIcon icon={faLocationDot} style={{color: "#434343", paddingRight: "4px"}}/>
                                        </span>
                                        <address className='m-0'>
                                            <p className='m-0'>40 Rue Laure Diebold, 69009 Lyon, France</p>
                                        </address>
                                    </div>
                                    <div className='d-flex mb-3'>
                                        <span>
                                            <FontAwesomeIcon icon={faMobileScreenButton} style={{color: "#434343", paddingRight: "4px"}}/>
                                        </span>
                                        <address className='m-0'>
                                            <p className='m-0'>06 20 30 40 50</p>
                                        </address>
                                    </div>
                                    <iframe 
                                        title='john-doe-location'
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.626965754104!2d4.79640397661413!3d45.77866571240152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1712264474011!5m2!1sfr!2sfr" 
                                        width="100%" 
                                        height="340" 
                                        style={{border: 0 }}
                                        allowfullscreen="" 
                                        loading="lazy" 
                                        referrerpolicy="no-referrer-when-downgrade"
                                    >
                                    </iframe>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}