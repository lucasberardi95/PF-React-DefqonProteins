import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import "/src/img/logoprote-removebg-preview.png"
import { NavLink, Link } from "react-router-dom"


const NavBar = () => {
    const img = '/src/img/logoprote-removebg-preview-removebg-preview1.png'
    return (
        <header className="navbar p-0 navbar-expand-lg bg-secondary">
            <div className="container-fluid bg-secondary">
                <Link to={"/"}>
                <img className="img" src= {img} alt="Logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <nav className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className={'enlace'} to={`/categoria/2`}> Volumen </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={'enlace'} to={`/categoria/3`}> Definicion </NavLink>
                        </li>
                    </ul>
                </nav>
                <CartWidget/>
            </div>
        </header>
    );
};

export default NavBar;