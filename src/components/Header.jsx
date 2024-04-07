import {Link} from "react-router-dom";

const Header = () => {
    return(
        <div className="header-component">
        <header>
            <nav>
                <h1>john doe</h1>
                <ul>
                    <li><Link to="/">accueil</Link></li>
                    <li><Link to="/ServicesPage">services</Link></li>
                    <li><Link to="/ProductionsPage">réalisations</Link></li>
                    <li><Link to="/BlogPage">blog</Link></li>
                    <li><Link to="/ContactPage">me contacter</Link></li>
                </ul>
            </nav>
        </header>
        </div>
    );
}

export default Header;