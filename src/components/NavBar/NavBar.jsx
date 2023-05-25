import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import "/src/img/logoprote-removebg-preview.png"
import { NavLink, Link } from "react-router-dom"


const NavBar = () => {
    const img = '/src/img/logoprote-removebg-preview.png'
    return (
        <header class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <Link to={"/"}>
                <img className="img" src= {img} alt="Logo" />
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <nav class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li className="li" class="nav-item">
                            <NavLink to={`/categoria/2`}> Volumen </NavLink>
                        </li>
                        <li className="li" class="nav-item">
                            <NavLink to={`/categoria/3`}> Definicion </NavLink>
                        </li>
                    </ul>
                </nav>
                <CartWidget/>
            </div>
        </header>
    );
};

export default NavBar;