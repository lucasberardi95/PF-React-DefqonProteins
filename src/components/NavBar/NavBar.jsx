import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import "../../../public/img/logoprote-removebg-preview.png"

const NavBar = () => {
    const img = '../../../public/img/logoprote-removebg-preview.png'
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
                            Contacto
                        </li>
                    </ul>
                </nav>
                <CartWidget/>
            </div>
        </header>
    );
};

export default NavBar;
