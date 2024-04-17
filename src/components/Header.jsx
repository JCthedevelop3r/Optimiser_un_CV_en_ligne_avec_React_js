import {Link} from "react-router-dom";
import "./style.css";
import "./Header.css";

const Header = () => {
    return(
        <div className="header-component">
          <header>
            <nav class="navbar fixed-top navbar-expand-lg">
              <div class="container-fluid px-4 text-uppercase">
                <Link to="/" class="navbar-brand text-white">john doe</Link>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ps-2">
                    <li class="nav-item">
                      <Link to="/" class="nav-link text-white" aria-current="page">accueil</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/ServicePage" class="nav-link text-white">services</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="ProductionsPage" class="nav-link text-white">réalisations</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="BlogPage" class="nav-link text-white">blog</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="ContactPage" class="nav-link text-white">me contacter</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
        </div>
    );
}

export default Header;