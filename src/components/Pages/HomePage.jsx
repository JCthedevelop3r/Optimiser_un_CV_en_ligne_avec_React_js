
function Competences(props) {
    return(
        <div>
            <h4>{props.language}</h4>
            <p>{props.percent}</p>
            <img src={props.src} alt={props.alt} />
        </div>
    );
}

export default function HomePage() {
    return(
        <div className="HomePage">
            <section>
                <p>Bonjour, je suis John Doe</p>
                <h2>Développeur web full stack</h2>
                <button>En savoir plus</button>
            </section>
            <article>
                <section>
                    <h3>À propos</h3>
                    <p>Passionné par l'informatique et les nouvelles technologies, j'ai suivi une
                        formation d'intégrateur web au CEF. Au cours de cette formation, j'ai pu
                        acquérir des bases solides pour travailler dans le domaine du développement
                        web.
                    </p>
                    <p>Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale
                        pour consolider ma formation de développeur web full stack.
                    </p>
                    <p>J'accorde une attention particulière à la qualité du code que j'écris et je 
                        respecte les bonnes pratiques du web.
                    </p>
                </section>
                <section>
                    <img src="#" alt="Homme de profil travaillant à son bureau." />
                    <h3>Mes compétences</h3>
                    <Competences language="html 5" percent="90%" src="#" alt="Jauge rouge remplie à 90%."/>
                    <Competences language="css3" percent="80%" src="#" alt="Jauge turquoise remplie à 80%."/>
                    <Competences language="javascript" percent="70%" src="#" alt="Jauge jaune remplie à 70%."/>
                    <Competences language="php" percent="60%" src="#" alt="Jauge verte remplie à 60%."/>
                    <Competences language="react" percent="50%" src="#" alt="Jauge bleue remplie à 50%."/>
                </section>
            </article>
        </div>
        
    );
}