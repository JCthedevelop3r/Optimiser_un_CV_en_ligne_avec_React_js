import {Link} from "react-router-dom";
import "./style.css";
import "./Header.css";

const Header = () => {
    return(
          <header className="container-fluid">
            <nav class="navbar fixed-top navbar-expand-lg">
              <div class="container-fluid container-fluid-2 text-uppercase">
                <Link to="/" class="navbar-brand text-white">john doe</Link>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                  <ul class="navbar-nav ps-2 grid gap-3">
                    <li class="nav-item">
                      <Link to="/" class="nav-link text-white" aria-current="page">accueil</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="ServicesPage" class="nav-link text-white" aria-current="page">services</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="ProductionsPage" class="nav-link text-white" aria-current="page">réalisations</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="BlogPage" class="nav-link text-white" aria-current="page">blog</Link>
                    </li>
                    <li class="nav-item">
                      <Link to="ContactPage" class="nav-link text-white" aria-current="page">me contacter</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
    );
}

export default Header;