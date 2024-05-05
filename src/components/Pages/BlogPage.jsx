
function ArticleBlog(props) {
    return(
        <div>
            <img src={props.src} alt={props.alt} />
            <h3>{props.intitulé}</h3>
            <p>{props.description}</p>
            <p>Publié le <time dateTime={props.dateTime}>{props.date}</time></p>
        </div>
    );
}

export default function BlogPage() {
    return(
        <div className="blog-page">
            <h2>blog</h2>
            <p>Retrouvez ici quelques articles sur le développement web</p>
            <ArticleBlog 
                src="#" 
                alt="lignes de code HTML." 
                intitulé="Coder son site en HTML/CSS" 
                description="Some quick example text to build on the card title and make up
                the bulk of the card's content." 
                dateTime="2022-08-22"
                date="22 août 2022"
            />
            <ArticleBlog 
                src="#" 
                alt="Quatre piles de pièces de plus en plus grandes avec un bocal remplit 
                de pièces encore plus grand." 
                intitulé="Vendre ses produits sur le web" 
                description="Some quick example text to build on the card title and make up
                the bulk of the card's content." 
                dateTime="2022-08-20" 
                date="20 août 2022"
            />
            <ArticleBlog 
                src="#" 
                alt="Un ordinateur portable allumé et un smartphone posés sur une table de 
                pique-nique." 
                intitulé="Se positionner sur Google" 
                description="Some quick example text to build on the card title and make up
                the bulk of the card's content." 
                dateTime="2022-08-01" 
                date="1 août 2022"
            />
            <ArticleBlog 
                src="#" 
                alt="Un ordinateur de bureau, un ordinateur portable, une tablette et 
                un clavier d'ordinateur posés sur une table en bois" 
                intitulé="Coder responsive design" 
                description="Some quick example text to build on the card title and make up
                the bulk of the card's content." 
                dateTime="2022-07-31" 
                date="31 juillet 2022"
            />
            <ArticleBlog 
                src="#" 
                alt="Regroupement de mots de couleur blanche sur fond bleu sur le thème
                du référencement naturel." 
                intitulé="Techniques de référencement" 
                description="Some quick example text to build on the card title and make up
                the bulk of the card's content." 
                dateTime="2022-07-30" 
                date="30 juillet 2022"
            />
            <ArticleBlog 
                src="#" 
                alt="Différents logos de langage informatique, de frameworks et autres
                logiciels." 
                intitulé="Apprendre à coder" 
                description="Some quick example text to build on the card title and make up
                the bulk of the card's content." 
                dateTime="2022-07-12" 
                date="12 juillet 2022"
            />
        </div>
        
    );
}