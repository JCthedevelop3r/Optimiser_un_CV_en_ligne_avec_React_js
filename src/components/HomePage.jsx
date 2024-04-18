import "./HomePage.css";

import johnDoeAbout from "../images/img/john-doe-about.jpg"

export default function HomePage() {
    return(
        <main className="container-fluid-md">
            <div className="bg-image d-flex align-items-center">
                <section className="presentation text-white text-center">
                    <h1 className="titre mb-4">Bonjour, je suis John Doe</h1>
                    <h2 className="h2 fs-3 mb-4">Développeur web full stack</h2>
                    <a href="#a-propos"><button type="button" className="btn btn-primary px-4">En savoir plus</button></a>
                </section>
            </div>
            <article className="a-propos pt-5" id="a-propos">
                <div className="card shadow py-5 px-4">
                    <div className="card-body">
                        <section>
                            <h3 className="card-title titres fs-1 pb-2 mb-4 border-bottom border-primary border-2">À propos</h3>
                            <p className="card-text">Passionné par l'informatique et les nouvelles technologies, j'ai suivi une
                                formation d'<strong>intégrateur web</strong> au CEF. Au cours de cette formation, j'ai pu
                                acquérir des bases solides pour travailler dans le domaine du <strong>développement
                                web</strong>.
                            </p>
                            <p className="card-text">Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale
                                pour consolider ma formation de <strong>développeur web full stack</strong>.
                            </p>
                            <p className="card-text">J'accorde une attention particulière à la qualité du code que j'écris et je 
                                respecte les bonnes pratiques du web.
                            </p>
                        </section>
                        <section>
                                <img src= {johnDoeAbout} className="john-doe-about pt-3 pb-2" alt="Homme de profil travaillant à son bureau." />
                            <h4 className="card-text titres mb-1 fs-5">Mes compétences</h4>
                            {/*Progress bars bootstrap*/}
                            <label className="progress-labels pb-2 text-uppercase ">html5 90%</label>
                            <div className="progress" role="progressbar" aria-label="html" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-danger" style={{width: '90%'}}></div>
                            </div>
                            <label className="progress-labels pt-3 pb-2 text-uppercase ">css3 80%</label>
                            <div className="progress" role="progressbar" aria-label="css" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-info" style={{width: '80%'}}></div>
                            </div>
                            <label className="progress-labels pt-3 pb-2 text-uppercase ">javascript 70%</label>
                            <div className="progress" role="progressbar" aria-label="javascript" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-warning" style={{width: '70%'}}></div>
                            </div>
                            <label className="progress-labels pt-3 pb-2 text-uppercase ">php 60%</label>
                            <div className="progress" role="progressbar" aria-label="php" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-success" style={{width: '60%'}}></div>
                            </div>
                            <label className="progress-labels pt-3 pb-2 text-uppercase ">react 50%</label>
                            <div className="progress" role="progressbar" aria-label="react" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar" style={{width: '50%'}}></div>
                            </div>
                        </section>
                    </div>
                </div>
            </article>
        </main>
    );
}