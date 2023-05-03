import CardWidget from "../CardWidget/CardWidget";
import "./NavBar.css";
import "../../assets/logo-removebg-preview.png"

const NavBar = () => {
    const img = 'https://images.squarespace-cdn.com/content/v1/5e3a2166b359364624466675/1587002076299-7SJLGYI91LZ6X2DI1J1M/213111bdc383402b6b426d7b22796122.jpeg'
    return (
        <header class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <img className="img" src= {img} alt="Logo" />
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <nav class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            Home
                        </li>
                        <li class="nav-item">
                            Nosotros
                        </li>
                        <li class="nav-item">
                            Indumentaria
                        </li>
                        <li class="nav-item">
                            Contacto
                        </li>
                    </ul>
                </nav>
                <CardWidget/>
            </div>
        </header>
    );
};

export default NavBar;
