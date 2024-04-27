import { useState } from 'react';
import "./Prestations.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDisplay } from '@fortawesome/free-solid-svg-icons';
import { faFileCode } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlassDollar } from '@fortawesome/free-solid-svg-icons';

export default function Prestation() {
  return (
    <section className="Prestations">
      <section className="card prestation-1 text-center border-0 rounded-4 shadow-sm mb-3 mx-2">
        <div className="card-body services-card-content d-flex flex-column align-items-center pt-5">
            <FontAwesomeIcon icon={faDisplay} size='2xl' style={{ color: "#0d6efd" }}/>
            <h3 className="card-title text-uppercase pt-3">ux design</h3>
            <p>
                L'<strong>UX Design</strong> est une méthode de conception centrée sur l'utilisateur. 
                Son but est d'offrir une expérience de navigation optimale à l'internaute.
            </p>
        </div>
      </section>
      <section className="card prestation-2 text-center border-0 rounded-4 shadow-sm mb-3 mx-2">
        <div className="card-body services-card-content d-flex flex-column align-items-center pt-5">
        <FontAwesomeIcon icon={faFileCode} size='2xl' style={{ color: "#0d6efd" }}/>
          <h3 className="card-title text-uppercase pt-3">développement web</h3>
          <p>
            Le <strong>développement de sites web</strong> repose sur l'utilisation des languages <span className='underlined'>HTML</span>, <span className='underlined'>CSS</span>, <span className='underlined'>JavaScript</span> et <span className='underlined'>PHP</span>.
          </p>
        </div>
      </section>
      <section className="card prestation-3 text-center border-0 rounded-4 shadow-sm mb-3 mx-2">
        <div className="card-body services-card-content d-flex flex-column align-items-center pt-5">
        <FontAwesomeIcon icon={faMagnifyingGlassDollar} size='2xl' style={{ color: "#0d6efd" }}/>
          <h3 className="card-title text-uppercase pt-3">référencement</h3>
          <p>
            Le <strong>référencement naturel</strong> d'un site, aussi appelé{" "}
            <span className='underlined'>SEO</span>, consiste à mettre des techniques en oeuvre pour
            améliorer sa position dans les résultats des moteurs de recherche.
          </p>
        </div>
      </section>
    </section>
  );
}
